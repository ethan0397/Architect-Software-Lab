# Software Architecture: The Hard Parts

> Study track này bám theo cuốn `Software Architecture: The Hard Parts` để luyện tư duy trade-off cho distributed architecture, đặc biệt là các quyết định quanh coupling, data ownership, workflow và service granularity.

## Tóm tắt nhanh

| Phần | Trọng tâm | Câu hỏi chính |
|---|---|---|
| Part I | Pulling Things Apart | Nên tách hệ thống ở đâu, tách theo gì, và tách tới mức nào? |
| Part II | Putting Things Back Together | Khi đã tách rồi, làm sao ghép workflow, data và contract mà không tạo hỗn loạn? |
| Part III | Trade-Off Practice | Làm sao tự phân tích trade-off thay vì chạy theo best practice? |

---

## 1. Cuốn sách này giúp gì cho course

Phần lớn tài liệu architecture dễ mạnh ở khái niệm nhưng thiếu chỗ luyện "quyết định khó". Cuốn này lấp đúng khoảng trống đó:

- không hỏi "kiến trúc nào tốt nhất"
- hỏi "trong bối cảnh này, đâu là lựa chọn ít đau nhất"
- biến coupling, modularity, workflow, data ownership thành quyết định có thể tranh luận rõ ràng
- giúp bạn nói chuyện architecture bằng trade-off thay vì bằng trend

Vì vậy, study track này nên học sau khi đã có nền tảng:

- design patterns
- architecture foundations
- distributed systems basics

---

## 2. Bản đồ chương học

### Chương 1: When There Are No Best Practices

Học cách nhìn architecture như một chuỗi quyết định phụ thuộc context:

- data làm thay đổi kiến trúc thế nào
- ADR giúp ghi lại quyết định ra sao
- fitness function dùng để kiểm tra kiến trúc còn đúng không

### Chương 2-7: Pulling Things Apart

Đây là cụm chương để hiểu việc "tách" hệ thống:

- coupling tĩnh và coupling động
- modularity driver: maintainability, deployability, scalability, fault tolerance
- decomposition theo component
- pattern để xác định component/domain/service
- decomposing operational data
- service granularity

Điểm cốt lõi: không phải cứ nhỏ hơn là tốt hơn. Tách quá sớm cũng là một loại coupling mới.

### Chương 8-14: Putting Things Back Together

Khi hệ thống đã chia nhỏ, bài toán khó chuyển sang:

- reuse qua library, shared service, sidecar hay platform
- data ownership
- distributed transaction và eventual consistency
- distributed data access
- orchestration hay choreography
- saga pattern
- contract design
- analytical data và data mesh

Đây là phần rất thực chiến vì nó giải quyết đau đớn hậu microservices, không chỉ phần "vẽ đẹp lúc ban đầu".

### Chương 15: Build Your Own Trade-Off Analysis

Chương cuối là phần quan trọng nhất để biến kiến thức thành kỹ năng:

- tìm các chiều trade-off đang mắc vào nhau
- phân tích coupling point
- so sánh định tính và định lượng
- tránh out-of-context pattern matching
- tránh architecture evangelism

---

## 3. 8 module học đề xuất

### Module 1: Decision Mindset

Mục tiêu:

- bỏ tư duy tìm silver bullet
- tập mô tả context trước khi đưa giải pháp
- bắt đầu ghi ADR ngắn cho từng quyết định lớn

Output:

- 1 ADR cho quyết định tách module hoặc service
- 1 checklist context gồm business goal, NFR, data sensitivity, team maturity

### Module 2: Coupling và Architecture Quantum

Mục tiêu:

- phân biệt static coupling và dynamic coupling
- nhận ra "đơn vị thay đổi cùng nhau" trong hệ thống
- hiểu architecture quantum là phần cần deploy cùng nhau

Output:

- đánh dấu 3 điểm coupling lớn trong một hệ thống bạn đang biết
- giải thích vì sao chúng chưa thể deploy độc lập

### Module 3: Modularity và Decomposition

Mục tiêu:

- học các driver làm thay đổi cấu trúc module
- phân rã codebase theo component và domain
- dùng afferent/efferent coupling như tín hiệu phụ trợ

Output:

- sơ đồ module trước và sau khi refactor
- giải thích vì sao boundary mới tốt hơn boundary cũ

### Module 4: Data Decomposition và Service Granularity

Mục tiêu:

- hiểu data là thứ cản tách service mạnh nhất
- học cách tách data domain dần dần
- cân bằng granularity bằng transaction, workflow, security, extensibility

Output:

- bảng mapping `table -> data domain -> service owner`
- một quyết định granularity có ghi rõ "nhỏ hơn nữa thì đau ở đâu"

### Module 5: Reuse, Data Ownership, Distributed Access

Mục tiêu:

- chọn giữa shared library, shared service, sidecar, platform
- xác định ownership cho dữ liệu dùng chung
- chọn pattern truy cập data giữa service

Output:

- decision note cho một nhu cầu reuse phổ biến
- sơ đồ data ownership cho 2-3 bounded context

### Module 6: Workflow, Orchestration, Choreography, Saga

Mục tiêu:

- chọn communication style theo coupling và workflow state
- nhìn saga như công cụ business transaction chứ không phải magic
- quản lý eventual consistency có chủ đích

Output:

- sequence diagram cho một workflow phân tán
- danh sách compensating action cho các bước có thể fail

### Module 7: Contracts và Analytical Data

Mục tiêu:

- hiểu strict contract và loose contract
- nhận ra stamp coupling
- tách luồng operational data và analytical data

Output:

- review một API contract đang quá rộng
- decision memo cho việc dùng replication, cache hay data product

### Module 8: Trade-Off Analysis Lab

Mục tiêu:

- tự phân tích 1 bài toán kiến trúc từ đầu đến cuối
- trình bày được alternative, risk, consequence
- kết luận rõ bằng ngôn ngữ trade-off

Output:

- 1 mini architecture review deck hoặc doc
- 1 bảng so sánh ít nhất 3 phương án

---

## 4. Lịch học 6 tuần gợi ý

| Tuần | Chủ đề | Việc thực hành |
|---|---|---|
| 1 | Chương 1-2 | Viết ADR đầu tiên và đánh dấu coupling |
| 2 | Chương 3-5 | Refactor module boundary, vẽ component map |
| 3 | Chương 6-7 | Tách data domain và đánh giá granularity |
| 4 | Chương 8-10 | Chọn reuse pattern và data access pattern |
| 5 | Chương 11-13 | Thiết kế workflow phân tán và saga |
| 6 | Chương 14-15 | Làm trade-off analysis hoàn chỉnh |

> Nhịp học hiệu quả nhất là: `đọc chương -> tóm tắt bằng sơ đồ -> áp vào một case thật -> viết ADR`.

---

## 5. Bài tập áp dụng

### Case A: Order Processing

Tự trả lời:

- order và payment có nên tách service chưa
- inventory ownership nằm ở đâu
- workflow dùng orchestration hay choreography
- bước nào cần compensating action

### Case B: Internal Developer Platform

Tự trả lời:

- logic dùng chung nên là shared library, sidecar hay platform API
- phần nào nên có contract strict
- phần nào nên loose để tăng tốc thay đổi

### Case C: Booking System

Tự trả lời:

- reservation state thuộc service nào
- consistency mạnh cần ở bước nào
- analytical data có nên lấy trực tiếp từ operational DB không

---

## 6. Dấu hiệu bạn đã "ngấm" cuốn sách

Bạn đã học tốt track này khi có thể:

- nói "it depends" nhưng không nói chung chung
- chỉ ra 2-3 chiều trade-off đang va nhau
- biết một boundary chưa ổn nhưng vẫn giải thích được vì sao tạm chấp nhận
- phân biệt tách để giảm coupling với tách chỉ để nhìn hiện đại hơn
- viết được ADR ngắn mà team đọc xong hiểu ngay decision

---

## 7. Cách ghép với phần còn lại của repo

- đọc `roadmap` trước để thấy vị trí của track này trong lộ trình tổng thể
- dùng `architecture foundations` làm nền cho coupling, modularity, NFR
- dùng `system design exercises` làm nơi luyện trade-off analysis
- quay lại `design patterns` khi cần giải ở mức component hoặc workflow
