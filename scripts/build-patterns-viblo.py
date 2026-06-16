"""Fetch Viblo pattern articles and build patterns-viblo.json + patterns-viblo.js."""
import html as html_module
import json
import re
import urllib.request

VIBLO_URLS = {
    "singleton": "https://viblo.asia/p/singleton-design-pattern-tro-thu-dac-luc-cua-developers-Qbq5QBkJKD8",
    "factory-method": "https://viblo.asia/p/factory-method-design-pattern-tro-thu-dac-luc-cua-developers-924lJBLYlPM",
    "abstract-factory": "https://viblo.asia/p/abstract-factory-design-pattern-tro-thu-dac-luc-cua-developers-maGK7B4M5j2",
    "builder": "https://viblo.asia/p/builder-design-pattern-tro-thu-dac-luc-cua-developers-bWrZnowwlxw",
    "prototype": "https://viblo.asia/p/prototype-design-pattern-tro-thu-dac-luc-cua-developers-GrLZDBQO5k0",
    "adapter": "https://viblo.asia/p/adapter-design-pattern-tro-thu-dac-luc-cua-developers-Az45bqYQlxY",
    "bridge": "https://viblo.asia/p/bridge-design-pattern-tro-thu-dac-luc-cua-developers-gDVK2oG2ZLj",
    "composite": "https://viblo.asia/p/composite-design-pattern-tro-thu-dac-luc-cua-developers-Qbq5QBk3KD8",
    "decorator": "https://viblo.asia/p/decorator-design-pattern-tro-thu-dac-luc-cua-developers-1VgZvQ1OKAw",
    "facade": "https://viblo.asia/p/facade-design-pattern-tro-thu-dac-luc-cua-developers-924lJBLNlPM",
    "flyweight": "https://viblo.asia/p/flyweight-design-pattern-tro-thu-dac-luc-cua-developers-maGK7B4b5j2",
    "proxy": "https://viblo.asia/p/proxy-design-pattern-tro-thu-dac-luc-cua-developers-RQqKLB2bl7z",
    "interpreter": "https://viblo.asia/p/interpreter-design-pattern-tro-thu-dac-luc-cua-developers-djeZ1d43KWz",
    "template-method": "https://viblo.asia/p/template-method-design-pattern-tro-thu-dac-luc-cua-developers-Az45bqYLlxY",
    "chain-of-responsibility": "https://viblo.asia/p/chain-of-responsibility-design-pattern-tro-thu-dac-luc-cua-developers-yMnKMBNDZ7P",
    "command": "https://viblo.asia/p/command-design-pattern-tro-thu-dac-luc-cua-developers-4dbZNBqkZYM",
    "iterator": "https://viblo.asia/p/iterator-design-pattern-tro-thu-dac-luc-cua-developers-jvElaNwY5kw",
    "mediator": "https://viblo.asia/p/mediator-design-pattern-tro-thu-dac-luc-cua-developers-m68Z0jVj5kG",
    "memento": "https://viblo.asia/p/memento-design-pattern-tro-thu-dac-luc-cua-developers-gGJ59BzrKX2",
    "observer": "https://viblo.asia/p/observer-design-pattern-tro-thu-dac-luc-cua-developers-gAm5y7WAZdb",
    "state": "https://viblo.asia/p/state-design-pattern-tro-thu-dac-luc-cua-developers-3P0lPB9PKox",
    "strategy": "https://viblo.asia/p/strategy-design-pattern-tro-thu-dac-luc-cua-developers-bJzKmdwP59N",
    "visitor": "https://viblo.asia/p/visitor-design-pattern-tro-thu-dac-luc-cua-developers-gDVK2oGeZLj",
}

SKIP_SECTIONS = (
    "tài liệu tham khảo",
    "bài viết của mình đến đây là kết thúc",
    "tags",
    "comments",
)


def normalize_title(title: str) -> str:
    title = html_module.unescape(title).strip().lower()
    return re.sub(r"\s+", " ", title)


def fetch_text(url: str) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        return resp.read().decode("utf-8", errors="replace")


def extract_article_html(page_html: str) -> str:
    for pattern in (
        r'(?is)<article[^>]*class="[^"]*article-content[^"]*"[^>]*>(.*?)</article>',
        r'(?is)<div[^>]*class="[^"]*article-content[^"]*"[^>]*>(.*?)</div>',
        r'(?is)<div[^>]*class="[^"]*md-contents[^"]*"[^>]*>(.*?)</div>',
    ):
        match = re.search(pattern, page_html)
        if match:
            return match.group(1)
    return page_html


def fragment_to_text(html_fragment: str) -> str:
    if not html_fragment or not html_fragment.strip():
        return ""

    frag = html_fragment
    frag = re.sub(
        r'(?is)<img[^>]*src=["\']([^"\']+)["\'][^>]*alt=["\']([^"\']*)["\'][^>]*>',
        r"\n![\2](\1)\n",
        frag,
    )
    frag = re.sub(
        r'(?is)<img[^>]*alt=["\']([^"\']*)["\'][^>]*src=["\']([^"\']+)["\'][^>]*>',
        r"\n![\1](\2)\n",
        frag,
    )
    frag = re.sub(
        r'(?is)<img[^>]*src=["\']([^"\']+)["\'][^>]*>',
        r"\n![](\1)\n",
        frag,
    )
    frag = re.sub(
        r"(?is)<pre[^>]*><code[^>]*>(.*?)</code></pre>",
        lambda m: "\n```\n" + html_module.unescape(re.sub(r"<[^>]+>", "", m.group(1))) + "\n```\n",
        frag,
    )
    frag = re.sub(
        r"(?is)<pre[^>]*>(.*?)</pre>",
        lambda m: "\n```\n" + html_module.unescape(re.sub(r"<[^>]+>", "", m.group(1))) + "\n```\n",
        frag,
    )
    frag = re.sub(r"(?i)<br\s*/?>", "\n", frag)
    frag = re.sub(r"(?i)</p>", "\n\n", frag)
    frag = re.sub(r"(?i)</li>", "\n", frag)
    frag = re.sub(r"(?i)<li[^>]*>", "- ", frag)
    frag = re.sub(r"<[^>]+>", "", frag)
    frag = html_module.unescape(frag)
    frag = re.sub(r"\n{3,}", "\n\n", frag)
    return frag.strip()


def classify_major(title_raw: str) -> str | None:
    title = normalize_title(title_raw)
    if "giới thiệu" in title:
        return "intro"
    if "mục đích" in title and "đời" in title:
        return "origin"
    if "kiến trúc" in title:
        return "architecture"
    if "ưu" in title and "nhược" in title:
        return "prosCons"
    if "khi nào" in title:
        return "whenUseDetail"
    if "source code" in title:
        return "codeSection"
    if "liên quan" in title:
        return "related"
    return None


def should_skip(title_raw: str) -> bool:
    title = normalize_title(title_raw)
    return any(marker in title for marker in SKIP_SECTIONS)


def append_section(sections: dict[str, str], key: str, chunk: str) -> None:
    chunk = chunk.strip()
    if not chunk:
        return
    if key in sections and sections[key]:
        sections[key] = sections[key] + "\n\n" + chunk
    else:
        sections[key] = chunk


def parse_sections_from_html(page_html: str) -> tuple[dict[str, str], str, str]:
    html = extract_article_html(page_html)
    html = re.sub(r"(?is)<script.*?>.*?</script>", "", html)
    html = re.sub(r"(?is)<style.*?>.*?</style>", "", html)

    parts = re.split(r"(?is)(<h[234][^>]*>.*?</h[234]>)", html)
    sections: dict[str, str] = {}
    pros_text = ""
    cons_text = ""
    current: str | None = None
    pending_title: str | None = None

    for part in parts:
        part = part.strip()
        if not part:
            continue

        heading = re.match(r"(?is)<h([234])[^>]*>(.*?)</h\1>", part)
        if heading:
            title_raw = re.sub(r"<[^>]+>", "", heading.group(2))
            title_raw = html_module.unescape(title_raw).strip()
            title = normalize_title(title_raw)

            if should_skip(title_raw):
                current = None
                pending_title = None
                continue

            if title == "ưu điểm" or title.startswith("ưu điểm"):
                current = "__pros__"
                pending_title = None
                continue
            if title == "nhược điểm" or title.startswith("nhược điểm"):
                current = "__cons__"
                pending_title = None
                continue

            major = classify_major(title_raw)
            if major:
                current = major
                pending_title = None
                continue

            pending_title = title_raw
            continue

        text = fragment_to_text(part)
        if not text:
            continue

        if pending_title:
            text = f"### {pending_title}\n\n{text}"
            pending_title = None

        if current == "__pros__":
            pros_text = (pros_text + "\n\n" + text).strip() if pros_text else text
        elif current == "__cons__":
            cons_text = (cons_text + "\n\n" + text).strip() if cons_text else text
        elif current:
            append_section(sections, current, text)
        elif not sections.get("intro"):
            append_section(sections, "intro", text)

    return sections, pros_text, cons_text


def parse_bullets(text: str) -> list[str]:
    items = []
    for line in text.split("\n"):
        line = line.strip()
        if line.startswith("- "):
            items.append(line[2:].strip())
    return items


def parse_bullets_or_paragraphs(text: str) -> list[str]:
    bullets = parse_bullets(text)
    if bullets:
        return bullets
    items = []
    for block in re.split(r"\n\n+", text):
        block = block.strip()
        if not block or block.startswith("###"):
            continue
        for line in block.split("\n"):
            line = line.strip()
            if line and not line.startswith("#"):
                items.append(line)
    return items


def extract_pros_cons(pros_cons: str, pros_text: str, cons_text: str) -> tuple[list[str], list[str]]:
    pros = parse_bullets_or_paragraphs(pros_text)
    cons = parse_bullets_or_paragraphs(cons_text)
    if pros or cons:
        return pros, cons
    if not pros_cons:
        return [], []
    lower = pros_cons.lower()
    pros_idx = lower.find("ưu điểm")
    cons_idx = lower.find("nhược điểm")
    if pros_idx == -1 and cons_idx == -1:
        return parse_bullets_or_paragraphs(pros_cons), []
    if cons_idx == -1:
        cons_idx = len(pros_cons)
    if pros_idx != -1:
        chunk = pros_cons[pros_idx:cons_idx if cons_idx > pros_idx else len(pros_cons)]
        pros = parse_bullets_or_paragraphs(chunk)
    if cons_idx != -1:
        cons = parse_bullets_or_paragraphs(pros_cons[cons_idx:])
    return pros, cons


def clean_related(text: str) -> str:
    if not text:
        return ""
    marker = "Bài viết của mình đến đây là kết thúc"
    if marker in text:
        text = text.split(marker)[0].strip()
    return text


def extract_code_examples(code_section: str) -> list[dict[str, str]]:
    if not code_section:
        return []

    examples: list[dict[str, str]] = []
    chunks = re.split(r"\n###\s+", code_section)

    for index, chunk in enumerate(chunks):
        chunk = chunk.strip()
        if not chunk:
            continue

        if index == 0 and "\n" not in chunk.split("```", 1)[0]:
            title = ""
            body = chunk
        else:
            lines = chunk.split("\n", 1)
            title = lines[0].strip()
            body = lines[1].strip() if len(lines) > 1 else ""

        blocks = re.findall(r"```(?:\w+)?\n?(.*?)```", body, re.S)
        if blocks:
            for block_index, block in enumerate(blocks):
                example_title = title
                if block_index > 0 and title:
                    example_title = f"{title} ({block_index + 1})"
                examples.append({"title": example_title, "code": block.strip()})
        elif title and body:
            examples.append({"title": title, "code": "", "text": body})

    if not examples:
        blocks = re.findall(r"```(?:\w+)?\n?(.*?)```", code_section, re.S)
        for block in blocks:
            examples.append({"title": "", "code": block.strip()})

    return examples


def join_example_code(examples: list[dict[str, str]]) -> str:
    parts = []
    for example in examples:
        if not example.get("code"):
            continue
        if example.get("title"):
            parts.append(f"// {example['title']}\n{example['code']}")
        else:
            parts.append(example["code"])
    return "\n\n// ---\n\n".join(parts)


def main():
    output = {}
    for pid, url in VIBLO_URLS.items():
        print(f"Fetching {pid}...")
        html = fetch_text(url)
        sections, pros_text, cons_text = parse_sections_from_html(html)
        pros, cons = extract_pros_cons(sections.get("prosCons", ""), pros_text, cons_text)
        code_section = sections.get("codeSection", "")
        examples = extract_code_examples(code_section)

        output[pid] = {
            "vibloUrl": url,
            "intro": sections.get("intro", ""),
            "origin": sections.get("origin", ""),
            "architecture": sections.get("architecture", ""),
            "pros": pros,
            "cons": cons,
            "whenUseDetail": sections.get("whenUseDetail", ""),
            "codeSection": code_section,
            "examples": examples,
            "example": join_example_code(examples),
            "related": clean_related(sections.get("related", "")),
        }

    json_path = "assets/patterns-viblo.json"
    js_path = "assets/patterns-viblo.js"
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)
    with open(js_path, "w", encoding="utf-8") as f:
        f.write("window.PATTERNS_VIBLO = ")
        json.dump(output, f, ensure_ascii=False, indent=2)
        f.write(";\n")
    print(f"Wrote {json_path} and {js_path} ({len(output)} patterns)")


if __name__ == "__main__":
    main()
