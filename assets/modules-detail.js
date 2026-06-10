(function () {
  // ─── Module content data ──────────────────────────────────────────────
  var MODULE_DATA = {
    // ════════════════════════════════════════════
    // FUNDAMENTALS OF SOFTWARE ARCHITECTURE
    // ════════════════════════════════════════════
    "fund-1": {
      track: "Fundamentals of Software Architecture",
      tag: "Module 1",
      tagColor: "blue",
      title: "Architectural Thinking",
      overview:
        "Kiến trúc phần mềm không phải là một bản vẽ cố định — đó là một chuỗi quyết định liên tục. Module này giúp bạn hiểu software architecture là gì, architect thực sự làm gì, và vì sao tư duy trade-off là kỹ năng cốt lõi, không phải kiến thức công nghệ.",
      concepts: [
        {
          title: "Architecture vs Design",
          body: "Architecture là quyết định cấu trúc hệ thống ở mức cao, ảnh hưởng đến sự phát triển lâu dài. Design là các quyết định trong ranh giới đã được architecture xác định. Ranh giới này không cứng nhắc — nhưng nhận ra sự khác biệt giúp bạn chọn đúng mức độ để ra quyết định.",
        },
        {
          title: "Technical Breadth vs Depth",
          body: "Architect cần biết rộng hơn là biết sâu ở một điểm. Mark Richards gọi đây là 'frozen knowledge pyramid' — bạn phải chủ động duy trì technical breadth thay vì chỉ theo đuổi depth. Biết trade-off của nhiều công nghệ quan trọng hơn là master một công nghệ.",
        },
        {
          title: "First Law of Software Architecture",
          body: "Everything in software architecture is a trade-off. Nếu bạn nghĩ mình tìm được giải pháp không có trade-off, có khả năng bạn chưa tìm đủ kỹ. Câu hỏi đúng không phải 'cái nào tốt hơn?' mà là 'cái nào phù hợp hơn với context này?'",
        },
        {
          title: "Architecture Decisions",
          body: "Architect ra quyết định bằng cách cân nhắc trade-off giữa các đặc tính phi chức năng (NFR), không chỉ dựa vào chức năng. Một quyết định kiến trúc tốt là quyết định có thể giải thích được bằng ngôn ngữ kinh doanh, không chỉ ngôn ngữ kỹ thuật.",
        },
      ],
      keyTopics: [
        "Định nghĩa software architecture và vị trí của nó trong vòng đời phần mềm",
        "4 chiều kiến thức: known knowns, known unknowns, unknown knowns, unknown unknowns",
        "Technical breadth pyramid — tại sao architect cần breadth hơn depth",
        "Sự khác biệt giữa architect và senior developer",
        "Architecture như một bài toán trade-off, không phải công thức",
        "Technical debt và cách architect quản lý nợ kỹ thuật có ý thức",
      ],
      bookChapters: "Chương 1-2 — Fundamentals of Software Architecture",
      outputs: [
        "Viết 1 trang note về trách nhiệm thật sự của architect so với senior developer",
        "Tạo checklist 5-7 câu hỏi để phân tích một bài toán trước khi bắt đầu design",
        "Tự đánh giá technical breadth của bản thân theo 3 vùng: am hiểu sâu, am hiểu vừa, từng nghe qua",
      ],
      signals: [
        "Giải thích được trade-off của ít nhất 2 lựa chọn kiến trúc cho cùng một bài toán",
        "Phân biệt được khi nào quyết định thuộc về architecture và khi nào thuộc về design",
        "Mô tả vai trò architect mà không cần dùng từ 'chọn công nghệ'",
      ],
    },

    "fund-2": {
      track: "Fundamentals of Software Architecture",
      tag: "Module 2",
      tagColor: "green",
      title: "Modularity và Architecture Characteristics",
      overview:
        "Trước khi chọn architecture style, bạn cần ngôn ngữ để mô tả và đo lường kiến trúc. Module này xây hai nền tảng đó: hiểu modularity qua cohesion, coupling, connascence — và trích architecture characteristics từ business requirements.",
      concepts: [
        {
          title: "Cohesion & Coupling",
          body: "Cohesion đo mức độ các phần trong module liên quan đến nhau. Coupling đo mức độ một module phụ thuộc vào module khác. Mục tiêu: high cohesion, low coupling. Nhưng trong thực tế, coupling là không thể tránh khỏi — bạn quản lý nó, không loại bỏ nó.",
        },
        {
          title: "Connascence",
          body: "Connascence là framework nâng cao hơn để phân tích coupling. Hai thành phần 'connascent' khi thay đổi một thành phần buộc phải thay đổi thành phần còn lại. Có nhiều loại connascence (name, type, meaning, position, algorithm...) với mức độ ảnh hưởng khác nhau.",
        },
        {
          title: "Architecture Characteristics",
          body: "Architecture characteristics (hay NFRs) là những đặc tính phi chức năng mà kiến trúc phải đáp ứng: scalability, availability, security, testability, deployability... Chúng không phải là feature — nhưng chúng quyết định architecture style nào được chọn.",
        },
        {
          title: "Trích Characteristics từ Requirements",
          body: "Explicit characteristics được ghi rõ trong yêu cầu ('hệ thống phải handle 10,000 req/s'). Implicit characteristics là những gì domain luôn đòi hỏi dù không được nêu rõ (ví dụ: banking app luôn cần security cao). Architect phải nhận ra cả hai.",
        },
      ],
      keyTopics: [
        "Cohesion types: functional, sequential, communicational, procedural, temporal, logical, coincidental",
        "Coupling types: afferent (incoming) và efferent (outgoing) coupling",
        "Connascence: static vs dynamic, strength và locality",
        "Architecture characteristics: explicit vs implicit",
        "Partitioning characteristics: structural, process, operational",
        "Cách xác định top-3 architecture characteristics cho một hệ thống cụ thể",
      ],
      bookChapters: "Chương 3-5 — Fundamentals of Software Architecture",
      outputs: [
        "Phân tích modularity của một codebase quen thuộc: chỉ ra 3 điểm coupling cao nhất",
        "Cho một domain (ví dụ: e-commerce checkout), liệt kê 5-7 architecture characteristics quan trọng nhất với lý do",
        "Phân biệt explicit và implicit characteristics cho một hệ thống bạn đang làm",
      ],
      signals: [
        "Giải thích được vì sao connascence of meaning nguy hiểm hơn connascence of name",
        "Trích được architecture characteristics từ một business requirement bất kỳ",
        "Biết tại sao một số characteristics mâu thuẫn nhau (ví dụ: security vs performance)",
      ],
    },

    "fund-3": {
      track: "Fundamentals of Software Architecture",
      tag: "Module 3",
      tagColor: "gold",
      title: "Measuring, Governance, và Quanta",
      overview:
        "Làm sao biết kiến trúc có đang đi đúng hướng không? Module này dạy fitness functions để đo kiến trúc tự động, governance đủ nhẹ để team không ghét, và architectural quantum để hiểu granularity thật sự của hệ thống.",
      concepts: [
        {
          title: "Fitness Functions",
          body: "Fitness function là cơ chế đo lường tự động để xác nhận kiến trúc đang giữ đúng các đặc tính mong muốn. Không phải tất cả đều là unit test — fitness function có thể là monitoring alert, performance benchmark, security scan, hay dependency check được tự động hóa.",
        },
        {
          title: "Architectural Governance",
          body: "Governance không có nghĩa là nhiều họp hay nhiều approval. Governance tốt là tập hợp các kiểm tra tự động và convention đủ nhẹ để team có thể di chuyển nhanh trong khi vẫn giữ nguyên tắc kiến trúc. Fitness function là công cụ governance hiệu quả nhất.",
        },
        {
          title: "Architectural Quantum",
          body: "Architectural quantum là một đơn vị deploy độc lập, có high functional cohesion. Hiểu quantum của hệ thống giúp bạn biết phần nào thực sự có thể scale hay deploy riêng biệt, và phần nào chỉ trông như vậy trên giấy nhưng thực ra vẫn dính nhau.",
        },
        {
          title: "Measuring Architecture",
          body: "Các chỉ số đo modularity: afferent coupling, efferent coupling, abstractness, instability, distance from main sequence. Các chỉ số này cho thấy component nào đang 'quá cứng' (không thể thay đổi) hoặc 'quá mềm' (unstable).",
        },
      ],
      keyTopics: [
        "Fitness functions: atomic vs holistic, triggered vs continuous",
        "Hướng dẫn thiết kế fitness function cho scalability, security và maintainability",
        "Architectural governance: lightweight approaches vs heavyweight process",
        "Architectural quantum: definition, high functional cohesion, independently deployable",
        "Instability index và abstractness index trong module analysis",
        "Distance from main sequence — nhận ra component 'zone of pain' và 'zone of uselessness'",
      ],
      bookChapters: "Chương 6-8 — Fundamentals of Software Architecture",
      outputs: [
        "Viết 2 fitness functions đơn giản (1 atomic, 1 holistic) cho một hệ thống bạn đang biết",
        "Vẽ architectural quantum diagram cho một project hiện tại, chỉ ra phần nào thực sự independently deployable",
        "Xác định 1 component đang nằm trong 'zone of pain' và đề xuất hướng cải thiện",
      ],
      signals: [
        "Thiết kế được fitness function mà không biến nó thành unit test thông thường",
        "Giải thích architectural quantum khác với microservice như thế nào",
        "Biết component có abstractness thấp và instability thấp đang báo hiệu vấn đề gì",
      ],
    },

    "fund-4": {
      track: "Fundamentals of Software Architecture",
      tag: "Module 4",
      tagColor: "pink",
      title: "Component Thinking",
      overview:
        "Component là đơn vị cơ bản mà architect làm việc với. Module này dạy cách xác định component đúng, gắn requirement vào component, và đánh giá granularity — không quá nhỏ tạo overhead, không quá lớn tạo coupling.",
      concepts: [
        {
          title: "Component Identification",
          body: "Có nhiều cách xác định component: Actor/Action approach (phân tích theo người dùng và hành động của họ), Event Storming (phân tích theo domain event), và Workflow approach (phân tích theo luồng nghiệp vụ). Không có cách nào hoàn hảo — chọn theo complexity của domain.",
        },
        {
          title: "Entity Trap",
          body: "Entity trap là lỗi phổ biến khi architect dùng data entities (User, Order, Product) làm component boundary. Điều này tạo ra các component rất lớn với coupling cao vì mọi nghiệp vụ đều chạm vào các entity đó. Component nên phản ánh behavior, không phải data schema.",
        },
        {
          title: "Component Granularity",
          body: "Component quá lớn: khó maintain, khó test, khó deploy riêng. Component quá nhỏ: overhead giao tiếp, khó hiểu toàn cảnh, phức tạp orchestration. Granularity đúng là granularity phản ánh đúng domain boundary và team capability.",
        },
        {
          title: "Requirements Mapping",
          body: "Mỗi requirement (user story, use case) nên ánh xạ được về ít nhất một component. Nếu một requirement chạm vào quá nhiều component, đó là tín hiệu component boundaries chưa đúng hoặc requirement này cần được tách nhỏ hơn.",
        },
      ],
      keyTopics: [
        "Actor/Action approach: xác định actor, action, và component từ use cases",
        "Event Storming approach: domain events → commands → aggregates → bounded context",
        "Component granularity disintegrators và integrators",
        "Entity trap và cách tránh",
        "Component coupling analysis: afferent vs efferent",
        "Mapping từ requirements sang component map",
      ],
      bookChapters: "Chương 8 — Fundamentals of Software Architecture",
      outputs: [
        "Tạo component map cho một hệ thống quen thuộc bằng Actor/Action approach",
        "So sánh kết quả nếu dùng Entity approach vs Actor/Action approach cho cùng hệ thống đó",
        "Chọn 2-3 component boundary, giải thích tại sao đặt ranh giới ở đây thay vì chỗ khác",
      ],
      signals: [
        "Nhận ra entity trap trong một component design và giải thích vì sao nó là vấn đề",
        "Lập luận được granularity của component dựa trên deployment, testability và team ownership",
        "Map được user stories vào component diagram",
      ],
    },

    "fund-5": {
      track: "Fundamentals of Software Architecture",
      tag: "Module 5",
      tagColor: "cyan",
      title: "Architecture Styles Survey",
      overview:
        "Biết nhiều architecture styles là tốt, nhưng biết khi nào dùng style nào mới là kỹ năng thật sự. Module này đi qua 8 styles phổ biến, so sánh chúng bằng architecture characteristics ratings, và luyện tư duy chọn style dựa trên context.",
      concepts: [
        {
          title: "Layered Architecture",
          body: "Style đơn giản nhất, phổ biến nhất. Tổ chức hệ thống theo technical layer: presentation → business → persistence. Dễ hiểu, dễ onboard. Nhược điểm: scalability kém, deployment monolithic, thay đổi nhỏ thường phải touch nhiều layer.",
        },
        {
          title: "Event-Driven Architecture",
          body: "Components giao tiếp qua events, không gọi trực tiếp nhau. Ưu điểm: loose coupling cao, scalability tốt, extensibility dễ. Nhược điểm: eventual consistency, khó debug và trace, error handling phức tạp hơn nhiều so với synchronous call.",
        },
        {
          title: "Microservices Architecture",
          body: "Mỗi service là một deployable unit nhỏ, có database riêng, team ownership rõ ràng. Ưu điểm: scalability, deployability, team autonomy. Nhược điểm: distributed system complexity, data consistency, operational overhead rất cao.",
        },
        {
          title: "Architecture Characteristics Ratings",
          body: "Sách dùng rating table (1-5 sao) để so sánh styles theo các characteristics: agility, deployability, testability, performance, scalability, simplicity, overall cost. Đây là công cụ so sánh định lượng — nhưng hãy nhớ context của bạn có thể làm thay đổi trọng số.",
        },
      ],
      keyTopics: [
        "Layered: technical partitioning, deployment topology, strengths/weaknesses",
        "Pipeline: filter/pipe pattern, ETL, data transformation use cases",
        "Microkernel: plugin architecture, core system vs plugin modules",
        "Service-based: domain partitioning, coarse-grained services, shared database",
        "Event-driven: broker topology vs mediator topology",
        "Space-based: in-memory data grid, cloud-native scaling",
        "Microservices: bounded context, database per service, service mesh",
        "Architecture characteristics ratings comparison table",
      ],
      bookChapters: "Chương 9-17 — Fundamentals of Software Architecture",
      outputs: [
        "Điền bảng so sánh 3-4 architecture styles cho cùng một bài toán cụ thể (ví dụ: e-commerce platform)",
        "Chọn 1 style cho bài toán đó và viết 1 đoạn justification bằng ngôn ngữ characteristics",
        "Nhận ra 1 hệ thống bạn biết đang dùng style gì và chỉ ra 1 trade-off rõ ràng của lựa chọn đó",
      ],
      signals: [
        "Chọn style dựa trên characteristics requirements thay vì chọn theo trend hoặc team familiarity",
        "Giải thích được khi nào service-based tốt hơn microservices dù nhìn bề ngoài giống nhau",
        "Biết microkernel phù hợp nhất với loại hệ thống nào",
      ],
    },

    "fund-6": {
      track: "Fundamentals of Software Architecture",
      tag: "Module 6",
      tagColor: "blue",
      title: "Decisions, Risk, và Diagramming",
      overview:
        "Architect không chỉ thiết kế — họ còn phải giao tiếp, ghi lại và bảo vệ quyết định. Module này dạy cách viết ADR chuẩn, đánh giá risk một cách có cấu trúc, và dùng diagram như công cụ giao tiếp thật sự chứ không phải để vẽ đẹp.",
      concepts: [
        {
          title: "Architecture Decision Records (ADR)",
          body: "ADR là tài liệu ngắn ghi lại một quyết định kiến trúc quan trọng: context, decision, status, consequences. Format điển hình: Title, Status (proposed/accepted/deprecated/superseded), Context, Decision, Consequences. ADR nên ngắn — 1-2 trang là đủ.",
        },
        {
          title: "Architecture Risk Matrix",
          body: "Risk được đánh giá qua hai chiều: likelihood (khả năng xảy ra) và impact (mức độ ảnh hưởng). Kết hợp hai chiều này cho ra risk matrix 3×3. Mục tiêu không phải loại bỏ tất cả risk mà là prioritize đúng và có mitigation strategy cho high-priority risks.",
        },
        {
          title: "C4 Model",
          body: "C4 Model (Simon Brown) tổ chức diagram theo 4 cấp: Context (hệ thống trong môi trường), Container (deployable units), Component (bên trong container), Code (class diagram). Mỗi cấp phục vụ audience khác nhau. Context diagram cho business stakeholder, Component diagram cho developer.",
        },
        {
          title: "Architecture Fitness Functions",
          body: "Quyết định kiến trúc cần được kiểm tra liên tục, không chỉ khi mới viết ra. Fitness function là cách tự động hóa việc kiểm tra này. Ví dụ: rule rằng service A không được import package của service B có thể trở thành một dependency check chạy trong CI/CD.",
        },
      ],
      keyTopics: [
        "ADR template và cách viết context, decision, consequences hiệu quả",
        "ADR status lifecycle: proposed → accepted → deprecated → superseded",
        "Risk likelihood và impact matrix: cách đánh giá và prioritize",
        "Risk storming: workshop format để identify architectural risks trong team",
        "C4 Model: 4 cấp diagram, khi nào dùng cấp nào",
        "Presenting architecture: tailoring diagram cho audience khác nhau",
      ],
      bookChapters: "Chương 19-21 — Fundamentals of Software Architecture",
      outputs: [
        "Viết 1 ADR ngắn cho một quyết định kỹ thuật thật sự bạn đã từng ra",
        "Vẽ 1 C4 context diagram hoặc container diagram cho một hệ thống quen thuộc",
        "Tạo risk list cho 1 hệ thống: ít nhất 5 risks với likelihood, impact và mitigation",
      ],
      signals: [
        "ADR viết ra đủ ngắn để đọc trong 2 phút nhưng đủ rõ để người khác hiểu decision",
        "Phân biệt risk cần mitigation ngay với risk có thể accept",
        "Chọn đúng diagram level cho đúng audience",
      ],
    },

    "fund-7": {
      track: "Fundamentals of Software Architecture",
      tag: "Module 7",
      tagColor: "green",
      title: "Team và Leadership",
      overview:
        "Một architect giỏi về kỹ thuật mà không thể làm việc hiệu quả với team, stakeholder và business thì chỉ là một developer giỏi. Module này tập vào các kỹ năng mềm quan trọng nhất của architect: communication, facilitation, negotiation và leadership.",
      concepts: [
        {
          title: "Elastic Leadership",
          body: "Architect cần điều chỉnh leadership style theo tình huống: directive khi team mới hoặc khủng hoảng, facilitative khi team đủ năng lực, collaborative khi cần đồng thuận cao. Không có style nào đúng mọi lúc — quan trọng là biết đọc context và chuyển đổi.",
        },
        {
          title: "Making Teams Effective",
          body: "Architect ảnh hưởng đến hiệu quả team qua process, tooling và architecture decisions. Architecture quyết định team topology (Conway's Law). Nếu kiến trúc tạo ra nhiều dependency giữa team, tốc độ cả tổ chức sẽ bị kéo chậm dù mỗi team riêng lẻ làm việc tốt.",
        },
        {
          title: "Negotiation with Business",
          body: "Architect phải thuyết phục business stakeholder về technical decisions. Kỹ thuật: frame technical decisions bằng business outcomes, dùng cost/benefit analysis, tránh jargon kỹ thuật. Quan trọng nhất: biết nhượng bộ ở đâu và giữ vững ở đâu.",
        },
        {
          title: "Career Path",
          body: "Có hai con đường architect: technical architect (focus vào code quality và technical decisions) và enterprise architect (focus vào business alignment và cross-team coordination). Hiểu bạn muốn đi con đường nào sẽ giúp chọn đúng kỹ năng cần phát triển.",
        },
      ],
      keyTopics: [
        "Conway's Law và Team Topologies: inverse Conway maneuver",
        "4 loại knowledge workers: follower, colleague, mentor, master",
        "Elastic leadership: situational leadership cho architect",
        "Making architecture meetings effective: format, facilitation, outcomes",
        "Negotiation framework: interests vs positions",
        "Technical breadth maintenance: structured learning và community engagement",
        "Career paths: technical architect vs enterprise architect",
      ],
      bookChapters: "Chương 22-24 — Fundamentals of Software Architecture",
      outputs: [
        "Self-review: 3 kỹ năng mềm bạn mạnh nhất và 3 kỹ năng cần cải thiện nhất như một architect",
        "Tạo checklist cho một buổi architecture review hiệu quả (agenda, roles, expected outputs)",
        "Viết 1 đoạn giải thích 1 technical decision cho non-technical stakeholder",
      ],
      signals: [
        "Điều chỉnh communication style khi nói chuyện với developer vs business stakeholder",
        "Nhận ra khi nào architecture decision bị ảnh hưởng bởi team structure (Conway's Law)",
        "Tổ chức được buổi architecture review mà team thấy có giá trị, không chỉ là meeting thêm",
      ],
    },

    // ════════════════════════════════════════════
    // SOFTWARE ARCHITECTURE: THE HARD PARTS
    // ════════════════════════════════════════════
    "hp-1": {
      track: "Software Architecture: The Hard Parts",
      tag: "Module 1",
      tagColor: "blue",
      title: "Decision Mindset",
      overview:
        "Cuốn Hard Parts bắt đầu bằng một thách thức: bỏ tư duy tìm silver bullet. Architecture tốt không phải là chọn đúng pattern — mà là ra quyết định đúng trong context cụ thể. Module này xây nền tư duy đó qua ADR, fitness function và context analysis.",
      concepts: [
        {
          title: "No Best Practices",
          body: "Trong distributed architecture, 'best practice' là khái niệm nguy hiểm. Cùng một pattern — saga, event sourcing, CQRS — có thể là đúng trong context này và sai trong context khác. Câu hỏi đúng là: 'given our constraints, what are the trade-offs of each option?'",
        },
        {
          title: "Architecture Decision Records",
          body: "ADR là công cụ ghi lại context và reasoning đằng sau một quyết định kiến trúc. Điểm quan trọng: ghi lại cả các alternatives đã cân nhắc và lý do loại bỏ chúng. Tương lai bạn hoặc người kế nhiệm cần biết tại sao quyết định này được chọn, không chỉ quyết định là gì.",
        },
        {
          title: "Context Analysis",
          body: "Trước khi đề xuất giải pháp, phân tích context: business goals, NFR, team maturity, data sensitivity, existing system constraints, budget, timeline. Context thay đổi thì quyết định đúng cũng thay đổi. Một context checklist tốt giúp bạn tránh giải pháp copy-paste từ blog.",
        },
        {
          title: "Fitness Functions trong Hard Parts",
          body: "Hard Parts dùng fitness function như cơ chế kiểm tra liên tục rằng kiến trúc vẫn đang giữ đúng các trade-off đã chọn. Ví dụ: nếu bạn quyết định chấp nhận eventual consistency, có fitness function nào đo được thực tế hệ thống đang converge đủ nhanh không?",
        },
      ],
      keyTopics: [
        "Tại sao 'best practices' là anti-pattern trong distributed architecture",
        "ADR format cho distributed systems decisions: phần alternatives quan trọng hơn phần decision",
        "Context analysis checklist: business, technical, organizational, operational",
        "Fitness function cho distributed systems: monitoring, alerting, chaos testing",
        "Shard Nothing vs Share Something: context nào hợp với từng approach",
        "Architecture kata: practice lấy decision từ requirement mơ hồ",
      ],
      bookChapters: "Chương 1 — Software Architecture: The Hard Parts",
      outputs: [
        "Viết 1 ADR cho một quyết định kỹ thuật thật bao gồm alternatives và reasons for rejection",
        "Tạo context checklist 10 câu hỏi để dùng trước khi đề xuất bất kỳ architecture change nào",
        "Chọn 1 'best practice' bạn hay dùng và phân tích: context nào làm nó không còn đúng?",
      ],
      signals: [
        "Viết ADR mà phần alternatives có nội dung thực chất, không phải placeholder",
        "Dùng context analysis để bác bỏ hoặc điều chỉnh một 'best practice' phổ biến",
        "Mô tả 'it depends' kèm theo ít nhất 2 chiều context cụ thể",
      ],
    },

    "hp-2": {
      track: "Software Architecture: The Hard Parts",
      tag: "Module 2",
      tagColor: "green",
      title: "Coupling và Architecture Quantum",
      overview:
        "Coupling là từ mọi người biết nhưng ít người hiểu đầy đủ trong distributed context. Module này phân biệt static coupling (deployment), dynamic coupling (runtime), và architectural quantum — đơn vị thực sự cần deploy cùng nhau, không phải đơn vị trông độc lập trên giấy.",
      concepts: [
        {
          title: "Static Coupling",
          body: "Static coupling là coupling ở compile-time và deployment: library dependencies, shared schemas, shared databases. Hai services chia sẻ database là statically coupled — dù runtime chúng không cần nhau, bạn không thể thay đổi schema mà không ảnh hưởng đến cả hai.",
        },
        {
          title: "Dynamic Coupling",
          body: "Dynamic coupling là coupling ở runtime: synchronous API calls, shared state, transactional boundaries. Nếu service A gọi service B synchronously, A bị coupled với availability, latency và behavior của B. Đây là coupling nguy hiểm nhất trong distributed systems.",
        },
        {
          title: "Architecture Quantum",
          body: "Architecture quantum là đơn vị có high functional cohesion và là independently deployable artifact. Quantum ≠ service ≠ microservice. Một quantum có thể là nhiều services nếu chúng phải deploy cùng nhau để đảm bảo consistency. Nhận ra quantum thật sự của hệ thống là bước đầu tiên để hiểu scalability thật sự.",
        },
        {
          title: "Quantum Entanglement",
          body: "Hai quantum 'entangled' khi communication giữa chúng tạo ra synchronous coupling đủ mạnh để làm mất tính independently deployable. Hiểu entanglement giúp nhận ra các 'distributed monolith' — hệ thống trông như microservices nhưng thực ra phải deploy cùng nhau.",
        },
      ],
      keyTopics: [
        "Static coupling: library, schema, database sharing và deployment implications",
        "Dynamic coupling: synchronous vs asynchronous, temporal coupling",
        "Architecture quantum: định nghĩa, high functional cohesion, independent deployability",
        "Distributed monolith: dấu hiệu nhận biết và cách thoát",
        "Coupling point analysis: tool để identify và measure coupling",
        "Trade-off: loose coupling vs data consistency trong distributed context",
      ],
      bookChapters: "Chương 2 — Software Architecture: The Hard Parts",
      outputs: [
        "Vẽ coupling diagram cho một hệ thống đang biết: đánh dấu static coupling và dynamic coupling riêng biệt",
        "Xác định architectural quantum thật sự của hệ thống đó — bao nhiêu quantum? Có distributed monolith không?",
        "Chỉ ra 2 dynamic coupling point có thể chuyển thành async để giảm temporal coupling",
      ],
      signals: [
        "Phân biệt được distributed monolith với genuine microservices bằng quantum analysis",
        "Giải thích tại sao sharing database là static coupling dù runtime services không gọi nhau",
        "Biết khi nào temporal coupling là acceptable và khi nào cần refactor",
      ],
    },

    "hp-3": {
      track: "Software Architecture: The Hard Parts",
      tag: "Module 3",
      tagColor: "gold",
      title: "Modularity và Decomposition",
      overview:
        "Tách hệ thống là công việc nghe có vẻ đơn giản nhưng đầy bẫy. Module này dạy các driver làm thay đổi cấu trúc module, cách phân rã codebase theo domain thay vì chỉ theo technical layer, và khi nào không nên tách.",
      concepts: [
        {
          title: "Decomposition Drivers",
          body: "Không nên tách hệ thống chỉ vì 'microservices là trend'. Tách khi: cần scale từng phần độc lập, cần deploy với cadence khác nhau, cần team ownership rõ ràng, cần fault isolation, cần security boundary. Mỗi driver này có cost riêng — đừng trả cost nếu không có benefit tương ứng.",
        },
        {
          title: "Domain vs Technical Partitioning",
          body: "Technical partitioning: tổ chức theo layer (UI, service, data). Domain partitioning: tổ chức theo business domain (Order, Payment, Inventory). Hard Parts ủng hộ domain partitioning vì nó tạo ra module cohesion thật sự — thay đổi business domain không cần touch nhiều layer.",
        },
        {
          title: "Afferent và Efferent Coupling",
          body: "Afferent coupling (incoming): bao nhiêu component phụ thuộc vào component này? Component có afferent cao rất khó thay đổi. Efferent coupling (outgoing): component này phụ thuộc vào bao nhiêu component khác? Efferent cao làm component fragile và hard to test.",
        },
        {
          title: "Tách dần vs Big Bang",
          body: "Strangler Fig pattern: tách dần bằng cách xây module mới bên cạnh code cũ, route traffic dần dần, rồi xóa code cũ. Anti-pattern: big bang rewrite — tốn nhiều thời gian, rủi ro cao, thường không hoàn thành. Với legacy system, Strangler Fig gần như luôn là lựa chọn đúng hơn.",
        },
      ],
      keyTopics: [
        "Modularity drivers: maintainability, deployability, scalability, fault tolerance, team autonomy",
        "Domain partitioning vs technical partitioning: trade-offs",
        "Strangler Fig pattern và Branch by Abstraction",
        "Afferent/efferent coupling metrics và cách đọc kết quả",
        "Seam identification: finding natural boundaries trong legacy code",
        "Decomposition anti-patterns: premature decomposition, distributed monolith",
      ],
      bookChapters: "Chương 3-5 — Software Architecture: The Hard Parts",
      outputs: [
        "Vẽ module diagram trước và sau khi refactor cho một phần codebase bạn biết",
        "Giải thích bằng 3-4 câu: tại sao boundary mới tốt hơn boundary cũ",
        "Chọn 1 component có efferent coupling cao và đề xuất cách giảm mà không break interfaces",
      ],
      signals: [
        "Nhận ra khi nào tách module thêm sẽ tạo ra nhiều vấn đề hơn giải quyết",
        "Dùng Strangler Fig đúng cách thay vì đề xuất big bang rewrite",
        "Phân biệt được seam tự nhiên (domain boundary) với seam nhân tạo (technical layer)",
      ],
    },

    "hp-4": {
      track: "Software Architecture: The Hard Parts",
      tag: "Module 4",
      tagColor: "pink",
      title: "Data Decomposition và Service Granularity",
      overview:
        "Data thường là thứ cản trở tách service nhiều nhất. Module này dạy cách tách data domain dần dần, cân nhắc granularity dựa trên transaction boundary và workflow, và nhận ra khi nào nhỏ hơn không có nghĩa là tốt hơn.",
      concepts: [
        {
          title: "Data Decomposition Drivers",
          body: "Giống như service decomposition, data cũng có drivers: change frequency (bảng thay đổi nhiều thì nên tách), access patterns (read-heavy vs write-heavy), ownership (team nào owns data này), security zones (PII tách riêng). Tách data không theo drivers là tách vô nghĩa.",
        },
        {
          title: "Granularity Disintegrators",
          body: "Các lý do nên tách service nhỏ hơn: service scope too large, cần scale riêng một phần, fault tolerance yêu cầu isolation, security cần separate boundary, extensibility của một phần nhiều hơn phần khác. Mỗi disintegrator có weight riêng tùy context.",
        },
        {
          title: "Granularity Integrators",
          body: "Các lý do nên gộp lại: database transactions (ACID cần single service), workflow coherence (steps trong cùng business flow nên gần nhau), shared code nếu không thể share library, data relationships chặt. Khi integrators outweigh disintegrators, gộp lại là đúng hơn.",
        },
        {
          title: "Transactional Boundary Problem",
          body: "Distributed transaction là đắt đỏ và phức tạp. Nếu hai service cần cùng ACID transaction thường xuyên, đó là dấu hiệu chúng chưa nên tách. Hoặc cần redesign để chỉ cần eventual consistency thay vì strong consistency.",
        },
      ],
      keyTopics: [
        "Data domain identification: bounded context cho data",
        "Five steps to break apart operational data",
        "Granularity disintegrators: service scope, scalability, fault tolerance, security, extensibility",
        "Granularity integrators: database transactions, workflow, data relationships, shared code",
        "Table-to-domain mapping: bài tập thực hành tách data",
        "Dealing with shared tables: private tables vs shared tables vs table splitting",
      ],
      bookChapters: "Chương 6-7 — Software Architecture: The Hard Parts",
      outputs: [
        "Tạo bảng mapping table → data domain → service owner cho một hệ thống bạn đang biết",
        "Đánh giá granularity của 2-3 services hiện tại: tách thêm hay gộp lại?",
        "Viết 1 decision note: 'service X không tách nhỏ hơn vì integrators outweigh disintegrators ở điểm Y và Z'",
      ],
      signals: [
        "Giải thích tại sao transactional boundary là integrator mạnh nhất",
        "Nhận ra khi nào shared table là acceptable và khi nào là red flag",
        "Cân bằng granularity disintegrators và integrators cho một bài toán cụ thể",
      ],
    },

    "hp-5": {
      track: "Software Architecture: The Hard Parts",
      tag: "Module 5",
      tagColor: "cyan",
      title: "Reuse, Data Ownership, Distributed Access",
      overview:
        "Sau khi tách service, ngay lập tức xuất hiện câu hỏi: code dùng chung để ở đâu? Data ai giữ? Service khác lấy data thế nào? Module này dạy các pattern cho reuse, ownership model, và distributed data access.",
      concepts: [
        {
          title: "Code Reuse Patterns",
          body: "Có nhiều cách reuse code: shared library (code, low coupling, versioning complexity), shared service (runtime call, high coupling, single point of failure), sidecar (per-service, same-host deployment), platform capability (infrastructure-level). Lựa chọn phụ thuộc vào volatility của code và độ chấp nhận runtime coupling.",
        },
        {
          title: "Data Ownership Patterns",
          body: "Ownership xác định ai có quyền write data và ai chỉ được read. Single ownership: một service owns, others read via API (simple, clear, potential bottleneck). Common ownership: nhiều service cùng write vào shared database (coupling cao, consistency dễ hơn). Joint ownership: events, eventual consistency.",
        },
        {
          title: "Distributed Data Access Patterns",
          body: "Service A cần data của service B: 5 patterns phổ biến: (1) inter-service call, (2) data replication, (3) caching, (4) data product, (5) event streaming. Mỗi pattern có latency, consistency và operational complexity khác nhau. Không có pattern nào đúng mọi lúc.",
        },
        {
          title: "Stamp Coupling trong Data",
          body: "Stamp coupling xảy ra khi một service pass toàn bộ data object dù consumer chỉ cần một phần nhỏ. Vấn đề: consumer phải biết về toàn bộ structure, thay đổi structure ảnh hưởng đến consumers không liên quan. Solution: pass only what's needed, hoặc dùng event với schema chặt.",
        },
      ],
      keyTopics: [
        "Shared library vs shared service vs sidecar vs platform: decision criteria",
        "Data ownership models: single, common, joint ownership",
        "Five distributed data access patterns: tradeoffs và khi nào dùng",
        "Interservice communication: synchronous vs asynchronous cho data access",
        "Stamp coupling: nhận biết và refactor",
        "Data product pattern và data mesh concepts",
      ],
      bookChapters: "Chương 8-10 — Software Architecture: The Hard Parts",
      outputs: [
        "Cho 1 nhu cầu reuse thực tế, so sánh shared library vs shared service và chọn với justification",
        "Vẽ data ownership diagram cho 2-3 bounded context, chỉ rõ ai write, ai read-only",
        "Chọn 1 inter-service data access scenario và đề xuất pattern với trade-off analysis",
      ],
      signals: [
        "Chọn shared library hay shared service dựa trên volatility, not just 'DRY'",
        "Thiết kế data ownership model không tạo ra bottleneck ở service chứa shared data",
        "Nhận ra stamp coupling trong API design và đề xuất cách fix",
      ],
    },

    "hp-6": {
      track: "Software Architecture: The Hard Parts",
      tag: "Module 6",
      tagColor: "blue",
      title: "Workflow, Orchestration, Choreography, Saga",
      overview:
        "Distributed workflow là một trong những phần khó nhất của microservices. Module này dạy orchestration vs choreography, 4 saga patterns, compensating transactions, và cách thiết kế eventual consistency có chủ đích thay vì để nó xảy ra ngẫu nhiên.",
      concepts: [
        {
          title: "Orchestration vs Choreography",
          body: "Orchestration: central coordinator biết toàn bộ workflow và ra lệnh cho từng service. Dễ debug, dễ monitor, nhưng tạo central coupling point. Choreography: services react to events, không có central coordinator. Loose coupling hơn nhưng khó trace và khó hiểu toàn cảnh workflow.",
        },
        {
          title: "Saga Patterns",
          body: "Hard Parts mô tả 4 saga patterns: Epic Saga (fully synchronous), Phone Tag Saga (partially synchronous), Fairy Tale Saga (fully asynchronous with choreography), Anthology Saga (fully asynchronous with orchestration). Mỗi pattern có trade-off khác nhau giữa coupling, complexity và responsiveness.",
        },
        {
          title: "Compensating Transactions",
          body: "Khi một bước trong distributed workflow fail, cần compensating transaction để undo các bước đã thực hiện. Không phải mọi action đều có thể compensate (ví dụ: email đã gửi). Cần xác định upfront: bước nào là compensatable và bước nào là pivot point (không thể undo).",
        },
        {
          title: "Eventual Consistency Management",
          body: "Eventual consistency không phải là 'sẽ OK cuối cùng'. Cần: xác định rõ convergence time acceptable, thiết kế UI/UX cho eventual consistency, implement monitoring để phát hiện khi convergence không xảy ra (divergence detection), có reconciliation process cho edge cases.",
        },
      ],
      keyTopics: [
        "Orchestration: mediator pattern, central coordinator, workflow state management",
        "Choreography: event-driven coordination, saga state tracking",
        "4 saga patterns: Epic, Phone Tag, Fairy Tale, Anthology — topology và trade-offs",
        "Compensating transactions: pivot point, compensatable actions, retryable actions",
        "Eventual consistency patterns: outbox pattern, saga state machine",
        "Transactional sagas: ACID vs BASE, semantic lock pattern",
      ],
      bookChapters: "Chương 11-13 — Software Architecture: The Hard Parts",
      outputs: [
        "Vẽ sequence diagram cho 1 distributed workflow (ví dụ: order processing) với cả happy path và failure path",
        "Chỉ ra compensating transactions cho từng bước có thể fail",
        "Quyết định: orchestration hay choreography cho workflow đó? Viết justification 3-4 câu",
      ],
      signals: [
        "Thiết kế workflow có explicit failure handling, không chỉ happy path",
        "Giải thích được khi nào Epic Saga là acceptable dù coupling cao",
        "Biết phân biệt pivot point (không thể undo) với compensatable action",
      ],
    },

    "hp-7": {
      track: "Software Architecture: The Hard Parts",
      tag: "Module 7",
      tagColor: "green",
      title: "Contracts và Analytical Data",
      overview:
        "Module này bao gồm hai chủ đề liên quan đến integration: contract design giữa services (strict vs loose, stamp coupling), và tách luồng analytical data khỏi operational data — vấn đề xảy ra khi hệ thống đã mature và cần reporting/analytics.",
      concepts: [
        {
          title: "Strict vs Loose Contracts",
          body: "Strict contract: consumer chỉ nhận đúng những gì đã được định nghĩa, breaking change rõ ràng. Loose contract: consumer lấy những gì cần, provider có thể thêm fields mà không break consumers. Trade-off: strict tốt hơn cho correctness, loose tốt hơn cho evolvability trong fast-moving systems.",
        },
        {
          title: "Stamp Coupling",
          body: "Stamp coupling xảy ra khi message/event chứa quá nhiều data so với những gì consumer cần. Hậu quả: coupling tăng, schema change ảnh hưởng nhiều consumer, bandwidth waste. Solution: thiết kế contract chỉ chứa data cần thiết cho consumer, dùng field filtering hoặc projection.",
        },
        {
          title: "Analytical Data Separation",
          body: "Operational database tối ưu cho transactional workloads (writes, point reads). Analytical workloads cần aggregation, historical data, cross-domain joins — thứ operational database không làm tốt. Tách analytical data giúp: không ảnh hưởng operational performance, cho phép denormalization, enable complex queries.",
        },
        {
          title: "Data Mesh",
          body: "Data mesh là approach trị governance của analytical data: mỗi domain owns analytical data của mình như 'data product', thay vì central data team owns everything. Ưu điểm: domain expertise, faster iteration. Nhược điểm: inconsistency giữa domains, cần data platform infrastructure mạnh.",
        },
      ],
      keyTopics: [
        "Contract types: strict, loose, consumer-driven contracts",
        "Stamp coupling trong events và APIs: detection và refactoring",
        "Analytical data patterns: data warehouse, data lake, data lakehouse",
        "Data mesh: domain-oriented ownership, data as a product, self-serve platform",
        "ETL vs ELT: trade-offs cho analytical pipelines",
        "Change data capture (CDC): kỹ thuật sync operational data sang analytical store",
      ],
      bookChapters: "Chương 14 — Software Architecture: The Hard Parts",
      outputs: [
        "Review 1 API contract đang dùng: có stamp coupling không? Có thể tighten hay loose thêm không?",
        "Thiết kế data flow từ operational → analytical cho 1 domain: chọn pattern và giải thích",
        "So sánh data warehouse vs data mesh cho một tổ chức có 10 domain services",
      ],
      signals: [
        "Nhận ra stamp coupling trong event schema và đề xuất cách fix cụ thể",
        "Giải thích khi nào data mesh phù hợp và khi nào data warehouse truyền thống đủ",
        "Thiết kế CDC pipeline đơn giản mà không ảnh hưởng operational write path",
      ],
    },

    "hp-8": {
      track: "Software Architecture: The Hard Parts",
      tag: "Module 8",
      tagColor: "gold",
      title: "Trade-Off Analysis Lab",
      overview:
        "Module cuối là phần quan trọng nhất: tự mình phân tích trade-off từ đầu đến cuối. Không phải để tìm đáp án đúng — mà để luyện kỹ năng trình bày alternatives, đánh giá risk, và kết luận rõ ràng bằng ngôn ngữ trade-off.",
      concepts: [
        {
          title: "Finding Trade-Off Dimensions",
          body: "Với mỗi architectural decision, có nhiều chiều trade-off: performance vs consistency, coupling vs cohesion, simplicity vs flexibility, short-term vs long-term cost. Bước đầu tiên của trade-off analysis là xác định đúng các chiều đang va nhau, không phải tìm đáp án.",
        },
        {
          title: "Qualitative vs Quantitative Analysis",
          body: "Qualitative: so sánh bằng ngôn ngữ (high/medium/low, better/worse). Quantitative: so sánh bằng con số (latency p99, throughput req/s, error rate %). Khi có thể đo được, đo — đừng dựa vào intuition. Khi không đo được, qualitative analysis với clear reasoning vẫn tốt hơn không có analysis.",
        },
        {
          title: "Architecture Decision Matrix",
          body: "Decision matrix: liệt kê alternatives theo hàng, criteria theo cột, điền rating. Không phải để ra quyết định bằng tổng điểm — mà để buộc bản thân suy nghĩ về từng combination và làm rõ priority. Criteria nào quan trọng hơn nên có weight cao hơn.",
        },
        {
          title: "Avoiding Common Pitfalls",
          body: "Architecture evangelism: chọn option vì bạn thích nó, không phải vì context yêu cầu. Out-of-context pattern matching: áp dụng pattern vì nó work ở công ty khác. Resume-driven architecture: chọn technology vì muốn learn, không vì phù hợp. Trade-off analysis là antidote cho tất cả những điều này.",
        },
      ],
      keyTopics: [
        "Trade-off analysis framework: identify dimensions, rate options, weight criteria",
        "MECE analysis: mutually exclusive, collectively exhaustive alternatives",
        "Architecture decision matrix: template và cách dùng hiệu quả",
        "Qualitative analysis: tiêu chí so sánh và ngôn ngữ chuẩn",
        "Quantitative analysis: metrics để đo architectural characteristics",
        "Presenting trade-offs: cách trình bày cho business stakeholders",
        "Architecture evangelism và confirmation bias: nhận biết và chống lại",
      ],
      bookChapters: "Chương 15 — Software Architecture: The Hard Parts",
      outputs: [
        "Tự phân tích 1 architectural decision thật từ đầu đến cuối: context → alternatives → trade-offs → decision",
        "Tạo decision matrix cho ít nhất 3 alternatives với ít nhất 4 criteria có weight",
        "Viết 1 trang executive summary của analysis: non-technical reader đọc xong hiểu decision và reasoning",
      ],
      signals: [
        "Analysis có ít nhất 3 alternatives thực chất, không phải 2 options và 1 straw man",
        "Kết luận dùng ngôn ngữ 'we chose X over Y because Z' thay vì 'X is the best'",
        "Decision matrix không bị dominated bởi 1 option trên tất cả criteria (bias indicator)",
      ],
    },
  };

  // ─── Drawer logic ──────────────────────────────────────────────────────
  var currentModuleIds = [];
  var currentIndex = 0;

  function getTagClass(color) {
    return "tag " + color;
  }

  function renderDrawerContent(moduleId) {
    var data = MODULE_DATA[moduleId];
    if (!data) return;

    var drawerLabel = document.getElementById("drawer-label");
    var drawerTitle = document.getElementById("drawer-title");
    var drawerBody = document.getElementById("drawer-body");

    if (drawerLabel) {
      drawerLabel.textContent = data.track + " · " + data.tag;
    }
    if (drawerTitle) {
      drawerTitle.textContent = data.title;
    }

    if (!drawerBody) return;

    var prevBtn = document.getElementById("drawer-prev");
    var nextBtn = document.getElementById("drawer-next");
    if (prevBtn) prevBtn.disabled = currentIndex <= 0;
    if (nextBtn) nextBtn.disabled = currentIndex >= currentModuleIds.length - 1;

    var html = "";

    // Overview
    html += '<div class="drawer-section">';
    html += '<h3>Tổng quan</h3>';
    html += "<p>" + data.overview + "</p>";
    html += "</div>";

    // Key Concepts
    if (data.concepts && data.concepts.length) {
      html += '<div class="drawer-section">';
      html += "<h3>Khái niệm cốt lõi</h3>";
      html += '<div class="drawer-concept-grid">';
      data.concepts.forEach(function (c) {
        html += '<div class="drawer-concept">';
        html += "<strong>" + c.title + "</strong>";
        html += "<p>" + c.body + "</p>";
        html += "</div>";
      });
      html += "</div>";
      html += "</div>";
    }

    // Key Topics
    if (data.keyTopics && data.keyTopics.length) {
      html += '<div class="drawer-section">';
      html += "<h3>Nội dung học chi tiết</h3>";
      html += "<ul>";
      data.keyTopics.forEach(function (topic) {
        html += "<li>" + topic + "</li>";
      });
      html += "</ul>";
      html += "</div>";
    }

    // Book source
    if (data.bookChapters) {
      html += '<div class="drawer-section">';
      html += "<h3>Nguồn sách</h3>";
      html += '<div class="drawer-quote">' + data.bookChapters + "</div>";
      html += "</div>";
    }

    // Outputs
    if (data.outputs && data.outputs.length) {
      html += '<div class="drawer-section">';
      html += "<h3>Output thực hành</h3>";
      html += '<ul class="drawer-output-list">';
      data.outputs.forEach(function (o) {
        html += "<li>" + o + "</li>";
      });
      html += "</ul>";
      html += "</div>";
    }

    // Signals
    if (data.signals && data.signals.length) {
      html += '<div class="drawer-section">';
      html += "<h3>Dấu hiệu đã ngấm</h3>";
      html += '<ul class="drawer-check-list">';
      data.signals.forEach(function (s) {
        html += "<li>" + s + "</li>";
      });
      html += "</ul>";
      html += "</div>";
    }

    drawerBody.innerHTML = html;
    drawerBody.scrollTop = 0;
  }

  function openDrawer(moduleId) {
    var overlay = document.getElementById("module-overlay");
    var drawer = document.getElementById("module-drawer");
    if (!overlay || !drawer) return;

    renderDrawerContent(moduleId);
    overlay.classList.add("open");
    drawer.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    var overlay = document.getElementById("module-overlay");
    var drawer = document.getElementById("module-drawer");
    if (!overlay || !drawer) return;

    overlay.classList.remove("open");
    drawer.classList.remove("open");
    document.body.style.overflow = "";
  }

  function navigateDrawer(direction) {
    currentIndex = Math.max(0, Math.min(currentModuleIds.length - 1, currentIndex + direction));
    renderDrawerContent(currentModuleIds[currentIndex]);
  }

  function buildDrawer() {
    var overlay = document.createElement("div");
    overlay.id = "module-overlay";
    overlay.className = "module-drawer-overlay";
    overlay.addEventListener("click", closeDrawer);

    var drawer = document.createElement("div");
    drawer.id = "module-drawer";
    drawer.className = "module-drawer";

    var topbar = document.createElement("div");
    topbar.className = "drawer-topbar";

    var meta = document.createElement("div");
    meta.className = "drawer-topbar-meta";

    var label = document.createElement("div");
    label.id = "drawer-label";
    label.className = "drawer-topbar-label";

    var title = document.createElement("h2");
    title.id = "drawer-title";
    title.className = "drawer-topbar-title";

    meta.appendChild(label);
    meta.appendChild(title);

    var closeBtn = document.createElement("button");
    closeBtn.className = "drawer-close";
    closeBtn.textContent = "Đóng ✕";
    closeBtn.addEventListener("click", closeDrawer);

    topbar.appendChild(meta);
    topbar.appendChild(closeBtn);

    var body = document.createElement("div");
    body.id = "drawer-body";
    body.className = "drawer-body";

    var navBtns = document.createElement("div");
    navBtns.className = "drawer-nav-buttons";

    var prevBtn = document.createElement("button");
    prevBtn.id = "drawer-prev";
    prevBtn.className = "drawer-nav-btn";
    prevBtn.textContent = "← Module trước";
    prevBtn.addEventListener("click", function () {
      navigateDrawer(-1);
    });

    var nextBtn = document.createElement("button");
    nextBtn.id = "drawer-next";
    nextBtn.className = "drawer-nav-btn";
    nextBtn.textContent = "Module tiếp →";
    nextBtn.addEventListener("click", function () {
      navigateDrawer(1);
    });

    navBtns.appendChild(prevBtn);
    navBtns.appendChild(nextBtn);

    drawer.appendChild(topbar);
    drawer.appendChild(body);
    drawer.appendChild(navBtns);

    document.body.appendChild(overlay);
    document.body.appendChild(drawer);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeDrawer();
      if (e.key === "ArrowLeft" && document.getElementById("module-drawer").classList.contains("open")) navigateDrawer(-1);
      if (e.key === "ArrowRight" && document.getElementById("module-drawer").classList.contains("open")) navigateDrawer(1);
    });
  }

  function wireModules() {
    var items = Array.prototype.slice.call(document.querySelectorAll("[data-module]"));
    if (!items.length) return;

    currentModuleIds = items.map(function (el) {
      return el.getAttribute("data-module");
    });

    buildDrawer();

    items.forEach(function (el, index) {
      el.classList.add("module-clickable");
      el.addEventListener("click", function () {
        currentIndex = index;
        openDrawer(currentModuleIds[index]);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wireModules);
  } else {
    wireModules();
  }
})();
