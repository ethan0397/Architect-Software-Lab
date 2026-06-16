(function () {
  var GROUPS = {
    creational: { vi: "Creational", en: "Creational", tag: "blue" },
    structural: { vi: "Structural", en: "Structural", tag: "pink" },
    behavioral: { vi: "Behavioral", en: "Behavioral", tag: "green" },
  };

  function lang() {
    return document.documentElement.lang === "en" ? "en" : "vi";
  }

  function t(key) {
    var l = lang();
    var labels = {
      problem: { vi: "Vấn đề", en: "Problem" },
      meaning: { vi: "Ý nghĩa", en: "Meaning" },
      whenUse: { vi: "Khi nào dùng", en: "When to use" },
      whenNot: { vi: "Khi nào không nên dùng", en: "When not to use" },
      tradeoff: { vi: "Tradeoff", en: "Tradeoff" },
      example: { vi: "Ví dụ code", en: "Code example" },
      realWorld: { vi: "Ví dụ thực tế", en: "Real-world examples" },
      back: { vi: "← Quay lại Design Patterns", en: "← Back to Design Patterns" },
      toc: { vi: "Mục lục", en: "Contents" },
      sameGroup: { vi: "Cùng nhóm", en: "Same group" },
      notFound: { vi: "Không tìm thấy pattern.", en: "Pattern not found." },
      allPatterns: { vi: "Tất cả pattern", en: "All patterns" },
      intro: { vi: "1. Giới thiệu", en: "1. Introduction" },
      origin: { vi: "2. Mục đích ra đời", en: "2. Why it exists" },
      architecture: { vi: "3. Kiến trúc", en: "3. Architecture" },
      pros: { vi: "Ưu điểm", en: "Pros" },
      cons: { vi: "Nhược điểm", en: "Cons" },
      whenUseDetail: { vi: "5. Khi nào sử dụng", en: "5. When to use" },
      codeExample: { vi: "6. Source code minh họa", en: "6. Code example" },
      related: { vi: "7. Design Pattern liên quan", en: "7. Related patterns" },
      vibloSource: { vi: "Bài gốc trên Viblo", en: "Original article on Viblo" },
      vibloNote: {
        vi: "Nội dung chi tiết bên dưới được lấy từ bài viết Viblo (tiếng Việt).",
        en: "Full article content below is from Viblo (Vietnamese). English summary sections follow where available.",
      },
    };
    return labels[key][l];
  }

  function patternPage(id) {
    return "./pattern" + (lang() === "en" ? ".en" : "") + ".html?id=" + id;
  }

  function patternsIndexPage() {
    return "./design-patterns" + (lang() === "en" ? ".en" : "") + ".html";
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function decodeHtml(value) {
    return String(value)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"');
  }

  function renderList(items) {
    if (!items || !items.length) {
      return "";
    }
    return "<ul>" + items.map(function (item) { return "<li>" + escapeHtml(item) + "</li>"; }).join("") + "</ul>";
  }

  function formatVibloText(text) {
    if (!text) {
      return "";
    }
    var html = "";
    var blocks = text.split("```");
    for (var i = 0; i < blocks.length; i++) {
      if (i % 2 === 1) {
        html += '<pre class="pattern-code"><code>' + escapeHtml(decodeHtml(blocks[i].trim())) + "</code></pre>";
        continue;
      }
      html += formatVibloProse(blocks[i]);
    }
    return html;
  }

  function formatVibloProse(text) {
    if (!text || !text.trim()) {
      return "";
    }
    var html = "";
    var lines = text.split("\n");
    var buffer = [];

    function flushBuffer() {
      if (!buffer.length) {
        return;
      }
      var chunk = buffer.join("\n").trim();
      buffer = [];
      if (!chunk) {
        return;
      }
      var paras = chunk.split(/\n\n+/);
      for (var j = 0; j < paras.length; j++) {
        var p = paras[j].trim();
        if (!p) {
          continue;
        }
        var imageMatch = p.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
        if (imageMatch) {
          html +=
            '<figure class="pattern-figure">' +
            '<img src="' + escapeHtml(imageMatch[2]) + '" alt="' + escapeHtml(imageMatch[1]) + '" loading="lazy" />' +
            (imageMatch[1] ? "<figcaption>" + escapeHtml(imageMatch[1]) + "</figcaption>" : "") +
            "</figure>";
          continue;
        }
        var bulletLines = p.split("\n").filter(function (line) {
          return line.trim().indexOf("- ") === 0;
        });
        if (bulletLines.length) {
          html += "<ul>" + bulletLines.map(function (line) {
            return "<li>" + escapeHtml(line.trim().replace(/^- /, "")) + "</li>";
          }).join("") + "</ul>";
          continue;
        }
        html += "<p>" + escapeHtml(p).replace(/\n/g, "<br>") + "</p>";
      }
    }

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (line.indexOf("### ") === 0) {
        flushBuffer();
        html += "<h3 class=\"pattern-subheading\">" + escapeHtml(line.replace(/^###\s+/, "")) + "</h3>";
      } else {
        buffer.push(line);
      }
    }
    flushBuffer();
    return html;
  }

  function renderCodeExamples(viblo) {
    var examples = viblo.examples && viblo.examples.length ? viblo.examples : null;
    if (!examples && viblo.example) {
      return '<pre class="pattern-code"><code>' + escapeHtml(decodeHtml(viblo.example)) + "</code></pre>";
    }
    if (!examples || !examples.length) {
      return viblo.codeSection ? formatVibloText(viblo.codeSection) : "";
    }
    return examples
      .map(function (example) {
        var block = "";
        if (example.title) {
          block += '<h3 class="pattern-subheading">' + escapeHtml(example.title) + "</h3>";
        }
        if (example.text) {
          block += formatVibloProse(example.text);
        }
        if (example.code) {
          block += '<pre class="pattern-code"><code>' + escapeHtml(decodeHtml(example.code)) + "</code></pre>";
        }
        return block;
      })
      .join("");
  }

  function section(id, title, body) {
    var anchor = id ? ' id="' + id + '"' : "";
    return '<section class="section-block"' + anchor + "><h2>" + escapeHtml(title) + "</h2>" + body + "</section>";
  }

  function renderCatalogSummary(pattern) {
    var l = lang();
    var html = "";
    if (pattern.problem) {
      html += section("", t("problem"), "<p>" + escapeHtml(pattern.problem[l]) + "</p>");
    }
    if (pattern.meaning) {
      html += section("", t("meaning"), "<p>" + escapeHtml(pattern.meaning[l]) + "</p>");
    }
    if (pattern.whenUse) {
      html += section("", t("whenUse"), renderList(pattern.whenUse[l]));
    }
    if (pattern.whenNot) {
      html += section("", t("whenNot"), renderList(pattern.whenNot[l]));
    }
    if (pattern.tradeoff) {
      html += section("", t("tradeoff"), "<p>" + escapeHtml(pattern.tradeoff[l]) + "</p>");
    }
    if (pattern.realWorld) {
      html += section("", t("realWorld"), renderList(pattern.realWorld[l]));
    }
    return html;
  }

  function renderVibloContent(viblo) {
    var html = "";
    var tocItems = [];

    if (viblo.vibloUrl) {
      html +=
        '<div class="note pattern-source">' +
        "<p>" + t("vibloNote") + "</p>" +
        '<a class="file-link" href="' + escapeHtml(viblo.vibloUrl) + '" target="_blank" rel="noopener">' +
        t("vibloSource") +
        "</a></div>";
    }

    if (viblo.intro) {
      html += section("intro", t("intro"), formatVibloText(viblo.intro));
      tocItems.push({ id: "intro", label: t("intro") });
    }
    if (viblo.origin) {
      html += section("origin", t("origin"), formatVibloText(viblo.origin));
      tocItems.push({ id: "origin", label: t("origin") });
    }
    if (viblo.architecture) {
      html += section("architecture", t("architecture"), formatVibloText(viblo.architecture));
      tocItems.push({ id: "architecture", label: t("architecture") });
    }
    if (viblo.pros && viblo.pros.length) {
      html += section("pros", t("pros"), renderList(viblo.pros));
      tocItems.push({ id: "pros", label: t("pros") });
    }
    if (viblo.cons && viblo.cons.length) {
      html += section("cons", t("cons"), renderList(viblo.cons));
      tocItems.push({ id: "cons", label: t("cons") });
    }
    if (viblo.whenUseDetail) {
      html += section("when-use", t("whenUseDetail"), formatVibloText(viblo.whenUseDetail));
      tocItems.push({ id: "when-use", label: t("whenUseDetail") });
    }
    var codeHtml = renderCodeExamples(viblo);
    if (codeHtml) {
      html += section("code", t("codeExample"), codeHtml);
      tocItems.push({ id: "code", label: t("codeExample") });
    }
    if (viblo.related) {
      html += section("related", t("related"), formatVibloText(viblo.related));
      tocItems.push({ id: "related", label: t("related") });
    }

    return { html: html, tocItems: tocItems };
  }

  function renderSectionToc(items) {
    var nav = document.querySelector(".pattern-section-toc");
    if (!nav || !items.length) {
      return;
    }
    nav.innerHTML = items
      .map(function (item) {
        return '<a href="#' + item.id + '">' + escapeHtml(item.label) + "</a>";
      })
      .join("");
  }

  function renderPattern(pattern) {
    var l = lang();
    var group = GROUPS[pattern.group];
    var title = pattern.name[l];
    var viblo = window.PATTERNS_VIBLO && window.PATTERNS_VIBLO[pattern.id];
    document.title = title + " — Design Patterns";

    var heroSummary = pattern.summary[l];
    if (viblo && viblo.intro) {
      heroSummary = viblo.intro.split("\n\n")[0].replace(/^- /, "").trim();
    }

    var hero = document.querySelector(".pattern-hero");
    if (hero) {
      hero.innerHTML =
        '<div class="pattern-breadcrumb">' +
        '<a href="' + patternsIndexPage() + '">Design Patterns</a>' +
        " / " +
        '<span>' + escapeHtml(group[l]) + "</span>" +
        " / " +
        "<strong>" + escapeHtml(title) + "</strong>" +
        "</div>" +
        '<div class="eyebrow">' + escapeHtml(group[l]) + "</div>" +
        "<h1>" + escapeHtml(title) + "</h1>" +
        "<p>" + escapeHtml(heroSummary) + "</p>" +
        '<span class="tag ' + group.tag + '">' + escapeHtml(group[l]) + "</span>";
    }

    var main = document.querySelector(".pattern-content");
    if (!main) {
      return;
    }

    var html = "";
    var tocItems = [];

    if (viblo) {
      var vibloRender = renderVibloContent(viblo);
      html += vibloRender.html;
      tocItems = vibloRender.tocItems;
      if (l === "en") {
        html += section("", "English summary", renderCatalogSummary(pattern));
      }
    } else {
      html += renderCatalogSummary(pattern);
      if (pattern.example) {
        html += section("code", t("example"), '<pre class="pattern-code"><code>' + escapeHtml(pattern.example[l]) + "</code></pre>");
      }
    }

    html +=
      '<div class="pattern-back">' +
      '<a class="file-link" href="' + patternsIndexPage() + '">' + t("back") + "</a>" +
      "</div>";

    main.innerHTML = html;
    renderSectionToc(tocItems);

    var sidebar = document.querySelector(".pattern-sidebar-links");
    if (sidebar && window.PATTERNS_CATALOG) {
      var links = window.PATTERNS_CATALOG.filter(function (p) {
        return p.group === pattern.group;
      });
      sidebar.innerHTML = links
        .map(function (p) {
          var active = p.id === pattern.id ? ' class="active"' : "";
          return '<a href="' + patternPage(p.id) + '"' + active + ">" + escapeHtml(p.name[l]) + "</a>";
        })
        .join("");
    }
  }

  function init() {
    var params = new URLSearchParams(window.location.search);
    var id = params.get("id");
    if (!id || !window.PATTERNS_BY_ID || !window.PATTERNS_BY_ID[id]) {
      var main = document.querySelector(".pattern-content");
      if (main) {
        main.innerHTML = '<div class="note"><strong>' + t("notFound") + '</strong> <a href="' + patternsIndexPage() + '">' + t("allPatterns") + "</a></div>";
      }
      return;
    }
    renderPattern(window.PATTERNS_BY_ID[id]);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
