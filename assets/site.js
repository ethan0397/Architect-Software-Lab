(function () {
  var SITE_MANIFEST = {
    primaryPageIds: ["home", "roadmap", "design-patterns", "architecture-foundations", "system-design-exercises"],
    bookPageIds: ["hard-parts", "fundamentals"],
    bookMenuLabel: {
      vi: "Sách học",
      en: "Book Tracks",
    },
    pages: [
      {
        id: "home",
        files: { vi: "index.html", en: "index.en.html" },
        navLabel: { vi: "Trang chủ", en: "Home" },
      },
      {
        id: "roadmap",
        files: { vi: "roadmap.html", en: "roadmap.en.html" },
        navLabel: { vi: "Roadmap", en: "Roadmap" },
      },
      {
        id: "design-patterns",
        files: { vi: "design-patterns.html", en: "design-patterns.en.html" },
        navLabel: { vi: "Patterns", en: "Patterns" },
      },
      {
        id: "architecture-foundations",
        files: { vi: "architecture-foundations.html", en: "architecture-foundations.en.html" },
        navLabel: { vi: "Architecture", en: "Architecture" },
      },
      {
        id: "system-design-exercises",
        files: { vi: "system-design-exercises.html", en: "system-design-exercises.en.html" },
        navLabel: { vi: "Exercises", en: "Exercises" },
      },
      {
        id: "hard-parts",
        files: { vi: "hard-parts.html", en: "hard-parts.en.html" },
        navLabel: { vi: "Hard Parts", en: "Hard Parts" },
      },
      {
        id: "fundamentals",
        files: { vi: "fundamentals.html", en: "fundamentals.en.html" },
        navLabel: { vi: "Fundamentals", en: "Fundamentals" },
      },
    ],
  };
  var storageThemeKey = "architect-lab-theme";
  var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  var currentTheme = localStorage.getItem(storageThemeKey) || (prefersDark ? "dark" : "light");
  var pagesById = {};
  var pagesByFile = {};

  SITE_MANIFEST.pages.forEach(function (page) {
    pagesById[page.id] = page;
    pagesByFile[page.files.vi] = page;
    pagesByFile[page.files.en] = page;
  });

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(storageThemeKey, theme);
    currentTheme = theme;
    updateThemeButton();
  }

  function isEnglishPage() {
    return document.documentElement.lang === "en";
  }

  function currentLanguage() {
    return isEnglishPage() ? "en" : "vi";
  }

  function currentFileName() {
    var path = window.location.pathname;
    var file = path.split("/").pop();
    return file || "index.html";
  }

  function currentPage() {
    return pagesByFile[currentFileName()] || pagesById.home;
  }

  function fileForLanguage(page, language) {
    if (!page || !page.files) {
      return currentFileName();
    }

    return page.files[language] || page.files.vi || currentFileName();
  }

  function createNavLink(page, language, active) {
    var link = document.createElement("a");
    link.href = "./" + fileForLanguage(page, language);
    link.textContent = page.navLabel[language] || page.navLabel.vi;

    if (active) {
      link.classList.add("active");
    }

    return link;
  }

  function buildNavigation() {
    var topbar = document.querySelector(".topbar");
    if (!topbar) {
      return;
    }

    var nav = topbar.querySelector(".nav");
    if (!nav) {
      nav = document.createElement("nav");
      nav.className = "nav";
      topbar.appendChild(nav);
    }

    var language = currentLanguage();
    var page = currentPage();

    nav.textContent = "";

    SITE_MANIFEST.primaryPageIds.forEach(function (pageId) {
      var navPage = pagesById[pageId];
      nav.appendChild(createNavLink(navPage, language, navPage.id === page.id));
    });

    var bookMenu = document.createElement("details");
    bookMenu.className = "nav-menu";

    var summary = document.createElement("summary");
    summary.textContent = SITE_MANIFEST.bookMenuLabel[language];
    if (SITE_MANIFEST.bookPageIds.indexOf(page.id) !== -1) {
      summary.classList.add("active");
    }
    bookMenu.appendChild(summary);

    var panel = document.createElement("div");
    panel.className = "nav-menu-panel";

    SITE_MANIFEST.bookPageIds.forEach(function (pageId) {
      var navPage = pagesById[pageId];
      panel.appendChild(createNavLink(navPage, language, navPage.id === page.id));
    });

    bookMenu.appendChild(panel);
    nav.appendChild(bookMenu);
  }

  function updateThemeButton() {
    var button = document.querySelector("[data-theme-toggle]");
    if (!button) {
      return;
    }

    var english = isEnglishPage();
    if (currentTheme === "dark") {
      button.textContent = english ? "Light mode" : "Chế độ sáng";
    } else {
      button.textContent = english ? "Dark mode" : "Chế độ tối";
    }
  }

  function buildControls() {
    var topbar = document.querySelector(".topbar");
    if (!topbar) {
      return;
    }

    var controls = document.createElement("div");
    controls.className = "topbar-controls";

    var langGroup = document.createElement("div");
    langGroup.className = "toggle-group";

    var page = currentPage();
    var english = isEnglishPage();

    var viLink = document.createElement("a");
    viLink.className = "toggle-button" + (english ? "" : " active");
    viLink.href = "./" + fileForLanguage(page, "vi");
    viLink.textContent = "VI";

    var enLink = document.createElement("a");
    enLink.className = "toggle-button" + (english ? " active" : "");
    enLink.href = "./" + fileForLanguage(page, "en");
    enLink.textContent = "EN";

    langGroup.appendChild(viLink);
    langGroup.appendChild(enLink);

    var themeButton = document.createElement("button");
    themeButton.type = "button";
    themeButton.className = "toggle-button";
    themeButton.setAttribute("data-theme-toggle", "true");
    themeButton.addEventListener("click", function () {
      setTheme(currentTheme === "dark" ? "light" : "dark");
    });

    controls.appendChild(langGroup);
    controls.appendChild(themeButton);
    topbar.appendChild(controls);

    updateThemeButton();
  }

  function wireNavMenus() {
    var menus = Array.prototype.slice.call(document.querySelectorAll(".nav-menu"));
    if (!menus.length) {
      return;
    }

    document.addEventListener("click", function (event) {
      menus.forEach(function (menu) {
        if (!menu.contains(event.target)) {
          menu.removeAttribute("open");
        }
      });
    });

    menus.forEach(function (menu) {
      var links = menu.querySelectorAll("a");
      links.forEach(function (link) {
        link.addEventListener("click", function () {
          menu.removeAttribute("open");
        });
      });
    });
  }

  function enableMotion() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    document.body.classList.add("motion-ready");

    var revealTargets = Array.prototype.slice.call(
      document.querySelectorAll(
        ".topbar, .hero-copy, .hero-art, .sidebar, .section-block, .card, .timeline-item, .note, .table-wrap"
      )
    );

    if (!revealTargets.length) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      revealTargets.forEach(function (target) {
        target.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    revealTargets.forEach(function (target, index) {
      target.style.transitionDelay = Math.min(index * 30, 220) + "ms";
      observer.observe(target);
    });
  }

  function createDynamicBackground() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    var canvas = document.createElement("canvas");
    canvas.className = "site-bg";
    canvas.setAttribute("aria-hidden", "true");
    document.body.prepend(canvas);

    var ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    var stars = [];
    var streaks = [];
    var width = 0;
    var height = 0;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);

    function random(min, max) {
      return Math.random() * (max - min) + min;
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      var starCount = Math.max(55, Math.floor((width * height) / 22000));
      stars = Array.from({ length: starCount }, function () {
        return {
          x: random(0, width),
          y: random(0, height),
          r: random(0.6, 1.8),
          alpha: random(0.2, 0.9),
          pulse: random(0.002, 0.01),
        };
      });

      var streakCount = Math.max(5, Math.floor(width / 340));
      streaks = Array.from({ length: streakCount }, function () {
        return spawnStreak(true);
      });
    }

    function spawnStreak(initial) {
      var startX = initial ? random(0, width) : random(width * 0.35, width * 1.15);
      var startY = initial ? random(0, height) : random(-height * 0.25, height * 0.1);
      return {
        x: startX,
        y: startY,
        len: random(50, 130),
        speed: random(5, 10),
        alpha: random(0.18, 0.42),
      };
    }

    function drawBackgroundGlow() {
      var grad1 = ctx.createRadialGradient(width * 0.82, height * 0.14, 0, width * 0.82, height * 0.14, width * 0.42);
      grad1.addColorStop(0, "rgba(232,160,32,0.11)");
      grad1.addColorStop(1, "rgba(232,160,32,0)");
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      var grad2 = ctx.createRadialGradient(width * 0.16, height * 0.08, 0, width * 0.16, height * 0.08, width * 0.34);
      grad2.addColorStop(0, "rgba(62,207,114,0.05)");
      grad2.addColorStop(1, "rgba(62,207,114,0)");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);
    }

    function drawStars() {
      stars.forEach(function (star) {
        star.alpha += star.pulse;
        if (star.alpha >= 0.95 || star.alpha <= 0.18) {
          star.pulse *= -1;
        }

        ctx.beginPath();
        ctx.fillStyle = "rgba(240,234,216," + star.alpha.toFixed(3) + ")";
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function drawStreaks() {
      streaks.forEach(function (streak, index) {
        var endX = streak.x - streak.len;
        var endY = streak.y - streak.len * 0.68;
        var gradient = ctx.createLinearGradient(streak.x, streak.y, endX, endY);
        gradient.addColorStop(0, "rgba(240,234,216," + (streak.alpha + 0.18).toFixed(3) + ")");
        gradient.addColorStop(0.25, "rgba(232,160,32," + streak.alpha.toFixed(3) + ")");
        gradient.addColorStop(1, "rgba(232,160,32,0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(streak.x, streak.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        streak.x -= streak.speed;
        streak.y += streak.speed * 0.68;

        if (endX < -80 || streak.y > height + 120) {
          streaks[index] = spawnStreak(false);
        }
      });
    }

    function frame() {
      ctx.clearRect(0, 0, width, height);
      drawBackgroundGlow();
      drawStars();
      drawStreaks();
      window.requestAnimationFrame(frame);
    }

    resize();
    window.addEventListener("resize", resize);
    frame();
  }

  setTheme(currentTheme);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      createDynamicBackground();
      buildNavigation();
      buildControls();
      wireNavMenus();
      enableMotion();
    });
  } else {
    createDynamicBackground();
    buildNavigation();
    buildControls();
    wireNavMenus();
    enableMotion();
  }
})();
