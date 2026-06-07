# Architect Software Lab

Bộ tài liệu học `Software Architecture` theo hướng thực chiến, có:

- roadmap học từ nền tảng đến architect mindset
- design patterns theo nhóm vấn đề
- architecture foundations
- system design exercises
- book track theo `Software Architecture: The Hard Parts`
- book track theo `Fundamentals of Software Architecture`
- song ngữ `Vietnamese / English`
- 2 giao diện `light / dark`
- giao diện HTML đẹp để đọc như một mini docs site

## Xem nhanh

Trang chính:

- `index.html`

Các trang nội dung:

- `roadmap.html`
- `design-patterns.html`
- `architecture-foundations.html`
- `system-design-exercises.html`
- `hard-parts.html`
- `fundamentals.html`

## Nội dung chính

### 1. Roadmap học Software Architect

Đi từ:

- code-level design
- design patterns
- application architecture
- distributed systems
- architecture tradeoff
- system design

### 2. Design Patterns

Chia theo 3 nhóm:

- `Creational`
- `Structural`
- `Behavioral`

Mỗi pattern có:

- ý nghĩa
- khi nào dùng
- khi nào không nên dùng
- tradeoff
- ví dụ hệ thống thực tế

### 3. Architecture Foundations

Bao gồm:

- separation of concerns
- cohesion / coupling
- dependency direction
- layered architecture
- modular monolith
- hexagonal architecture
- microservices
- event-driven architecture
- non-functional requirements
- ADR

### 4. System Design Exercises

Bài tập luyện tư duy thiết kế hệ thống như:

- URL Shortener
- E-commerce Order Flow
- Booking System
- Notification Platform
- Audit Log System

### 5. Hard Parts Book Track

Track học bám theo sách `Software Architecture: The Hard Parts`, tập trung vào:

- coupling và architecture quantum
- modularity, decomposition, service granularity
- data ownership và distributed data access
- orchestration, choreography, saga
- contracts, data mesh, tradeoff analysis

### 6. Fundamentals Book Track

Track học bám theo sách `Fundamentals of Software Architecture`, tập trung vào:

- architectural thinking
- modularity, coupling, connascence
- architecture characteristics và governance
- architecture styles và style selection
- risk analysis, diagramming, leadership

## Cấu trúc repo

```text
software-architect-skill/
├── index.html
├── roadmap.html
├── design-patterns.html
├── architecture-foundations.html
├── system-design-exercises.html
├── hard-parts.html
├── fundamentals.html
├── index.en.html
├── roadmap.en.html
├── design-patterns.en.html
├── architecture-foundations.en.html
├── system-design-exercises.en.html
├── hard-parts.en.html
├── fundamentals.en.html
├── assets/
│   ├── site.css
│   ├── site.js
│   ├── architecture-illustration.svg
│   ├── patterns-illustration.svg
│   └── system-design-illustration.svg
├── references/
│   ├── roadmap.md
│   ├── design-patterns.md
│   ├── architecture-foundations.md
│   ├── system-design-exercises.md
│   ├── hard-parts.md
│   └── fundamentals.md
└── SKILL.md
```

## Điều hướng và song ngữ

- `assets/site.js` là nơi giữ `manifest` cho tất cả page `vi/en`
- menu topbar được render từ manifest này thay vì hardcode ở từng file HTML
- language switch cũng dựa vào manifest nên không còn phụ thuộc hoàn toàn vào việc suy đoán tên file
- homepage vẫn là static HTML, nhưng đã được gom về dùng shared CSS nhiều hơn thay vì giữ một bộ style topbar/theme riêng

## Mở local

Không cần cài gì thêm. Chỉ cần mở:

- `index.html`
- hoặc `index.en.html`

hoặc mở từng file HTML riêng trong trình duyệt.

## Publish bằng GitHub Pages

Repo này dùng static HTML nên publish rất đơn giản.

### Cách bật

1. Vào `Settings`
2. Chọn `Pages`
3. Trong `Build and deployment`
4. Chọn:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/(root)`
5. `Save`

Sau khi deploy xong, site thường sẽ có dạng:

`https://<username>.github.io/<repo-name>/`

Ví dụ với repo này:

`https://ethan0397.github.io/Architect-Software-Lab/`

## Mục tiêu của repo

Repo này không cố trở thành một bộ lý thuyết hàn lâm. Mục tiêu là:

- dễ học
- dễ nhìn
- dễ nối lý thuyết với bài toán thực tế
- dùng được như một bộ note cá nhân hoặc tài liệu chia sẻ

## Gợi ý mở rộng

Bạn có thể mở rộng thêm:

- progress tracker
- phần DDD sâu hơn
- phần database design
- phần cloud architecture
- case studies thực tế hơn

---

Nếu dùng repo này để học hằng ngày, nên đi theo thứ tự:

1. `roadmap.html`
2. `design-patterns.html`
3. `architecture-foundations.html`
4. `system-design-exercises.html`
5. `hard-parts.html`
6. `fundamentals.html`
