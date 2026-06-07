# Fundamentals of Software Architecture

> Track này bám theo cuốn `Fundamentals of Software Architecture` của Mark Richards và Neal Ford để xây nền tảng software architecture theo hướng engineering, từ architectural thinking đến architecture styles, risk, diagramming và soft skills của architect.

## Tóm tắt nhanh

| Phần | Trọng tâm | Câu hỏi chính |
|---|---|---|
| Foundations | Tư duy kiến trúc, modularity, characteristics, components | Một kiến trúc tốt được đánh giá và đo như thế nào? |
| Architecture Styles | Layered, pipeline, microkernel, service-based, event-driven, space-based, SOA, microservices | Kiểu kiến trúc nào hợp với bài toán nào? |
| Techniques and Soft Skills | Decision making, risk, diagramming, team effectiveness, leadership | Architect làm việc và dẫn dắt ra sao trong thực tế? |

---

## 1. Vì sao nên thêm track này vào course

Nếu `Software Architecture: The Hard Parts` là phần luyện các quyết định khó trong distributed architecture, thì `Fundamentals of Software Architecture` là phần xây nền cho:

- architectural thinking
- modularity và coupling
- architecture characteristics
- component thinking
- architecture style selection
- risk analysis và governance
- kỹ năng mềm của architect

Nói ngắn gọn:

- `Fundamentals` giúp bạn hiểu "architecture là gì và đánh giá nó ra sao"
- `Hard Parts` giúp bạn xử lý các bài toán khó khi hệ thống đã phân tán

---

## 2. Bản đồ chương học

### Chương 1-8: Foundations

Nhóm chương này xây phần nền:

- software architecture là gì
- architect kỳ vọng làm gì
- architectural thinking
- modularity, cohesion, coupling, connascence
- architecture characteristics
- fitness function và governance
- architectural quanta
- component-based thinking

Đây là phần rất quan trọng nếu bạn muốn nói chuyện architecture bằng ngôn ngữ có cấu trúc thay vì trực giác mơ hồ.

### Chương 9-18: Architecture Styles

Nhóm chương này giúp bạn hiểu các style phổ biến:

- layered
- pipeline
- microkernel
- service-based
- event-driven
- space-based
- orchestration-driven SOA
- microservices
- cách chọn style phù hợp

Điểm mạnh của sách là không chỉ mô tả topology mà còn so sánh style bằng architecture characteristics ratings.

### Chương 19-24: Techniques and Soft Skills

Đây là phần thường bị bỏ quên nhưng rất quan trọng:

- architecture decisions
- architecture risk analysis
- diagramming và presenting architecture
- team effectiveness
- negotiation và leadership
- career path cho architect

---

## 3. 7 module học đề xuất

### Module 1: Architectural Thinking

Mục tiêu:

- hiểu software architecture ở góc nhìn engineering
- biết architect phải liên tục ra quyết định
- nhìn architecture như một bài toán trade-off

Output:

- note ngắn về trách nhiệm thật sự của architect
- checklist để phân tích một bài toán trước khi design

### Module 2: Modularity và Architecture Characteristics

Mục tiêu:

- nắm cohesion, coupling, connascence
- hiểu architecture characteristics là gì
- biết trích characteristics từ business/domain requirement

Output:

- danh sách 5-7 characteristics quan trọng cho một hệ thống mẫu
- giải thích vì sao chúng quan trọng hơn functional requirement trong một số quyết định

### Module 3: Measuring, Governance, và Quanta

Mục tiêu:

- học fitness function
- hiểu governance mà không biến thành bureaucracy
- nắm architectural quanta và granularity

Output:

- 2 fitness functions đơn giản
- sơ đồ quanta cho một hệ thống đang học

### Module 4: Component Thinking

Mục tiêu:

- phân tách hệ thống thành component hợp lý
- gắn requirement vào component
- đánh giá granularity ở mức component

Output:

- component map
- lý do vì sao component này tách riêng hoặc nên gộp lại

### Module 5: Architecture Styles Survey

Mục tiêu:

- hiểu topology và use case của từng architecture style
- so sánh strengths/weaknesses của từng style
- không chọn style theo trend

Output:

- bảng so sánh 3 style cho cùng một bài toán
- recommendation kèm reasoning

### Module 6: Decisions, Risk, và Diagramming

Mục tiêu:

- học cách viết và trình bày quyết định kiến trúc
- biết phân tích risk
- biết dùng diagram như công cụ giao tiếp chứ không chỉ để đẹp

Output:

- 1 ADR ngắn
- 1 diagram cho context/container/component
- 1 risk list có mitigation

### Module 7: Team và Leadership

Mục tiêu:

- hiểu soft skills của architect
- cải thiện communication, facilitation, negotiation
- nhìn architecture như vai trò kỹ thuật gắn với team dynamics

Output:

- self-review về kỹ năng cần tăng
- checklist buổi architecture review hiệu quả

---

## 4. Lịch học 6 tuần gợi ý

| Tuần | Chủ đề | Việc thực hành |
|---|---|---|
| 1 | Chương 1-3 | Tóm tắt architect role, modularity, coupling |
| 2 | Chương 4-6 | Xác định architecture characteristics và fitness functions |
| 3 | Chương 7-8 | Vẽ architectural quanta và component map |
| 4 | Chương 9-14 | So sánh layered, microkernel, service-based, event-driven |
| 5 | Chương 15-18 | So sánh microservices, SOA, space-based và chọn style |
| 6 | Chương 19-24 | Viết ADR, risk review, diagram và reflection về leadership |

---

## 5. Cách ghép với phần còn lại của repo

- học `Fundamentals` trước `Hard Parts` để có nền tảng khái niệm và ngôn ngữ kiến trúc
- nối `Fundamentals` với `Architecture Foundations` để củng cố NFR, boundary, dependency direction
- dùng `System Design Exercises` để áp dụng style selection, risk analysis, diagramming
- dùng `Hard Parts` sau đó để đào sâu distributed trade-off, data ownership, workflow, saga

---

## 6. Dấu hiệu bạn đã học tốt track này

Bạn đã ngấm track này khi có thể:

- mô tả architecture bằng characteristics thay vì chỉ mô tả component
- phân biệt style, pattern, component, và deployment concern
- giải thích vì sao một style hợp với bài toán hơn style khác
- viết ADR, vẽ diagram, và nói về risk rõ ràng
- hiểu architect không chỉ là người chọn công nghệ mà còn là người giúp team ra quyết định tốt hơn
