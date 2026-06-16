(function () {
  var PATTERNS = [
    {
      id: "singleton",
      group: "creational",
      name: { vi: "Singleton", en: "Singleton" },
      summary: {
        vi: "Đảm bảo một class chỉ có một instance và cung cấp điểm truy cập toàn cục.",
        en: "Ensure a class has only one instance and provide a global access point.",
      },
      problem: {
        vi: "Bạn cần một instance duy nhất cho config loader, logger gốc hoặc connection pool — tạo nhiều instance gây lỗi logic hoặc lãng phí.",
        en: "You need a single instance for a config loader, root logger, or connection pool — multiple instances cause logic bugs or waste.",
      },
      meaning: {
        vi: "Singleton giới hạn số instance và che logic khởi tạo, cho phép mọi module dùng chung một object.",
        en: "Singleton limits instances and hides construction so every module shares one object.",
      },
      whenUse: {
        vi: ["Object phải duy nhất theo process", "Tạo nhiều instance gây lỗi hoặc tốn tài nguyên"],
        en: ["The object must be unique per process", "Multiple instances would break logic or waste resources"],
      },
      whenNot: {
        vi: ["Code khó test vì global state", "Thực chất chỉ cần dependency injection bình thường"],
        en: ["Tests suffer from global state", "You really just need normal dependency injection"],
      },
      tradeoff: {
        vi: "Tiện lợi nhưng dễ tạo global state ẩn, tăng coupling và khó mock trong test.",
        en: "Convenient but hides global state, increases coupling, and makes mocking harder in tests.",
      },
      example: {
        vi: 'class AppConfig {\n  private static instance: AppConfig;\n  static getInstance() {\n    if (!this.instance) this.instance = new AppConfig();\n    return this.instance;\n  }\n}',
        en: 'class AppConfig {\n  private static instance: AppConfig;\n  static getInstance() {\n    if (!this.instance) this.instance = new AppConfig();\n    return this.instance;\n  }\n}',
      },
      realWorld: { vi: ["Logger gốc", "Config loader", "Database connection pool (cẩn thận)"], en: ["Root logger", "Config loader", "Database connection pool (use carefully)"] },
    },
    {
      id: "factory-method",
      group: "creational",
      name: { vi: "Factory Method", en: "Factory Method" },
      summary: {
        vi: "Đóng gói logic tạo object vào một điểm, để subclass hoặc factory chọn implementation.",
        en: "Encapsulate object creation so a subclass or factory picks the implementation.",
      },
      problem: {
        vi: "Logic `new` nằm rải khắp code, khó đổi implementation khi thêm channel, provider hoặc môi trường mới.",
        en: "Object creation with `new` is scattered everywhere, making it hard to swap implementations.",
      },
      meaning: {
        vi: "Factory Method gom khởi tạo vào một chỗ, client chỉ biết interface chung.",
        en: "Factory Method centralizes construction; clients depend only on a shared interface.",
      },
      whenUse: {
        vi: ["Chọn implementation theo config", "Object tạo phức tạp", "Nhiều loại object cùng interface"],
        en: ["Pick implementation from config", "Construction is non-trivial", "Many types share one interface"],
      },
      whenNot: {
        vi: ["Object rất đơn giản", "Chỉ một implementation ổn định, không đổi"],
        en: ["The object is trivial", "One stable implementation with no variation"],
      },
      tradeoff: {
        vi: "Thêm lớp trung gian, nhưng logic khởi tạo gọn và dễ mở rộng.",
        en: "Adds an extra layer, but creation logic stays tidy and extensible.",
      },
      example: {
        vi: 'class NotifierFactory {\n  static create(channel: "email" | "sms") {\n    return channel === "email" ? new EmailNotifier() : new SmsNotifier();\n  }\n}',
        en: 'class NotifierFactory {\n  static create(channel: "email" | "sms") {\n    return channel === "email" ? new EmailNotifier() : new SmsNotifier();\n  }\n}',
      },
      realWorld: { vi: ["Payment provider factory", "Notifier factory", "Parser factory theo file type"], en: ["Payment provider factory", "Notifier factory", "Parser factory by file type"] },
    },
    {
      id: "abstract-factory",
      group: "creational",
      name: { vi: "Abstract Factory", en: "Abstract Factory" },
      summary: {
        vi: "Tạo họ (family) object liên quan mà không chỉ rõ class cụ thể.",
        en: "Create families of related objects without naming concrete classes.",
      },
      problem: {
        vi: "UI hoặc hệ thống cần bộ component đồng bộ (button + checkbox + dialog) theo theme/platform, không được trộn lẫn.",
        en: "You need coordinated sets of components (button, checkbox, dialog) per theme or platform.",
      },
      meaning: {
        vi: "Abstract Factory cung cấp interface tạo nhiều product liên quan; client chỉ làm việc với abstract factory.",
        en: "An abstract factory exposes creation methods for related products; clients depend on the factory interface.",
      },
      whenUse: {
        vi: ["Cần bộ object đồng bộ theo theme/OS", "Muốn cô lập client khỏi concrete class"],
        en: ["Products must stay consistent per theme/OS", "You want clients isolated from concrete classes"],
      },
      whenNot: {
        vi: ["Chỉ một loại object đơn lẻ — Factory Method đủ", "Số lượng product family ít và cố định"],
        en: ["Only one product type — Factory Method is enough", "Few fixed product families"],
      },
      tradeoff: {
        vi: "Mạnh khi có nhiều family, nhưng thêm nhiều interface và class khi mở rộng product mới.",
        en: "Powerful for multiple families, but adding new product types touches many interfaces.",
      },
      example: {
        vi: 'interface UIFactory {\n  createButton(): Button;\n  createCheckbox(): Checkbox;\n}\nclass WinFactory implements UIFactory { /* ... */ }',
        en: 'interface UIFactory {\n  createButton(): Button;\n  createCheckbox(): Checkbox;\n}\nclass WinFactory implements UIFactory { /* ... */ }',
      },
      realWorld: { vi: ["UI toolkit theo OS", "Bộ data access đồng bộ (SQL + cache + audit)"], en: ["OS-specific UI kits", "Coordinated data-access families"] },
    },
    {
      id: "builder",
      group: "creational",
      name: { vi: "Builder", en: "Builder" },
      summary: {
        vi: "Dựng object phức tạp từng bước, tách quá trình construction khỏi representation.",
        en: "Build complex objects step by step, separating construction from representation.",
      },
      problem: {
        vi: "Constructor quá dài vì quá nhiều field optional; khó đọc và khó validate trước khi tạo object.",
        en: "Constructors explode with optional fields; hard to read and validate before creating the object.",
      },
      meaning: {
        vi: "Builder cho phép set từng phần có tên rõ ràng, validate ở bước `build()`.",
        en: "A builder sets named parts fluently and validates in `build()`.",
      },
      whenUse: {
        vi: ["Object nhiều tham số optional", "Quy trình dựng nhiều bước", "Cần immutable object cuối cùng"],
        en: ["Many optional parameters", "Multi-step construction", "You want an immutable result"],
      },
      whenNot: {
        vi: ["Object nhỏ, ít field", "Constructor đã đủ rõ"],
        en: ["Small object with few fields", "A clear constructor is enough"],
      },
      tradeoff: {
        vi: "Code dài hơn một chút nhưng dễ đọc và an toàn hơn constructor khổng lồ.",
        en: "More classes, but far clearer than a giant constructor.",
      },
      example: {
        vi: 'new ReportQueryBuilder()\n  .setPeriod("2024-01", "2024-12")\n  .setCountry("VN")\n  .includeRefunds()\n  .build();',
        en: 'new ReportQueryBuilder()\n  .setPeriod("2024-01", "2024-12")\n  .setCountry("VN")\n  .includeRefunds()\n  .build();',
      },
      realWorld: { vi: ["Report query builder", "HTTP request builder", "Test data builder"], en: ["Report query builder", "HTTP request builder", "Test data builder"] },
    },
    {
      id: "prototype",
      group: "creational",
      name: { vi: "Prototype", en: "Prototype" },
      summary: {
        vi: "Sao chép object có sẵn thay vì tạo mới từ đầu khi khởi tạo tốn kém.",
        en: "Clone an existing object instead of building from scratch when creation is expensive.",
      },
      problem: {
        vi: "Tạo object mới phải đọc DB/file hoặc tính toán nặng; bạn chỉ cần biến thể nhỏ từ bản mẫu.",
        en: "Creating objects hits DB/files or heavy computation; you only need small variations from a template.",
      },
      meaning: {
        vi: "Prototype định nghĩa interface clone; client copy object mẫu rồi chỉnh sửa.",
        en: "Prototype defines a clone interface; clients copy a template and tweak it.",
      },
      whenUse: {
        vi: ["Khởi tạo tốn kém", "Cần nhiều object gần giống nhau", "Muốn ẩn class concrete khỏi client"],
        en: ["Construction is expensive", "Many near-identical objects", "Hide concrete classes from clients"],
      },
      whenNot: {
        vi: ["Object đơn giản, clone phức tạp hơn `new`", "Graph object có reference vòng — clone sâu khó"],
        en: ["Simple objects where clone costs more than `new`", "Deep graphs with circular references"],
      },
      tradeoff: {
        vi: "Clone nhanh nhưng phải xử lý shallow vs deep copy cẩn thận.",
        en: "Fast duplication, but shallow vs deep copy must be handled carefully.",
      },
      example: {
        vi: 'interface Document extends Cloneable {\n  clone(): Document;\n}\nconst draft = template.clone();\ndraft.title = "Copy of report";',
        en: 'interface Document extends Cloneable {\n  clone(): Document;\n}\nconst draft = template.clone();\ndraft.title = "Copy of report";',
      },
      realWorld: { vi: ["Clone document template", "Game entity spawn từ prototype", "Spreadsheet cell copy"], en: ["Document templates", "Game entity spawning", "Spreadsheet cell copying"] },
    },
    {
      id: "adapter",
      group: "structural",
      name: { vi: "Adapter", en: "Adapter" },
      summary: {
        vi: "Chuyển interface của class hiện có sang interface mà client mong đợi.",
        en: "Convert an existing interface into one clients expect.",
      },
      problem: {
        vi: "API vendor bên ngoài không khớp interface nội bộ; domain bị nhiễm chi tiết third-party.",
        en: "External vendor APIs do not match internal interfaces; domain gets polluted.",
      },
      meaning: {
        vi: "Adapter là lớp chuyển đổi — client gọi interface quen, adapter gọi API thật.",
        en: "An adapter translates calls: clients use a familiar interface, the adapter talks to the real API.",
      },
      whenUse: {
        vi: ["Payment gateway", "Shipping API", "Identity provider", "Legacy system integration"],
        en: ["Payment gateways", "Shipping APIs", "Identity providers", "Legacy integration"],
      },
      whenNot: {
        vi: ["Bạn kiểm soát cả hai đầu và có thể sửa interface gốc"],
        en: ["You control both sides and can change the original interface"],
      },
      tradeoff: {
        vi: "Thêm lớp mapping, nhưng cô lập vendor và giảm blast radius khi API đổi.",
        en: "Extra mapping layer, but isolates vendors and limits API-change impact.",
      },
      example: {
        vi: 'class StripeAdapter implements PaymentGateway {\n  charge(amount: number) {\n    return stripeClient.charges.create({ amount });\n  }\n}',
        en: 'class StripeAdapter implements PaymentGateway {\n  charge(amount: number) {\n    return stripeClient.charges.create({ amount });\n  }\n}',
      },
      realWorld: { vi: ["Stripe/PayPal adapter", "Legacy XML → REST adapter"], en: ["Stripe/PayPal adapters", "Legacy XML to REST adapters"] },
    },
    {
      id: "bridge",
      group: "structural",
      name: { vi: "Bridge", en: "Bridge" },
      summary: {
        vi: "Tách abstraction khỏi implementation để cả hai có thể thay đổi độc lập.",
        en: "Split abstraction from implementation so both can vary independently.",
      },
      problem: {
        vi: "Class phình to vì kết hợp nhiều chiều biến thể (ví dụ Shape × Renderer) bằng inheritance.",
        en: "Classes explode combining dimensions (e.g. Shape × Renderer) through inheritance alone.",
      },
      meaning: {
        vi: "Bridge ủy quyền phần implementation sang object riêng (implementor), abstraction giữ interface cho client.",
        en: "The abstraction delegates to a separate implementor object instead of inheriting every combination.",
      },
      whenUse: {
        vi: ["Nhiều chiều biến thể độc lập", "Muốn ẩn implementation khỏi client", "Cần swap implementation lúc runtime"],
        en: ["Multiple independent dimensions", "Hide implementation from clients", "Swap implementations at runtime"],
      },
      whenNot: {
        vi: ["Chỉ một implementation cố định", "Hệ thống nhỏ, inheritance đơn giản đủ"],
        en: ["One fixed implementation", "Small system where simple inheritance suffices"],
      },
      tradeoff: {
        vi: "Giảm subclass explosion, nhưng thêm indirection và nhiều class hơn.",
        en: "Avoids subclass explosion, but adds indirection and more classes.",
      },
      example: {
        vi: 'class RemoteControl {\n  constructor(private device: Device) {}\n  togglePower() { this.device.powerToggle(); }\n}',
        en: 'class RemoteControl {\n  constructor(private device: Device) {}\n  togglePower() { this.device.powerToggle(); }\n}',
      },
      realWorld: { vi: ["Remote + Device", "Message sender + Transport (email/SMS)"], en: ["Remote controls + devices", "Message sender + transport layer"] },
    },
    {
      id: "composite",
      group: "structural",
      name: { vi: "Composite", en: "Composite" },
      summary: {
        vi: "Gom object đơn và nhóm object thành cấu trúc cây; client xử lý uniform.",
        en: "Compose objects into tree structures; clients treat individual and group nodes uniformly.",
      },
      problem: {
        vi: "Cấu trúc part-whole (menu, folder) buộc client phân biệt leaf và container bằng if/else.",
        en: "Part-whole structures (menus, folders) force clients to branch on leaf vs container.",
      },
      meaning: {
        vi: "Composite định nghĩa component chung; leaf và composite cùng interface.",
        en: "A shared Component interface lets leaves and composites behave the same to clients.",
      },
      whenUse: {
        vi: ["Cây thư mục", "Menu UI", "Org chart", "Biểu thức nested"],
        en: ["Folder trees", "UI menus", "Org charts", "Nested expressions"],
      },
      whenNot: {
        vi: ["Cấu trúc phẳng, không có hierarchy", "Type safety leaf vs group quan trọng hơn uniform API"],
        en: ["Flat structures", "Strict leaf vs group typing matters more than uniformity"],
      },
      tradeoff: {
        vi: "Client đơn giản, nhưng khó enforce ràng buộc chỉ leaf mới có hành vi certain.",
        en: "Simpler clients, but harder to restrict certain behavior to leaves only.",
      },
      example: {
        vi: 'interface FileNode {\n  getSize(): number;\n}\nclass Folder implements FileNode {\n  getSize() { return this.children.reduce((s, c) => s + c.getSize(), 0); }\n}',
        en: 'interface FileNode {\n  getSize(): number;\n}\nclass Folder implements FileNode {\n  getSize() { return this.children.reduce((s, c) => s + c.getSize(), 0); }\n}',
      },
      realWorld: { vi: ["File explorer", "DOM tree", "Permission tree"], en: ["File explorers", "DOM trees", "Permission trees"] },
    },
    {
      id: "decorator",
      group: "structural",
      name: { vi: "Decorator", en: "Decorator" },
      summary: {
        vi: "Gắn thêm trách nhiệm cho object động mà không sửa class gốc.",
        en: "Attach responsibilities dynamically without modifying the original class.",
      },
      problem: {
        vi: "Cần thêm logging, cache, retry cho service nhưng không muốn subclass explosion.",
        en: "You need logging, cache, or retry on a service without a subclass explosion.",
      },
      meaning: {
        vi: "Decorator bọc object cùng interface, xử lý thêm rồi delegate xuống wrapped object.",
        en: "Decorators wrap the same interface, add behavior, then delegate to the inner object.",
      },
      whenUse: {
        vi: ["Cross-cutting behavior", "Xâu chuỗi nhiều hành vi", "Mở rộng lúc runtime"],
        en: ["Cross-cutting behavior", "Stacking behaviors", "Runtime extension"],
      },
      whenNot: {
        vi: ["Chuỗi decorator quá dài, khó debug", "Hành vi cốt lõi bị che mờ"],
        en: ["Decorator chains become hard to debug", "Core behavior gets obscured"],
      },
      tradeoff: {
        vi: "Linh hoạt hơn inheritance, nhưng nhiều lớp bọc có thể khó trace.",
        en: "More flexible than inheritance, but stacked wrappers are harder to trace.",
      },
      example: {
        vi: 'const repo = new CacheDecorator(\n  new LoggingDecorator(new SqlOrderRepository())\n);',
        en: 'const repo = new CacheDecorator(\n  new LoggingDecorator(new SqlOrderRepository())\n);',
      },
      realWorld: { vi: ["Cache decorator cho repository", "Retry wrapper cho HTTP client"], en: ["Cached repositories", "HTTP retry wrappers"] },
    },
    {
      id: "facade",
      group: "structural",
      name: { vi: "Facade", en: "Facade" },
      summary: {
        vi: "Giao diện đơn giản cho subsystem phức tạp.",
        en: "Provide a simple interface to a complex subsystem.",
      },
      problem: {
        vi: "Use case phải gọi 5–7 service con; client code rối và dễ vỡ khi subsystem đổi.",
        en: "A use case calls 5–7 subsystems; client code becomes fragile and noisy.",
      },
      meaning: {
        vi: "Facade gom flow nghiệp vụ thành một entry point như `placeOrder()`.",
        en: "A facade exposes one entry point such as `placeOrder()` over many subsystems.",
      },
      whenUse: {
        vi: ["Use case nhiều bước", "Client không nên biết chi tiết subsystem", "Onboarding dev mới"],
        en: ["Multi-step use cases", "Clients should not know subsystem details", "Onboarding new developers"],
      },
      whenNot: {
        vi: ["Facade trở thành god object chứa mọi logic", "Client cần fine-grained control từng bước"],
        en: ["The facade becomes a god object", "Clients need fine-grained control over each step"],
      },
      tradeoff: {
        vi: "Đơn giản hóa client, nhưng facade quá to sẽ khó test và khó tách.",
        en: "Simplifies clients, but an oversized facade is hard to test and split.",
      },
      example: {
        vi: 'class OrderFacade {\n  placeOrder(cartId: string) {\n    this.cart.validate(cartId);\n    this.inventory.reserve(cartId);\n    return this.payment.charge(cartId);\n  }\n}',
        en: 'class OrderFacade {\n  placeOrder(cartId: string) {\n    this.cart.validate(cartId);\n    this.inventory.reserve(cartId);\n    return this.payment.charge(cartId);\n  }\n}',
      },
      realWorld: { vi: ["Checkout facade", "Migration facade cho legacy module"], en: ["Checkout facades", "Legacy migration facades"] },
    },
    {
      id: "flyweight",
      group: "structural",
      name: { vi: "Flyweight", en: "Flyweight" },
      summary: {
        vi: "Chia sẻ state nội tại (intrinsic) giữa nhiều object để tiết kiệm bộ nhớ.",
        en: "Share intrinsic state across many objects to save memory.",
      },
      problem: {
        vi: "Hàng nghìn object giống nhau (ký tự, icon, tile) tốn RAM vì lặp lại data chung.",
        en: "Thousands of similar objects (glyphs, icons, tiles) waste RAM repeating shared data.",
      },
      meaning: {
        vi: "Flyweight factory giữ object dùng chung; phần state riêng (extrinsic) truyền từ bên ngoài.",
        en: "A flyweight factory stores shared objects; extrinsic state is passed in from outside.",
      },
      whenUse: {
        vi: ["Số lượng object rất lớn", "Phần lớn state có thể chia sẻ", "RAM là bottleneck"],
        en: ["Huge object counts", "Most state is shareable", "Memory is the bottleneck"],
      },
      whenNot: {
        vi: ["Object ít, tối ưu premature", "State extrinsic/intrinsic khó tách"],
        en: ["Few objects — premature optimization", "Hard to split extrinsic vs intrinsic state"],
      },
      tradeoff: {
        vi: "Tiết kiệm RAM, nhưng code phức tạp hơn và API kém trực quan.",
        en: "Saves memory, but adds complexity and less intuitive APIs.",
      },
      example: {
        vi: 'const factory = new TreeTypeFactory();\nconst tree = new Tree(x, y, factory.get(type)); // shared TreeType',
        en: 'const factory = new TreeTypeFactory();\nconst tree = new Tree(x, y, factory.get(type)); // shared TreeType',
      },
      realWorld: { vi: ["Text editor glyph sharing", "Game tile/map rendering"], en: ["Text editor glyphs", "Game tile rendering"] },
    },
    {
      id: "proxy",
      group: "structural",
      name: { vi: "Proxy", en: "Proxy" },
      summary: {
        vi: "Surrogate kiểm soát truy cập tới object thật (lazy load, auth, remote).",
        en: "A surrogate controls access to a real object (lazy load, auth, remote calls).",
      },
      problem: {
        vi: "Cần lazy initialization, kiểm tra quyền, hoặc gọi remote service mà client vẫn dùng interface quen.",
        en: "You need lazy init, access checks, or remote calls while clients keep the same interface.",
      },
      meaning: {
        vi: "Proxy implement cùng interface, chặn/chuyển tiếp request tới real subject.",
        en: "The proxy implements the same interface and intercepts or forwards to the real subject.",
      },
      whenUse: {
        vi: ["Lazy loading tài nguyên nặng", "Access control", "Remote proxy", "Caching proxy"],
        en: ["Lazy loading heavy resources", "Access control", "Remote proxies", "Caching proxies"],
      },
      whenNot: {
        vi: ["Logic ẩn quá nhiều gây surprise", "Overhead proxy không cần thiết"],
        en: ["Hidden logic surprises callers", "Unnecessary proxy overhead"],
      },
      tradeoff: {
        vi: "Trong suốt với client, nhưng thêm indirection và có thể che latency.",
        en: "Transparent to clients, but adds indirection and can hide latency.",
      },
      example: {
        vi: 'class ImageProxy implements Image {\n  render() {\n    if (!this.real) this.real = new LargeImage(this.path);\n    return this.real.render();\n  }\n}',
        en: 'class ImageProxy implements Image {\n  render() {\n    if (!this.real) this.real = new LargeImage(this.path);\n    return this.real.render();\n  }\n}',
      },
      realWorld: { vi: ["Lazy image load", "ORM lazy relation", "API gateway proxy"], en: ["Lazy image loading", "ORM lazy relations", "API gateway proxies"] },
    },
    {
      id: "interpreter",
      group: "behavioral",
      name: { vi: "Interpreter", en: "Interpreter" },
      summary: {
        vi: "Định nghĩa grammar và interpreter cho ngôn ngữ/biểu thức nhỏ.",
        en: "Define a grammar and interpreter for a small language or expression set.",
      },
      problem: {
        vi: "Cần parse và evaluate rule/biểu thức đơn giản lặp lại trong domain.",
        en: "You repeatedly parse and evaluate simple rules or expressions in the domain.",
      },
      meaning: {
        vi: "Mỗi rule là class; cây syntax được interpret bằng cách traverse và evaluate.",
        en: "Each grammar rule is a class; syntax trees are evaluated by traversing nodes.",
      },
      whenUse: {
        vi: ["Rule engine đơn giản", "Filter/query mini-language", "Template expression"],
        en: ["Simple rule engines", "Mini filter/query languages", "Template expressions"],
      },
      whenNot: {
        vi: ["Grammar phức tạp — dùng parser generator", "Performance cực kỳ quan trọng"],
        en: ["Complex grammars — use a parser generator", "Extreme performance requirements"],
      },
      tradeoff: {
        vi: "Dễ mở rộng grammar mới, nhưng class explosion với grammar lớn.",
        en: "Easy to extend grammars, but class explosion on large grammars.",
      },
      example: {
        vi: 'class OrExpr implements Expr {\n  eval(ctx) { return this.left.eval(ctx) || this.right.eval(ctx); }\n}',
        en: 'class OrExpr implements Expr {\n  eval(ctx) { return this.left.eval(ctx) || this.right.eval(ctx); }\n}',
      },
      realWorld: { vi: ["SQL WHERE subset", "Regex-like filter DSL"], en: ["SQL WHERE subsets", "Regex-like filter DSLs"] },
    },
    {
      id: "template-method",
      group: "behavioral",
      name: { vi: "Template Method", en: "Template Method" },
      summary: {
        vi: "Định nghĩa skeleton thuật toán ở class cha; subclass override bước cụ thể.",
        en: "Define an algorithm skeleton in a base class; subclasses override specific steps.",
      },
      problem: {
        vi: "Nhiều workflow gần giống nhau (parse → validate → save) chỉ khác vài bước.",
        en: "Many workflows share steps (parse → validate → save) with small variations.",
      },
      meaning: {
        vi: "Template Method giữ khung cố định, hook method cho phép customize.",
        en: "The template method keeps the frame fixed; hook methods allow customization.",
      },
      whenUse: {
        vi: ["Import pipeline nhiều format", "Workflow có skeleton chung", "Framework lifecycle hook"],
        en: ["Multi-format import pipelines", "Shared workflow skeletons", "Framework lifecycle hooks"],
      },
      whenNot: {
        vi: ["Cần thay đổi toàn bộ flow lúc runtime", "Inheritance hierarchy quá sâu"],
        en: ["You must change the whole flow at runtime", "Deep inheritance hierarchies"],
      },
      tradeoff: {
        vi: "Tái sử dụng logic chung tốt, nhưng coupling qua inheritance có thể cứng.",
        en: "Great reuse of shared steps, but inheritance coupling can stiffen design.",
      },
      example: {
        vi: 'abstract class DataImporter {\n  import(file) {\n    const rows = this.parse(file);\n    this.validate(rows);\n    return this.save(rows);\n  }\n}',
        en: 'abstract class DataImporter {\n  import(file) {\n    const rows = this.parse(file);\n    this.validate(rows);\n    return this.save(rows);\n  }\n}',
      },
      realWorld: { vi: ["CSV/JSON importer base class", "JUnit test lifecycle"], en: ["CSV/JSON importer base classes", "JUnit test lifecycle"] },
    },
    {
      id: "chain-of-responsibility",
      group: "behavioral",
      name: { vi: "Chain of Responsibility", en: "Chain of Responsibility" },
      summary: {
        vi: "Chuỗi handler; mỗi handler xử lý hoặc chuyển request cho handler kế.",
        en: "A chain of handlers; each processes or forwards the request.",
      },
      problem: {
        vi: "Request phải qua auth, validation, rate limit, logging — code if/else hoặc pipeline rối.",
        en: "Requests pass auth, validation, rate limits, logging — nested if/else gets messy.",
      },
      meaning: {
        vi: "Mỗi handler biết handler kế; client gửi vào đầu chain.",
        en: "Each handler knows the next; the client sends to the head of the chain.",
      },
      whenUse: {
        vi: ["HTTP middleware", "Validation pipeline", "Approval workflow", "Support ticket escalation"],
        en: ["HTTP middleware", "Validation pipelines", "Approval workflows", "Ticket escalation"],
      },
      whenNot: {
        vi: ["Chain quá dài, khó trace", "Thứ tự xử lý phải cố định và đơn giản"],
        en: ["Chains too long to trace", "Processing order is fixed and trivial"],
      },
      tradeoff: {
        vi: "Dễ thêm/bớt bước, nhưng flow implicit khó debug.",
        en: "Easy to add/remove steps, but implicit flow is harder to debug.",
      },
      example: {
        vi: 'authHandler.setNext(validateHandler).setNext(rateLimitHandler);\nauthHandler.handle(request);',
        en: 'authHandler.setNext(validateHandler).setNext(rateLimitHandler);\nauthHandler.handle(request);',
      },
      realWorld: { vi: ["Express/Koa middleware", "Servlet filter chain"], en: ["Express/Koa middleware", "Servlet filter chains"] },
    },
    {
      id: "command",
      group: "behavioral",
      name: { vi: "Command", en: "Command" },
      summary: {
        vi: "Đóng gói request/action thành object để queue, log, undo hoặc retry.",
        en: "Encapsulate a request or action as an object for queueing, logging, undo, or retry.",
      },
      problem: {
        vi: "Cần đưa action vào queue, audit, hoặc hỗ trợ undo mà không coupling invoker với receiver.",
        en: "You need to queue, audit, or undo actions without coupling invoker to receiver.",
      },
      meaning: {
        vi: "Command object biết cách gọi receiver; invoker chỉ gọi `execute()`.",
        en: "Command objects know how to invoke receivers; invokers only call `execute()`.",
      },
      whenUse: {
        vi: ["Background job", "Undo/redo", "Audit trail", "Deferred execution"],
        en: ["Background jobs", "Undo/redo", "Audit trails", "Deferred execution"],
      },
      whenNot: {
        vi: ["Action đơn giản, không cần lưu trữ hay queue", "Quá nhiều command class nhỏ"],
        en: ["Simple actions with no queue/audit need", "Too many tiny command classes"],
      },
      tradeoff: {
        vi: "Chuẩn hóa action tốt, nhưng nhiều class boilerplate.",
        en: "Standardizes actions well, but adds boilerplate classes.",
      },
      example: {
        vi: 'class ChargeCommand {\n  execute() { return this.gateway.charge(this.amount); }\n}\nqueue.push(new ChargeCommand(payment));',
        en: 'class ChargeCommand {\n  execute() { return this.gateway.charge(this.amount); }\n}\nqueue.push(new ChargeCommand(payment));',
      },
      realWorld: { vi: ["Job queue worker", "Text editor undo stack"], en: ["Job queue workers", "Text editor undo stacks"] },
    },
    {
      id: "iterator",
      group: "behavioral",
      name: { vi: "Iterator", en: "Iterator" },
      summary: {
        vi: "Duyệt collection mà không lộ cấu trúc bên trong.",
        en: "Traverse a collection without exposing its internal structure.",
      },
      problem: {
        vi: "Client phải biết collection là array, linked list hay tree để duyệt đúng cách.",
        en: "Clients must know whether a collection is an array, list, or tree to traverse it.",
      },
      meaning: {
        vi: "Iterator cung cấp `next()`/`hasNext()` uniform cho mọi cấu trúc.",
        en: "Iterators expose uniform `next()` / `hasNext()` over any structure.",
      },
      whenUse: {
        vi: ["Ẩn cấu trúc collection", "Nhiều cách duyệt song song", "Lazy traversal"],
        en: ["Hide collection structure", "Multiple traversal strategies", "Lazy traversal"],
      },
      whenNot: {
        vi: ["Ngôn ngữ đã có iterator built-in đủ dùng", "Collection đơn giản, for-loop đủ"],
        en: ["Language iterators are enough", "Simple collections where for-loops suffice"],
      },
      tradeoff: {
        vi: "API sạch, nhưng iterator invalidation cần xử lý khi collection đổi lúc duyệt.",
        en: "Clean API, but handle invalidation if the collection mutates during traversal.",
      },
      example: {
        vi: 'for (const item of collection) {\n  console.log(item);\n} // built-in iterator protocol',
        en: 'for (const item of collection) {\n  console.log(item);\n} // built-in iterator protocol',
      },
      realWorld: { vi: ["Java for-each", "JavaScript iterable", "DB cursor pagination"], en: ["Java for-each", "JavaScript iterables", "DB cursor pagination"] },
    },
    {
      id: "mediator",
      group: "behavioral",
      name: { vi: "Mediator", en: "Mediator" },
      summary: {
        vi: "Gom giao tiếp giữa nhiều object qua mediator thay vì reference trực tiếp.",
        en: "Centralize communication between objects through a mediator instead of direct references.",
      },
      problem: {
        vi: "N component giao tiếp full-mesh — coupling cao, khó thay đổi một component.",
        en: "N components talk in a full mesh — high coupling, hard to change one piece.",
      },
      meaning: {
        vi: "Mediator nhận message và điều phối; colleague chỉ biết mediator.",
        en: "The mediator receives messages and coordinates; colleagues only know the mediator.",
      },
      whenUse: {
        vi: ["UI dialog nhiều widget", "Chat room", "Air traffic control style coordination"],
        en: ["UI dialogs with many widgets", "Chat rooms", "Coordination hubs"],
      },
      whenNot: {
        vi: ["Mediator trở thành god object", "Chỉ 2 object giao tiếp đơn giản"],
        en: ["The mediator becomes a god object", "Only two objects with simple talk"],
      },
      tradeoff: {
        vi: "Giảm coupling giữa colleague, nhưng mediator có thể phình logic.",
        en: "Lowers colleague coupling, but the mediator can grow complex.",
      },
      example: {
        vi: 'class ChatRoom {\n  notify(sender, message) {\n    this.users.filter(u => u !== sender).forEach(u => u.receive(message));\n  }\n}',
        en: 'class ChatRoom {\n  notify(sender, message) {\n    this.users.filter(u => u !== sender).forEach(u => u.receive(message));\n  }\n}',
      },
      realWorld: { vi: ["Form coordinator", "Event bus nội bộ module"], en: ["Form coordinators", "In-module event buses"] },
    },
    {
      id: "memento",
      group: "behavioral",
      name: { vi: "Memento", en: "Memento" },
      summary: {
        vi: "Lưu và khôi phục trạng thái object mà không phá encapsulation.",
        en: "Save and restore object state without breaking encapsulation.",
      },
      problem: {
        vi: "Cần undo/snapshot nhưng không muốn lộ internal state của object.",
        en: "You need undo/snapshots without exposing an object's internal state.",
      },
      meaning: {
        vi: "Originator tạo memento; caretaker giữ memento; restore qua originator.",
        en: "The originator creates mementos; a caretaker stores them; restore goes through the originator.",
      },
      whenUse: {
        vi: ["Undo trong editor", "Checkpoint trước thao tác lớn", "Transactional draft"],
        en: ["Editor undo", "Checkpoints before big operations", "Transactional drafts"],
      },
      whenNot: {
        vi: ["State quá lớn, snapshot tốn RAM", "Immutable state đã đủ cho history"],
        en: ["State too large for snapshots", "Immutable history already solves the problem"],
      },
      tradeoff: {
        vi: "Encapsulation tốt, nhưng quản lý vòng đời memento và storage có thể nặng.",
        en: "Preserves encapsulation, but memento lifecycle and storage can get heavy.",
      },
      example: {
        vi: 'const saved = editor.save();\neditor.type("hello");\neditor.restore(saved);',
        en: 'const saved = editor.save();\neditor.type("hello");\neditor.restore(saved);',
      },
      realWorld: { vi: ["Text editor undo", "Game save slot"], en: ["Text editor undo", "Game save slots"] },
    },
    {
      id: "observer",
      group: "behavioral",
      name: { vi: "Observer", en: "Observer" },
      summary: {
        vi: "Subject thông báo nhiều observer khi trạng thái thay đổi.",
        en: "A subject notifies multiple observers when its state changes.",
      },
      problem: {
        vi: "Một event (order paid) cần email, loyalty, analytics phản ứng — publisher không nên biết hết subscriber.",
        en: "One event (order paid) triggers email, loyalty, analytics — the publisher should not know every subscriber.",
      },
      meaning: {
        vi: "Observer đăng ký với subject; subject broadcast khi có thay đổi.",
        en: "Observers subscribe to a subject; the subject broadcasts on change.",
      },
      whenUse: {
        vi: ["User registered", "Order paid", "Report generated", "Domain events"],
        en: ["User registered", "Order paid", "Report generated", "Domain events"],
      },
      whenNot: {
        vi: ["Flow cần thứ tự chặt và strong consistency", "Debug trace event khó"],
        en: ["Strict ordering and strong consistency required", "Event tracing is too hard"],
      },
      tradeoff: {
        vi: "Loose coupling, nhưng flow eventual và khó theo dõi hơn call trực tiếp.",
        en: "Loose coupling, but eventual flows are harder to trace than direct calls.",
      },
      example: {
        vi: 'orderEvents.on("paid", (order) => {\n  emailHandler.send(order);\n  analytics.track(order);\n});',
        en: 'orderEvents.on("paid", (order) => {\n  emailHandler.send(order);\n  analytics.track(order);\n});',
      },
      realWorld: { vi: ["Domain event bus", "React state subscription", "Kafka consumers"], en: ["Domain event buses", "React subscriptions", "Kafka consumers"] },
    },
    {
      id: "state",
      group: "behavioral",
      name: { vi: "State", en: "State" },
      summary: {
        vi: "Hành vi object thay đổi theo trạng thái nội tại; mỗi state là class riêng.",
        en: "An object's behavior changes with internal state; each state is its own class.",
      },
      problem: {
        vi: "Order/booking có nhiều trạng thái; switch/if dài và dễ thêm transition sai.",
        en: "Orders/bookings have many states; long switch/if chains invite wrong transitions.",
      },
      meaning: {
        vi: "Context ủy quyền hành vi cho state object hiện tại; đổi state = đổi class handler.",
        en: "The context delegates to the current state object; changing state swaps the handler class.",
      },
      whenUse: {
        vi: ["Order lifecycle", "Payment status", "Document approval", "Connection state machine"],
        en: ["Order lifecycles", "Payment status", "Document approval", "Connection state machines"],
      },
      whenNot: {
        vi: ["Chỉ 2–3 trạng thái đơn giản", "Transition matrix quá lớn — cân nhắc table-driven"],
        en: ["Only 2–3 simple states", "Huge transition matrices — consider table-driven FSM"],
      },
      tradeoff: {
        vi: "Rõ ràng hơn switch, nhưng nhiều class state khi lifecycle phình to.",
        en: "Clearer than switches, but many state classes as lifecycles grow.",
      },
      example: {
        vi: 'class PendingState {\n  pay(ctx) { ctx.setState(new PaidState()); }\n  cancel(ctx) { ctx.setState(new CancelledState()); }\n}',
        en: 'class PendingState {\n  pay(ctx) { ctx.setState(new PaidState()); }\n  cancel(ctx) { ctx.setState(new CancelledState()); }\n}',
      },
      realWorld: { vi: ["E-commerce order", "TCP connection", "Workflow ticket"], en: ["E-commerce orders", "TCP connections", "Workflow tickets"] },
    },
    {
      id: "strategy",
      group: "behavioral",
      name: { vi: "Strategy", en: "Strategy" },
      summary: {
        vi: "Định nghĩa họ thuật toán, encapsulate từng cái và cho phép hoán đổi lúc runtime.",
        en: "Define a family of algorithms, encapsulate each one, and swap them at runtime.",
      },
      problem: {
        vi: "Nhiều cách xử lý cùng nghiệp vụ (payment, discount, shipping) dẫn tới if/else dài.",
        en: "Many ways to handle the same concern (payment, discount, shipping) create long if/else chains.",
      },
      meaning: {
        vi: "Context giữ reference tới Strategy interface; inject implementation phù hợp.",
        en: "Context holds a Strategy interface reference; inject the right implementation.",
      },
      whenUse: {
        vi: ["Nhiều cách tính giá", "Nhiều payment method", "Nhiều discount policy"],
        en: ["Multiple pricing rules", "Multiple payment methods", "Multiple discount policies"],
      },
      whenNot: {
        vi: ["Chỉ một cách xử lý ổn định", "Strategy class quá mỏng, không đáng tách"],
        en: ["One stable approach", "Strategies too thin to justify splitting"],
      },
      tradeoff: {
        vi: "Mở rộng dễ (thêm class mới), nhưng nhiều class và client phải chọn strategy.",
        en: "Easy to extend with new classes, but more types and explicit strategy selection.",
      },
      example: {
        vi: 'class CheckoutService {\n  constructor(private payment: PaymentStrategy) {}\n  checkout(amount) { this.payment.pay(amount); }\n}',
        en: 'class CheckoutService {\n  constructor(private payment: PaymentStrategy) {}\n  checkout(amount) { this.payment.pay(amount); }\n}',
      },
      realWorld: { vi: ["Payment strategy", "Tax calculation by country", "Compression algorithm pick"], en: ["Payment strategies", "Tax by country", "Compression algorithm selection"] },
    },
    {
      id: "visitor",
      group: "behavioral",
      name: { vi: "Visitor", en: "Visitor" },
      summary: {
        vi: "Thêm operation mới lên cấu trúc object mà không sửa class element.",
        en: "Add new operations to an object structure without changing element classes.",
      },
      problem: {
        vi: "Cấu trúc element ổn định nhưng thường xuyên thêm operation mới (export, tax, print).",
        en: "The element structure is stable but you keep adding operations (export, tax, print).",
      },
      meaning: {
        vi: "Element chấp nhận visitor; visitor implement `visit` cho từng loại element.",
        en: "Elements accept visitors; visitors implement `visit` for each element type.",
      },
      whenUse: {
        vi: ["AST traversal nhiều pass", "Export/report trên cây object", "Compiler passes"],
        en: ["Multi-pass AST traversal", "Export/report over object trees", "Compiler passes"],
      },
      whenNot: {
        vi: ["Element hierarchy thay đổi liên tục", "Chỉ một operation đơn giản"],
        en: ["Element hierarchy changes often", "Only one simple operation"],
      },
      tradeoff: {
        vi: "Thêm operation dễ, nhưng thêm element type phải sửa mọi visitor.",
        en: "Easy to add operations, but new element types require updating every visitor.",
      },
      example: {
        vi: 'class TaxVisitor implements Visitor {\n  visitProduct(p) { return p.price * 0.1; }\n  visitBundle(b) { return b.items.reduce((s, i) => s + i.accept(this), 0); }\n}',
        en: 'class TaxVisitor implements Visitor {\n  visitProduct(p) { return p.price * 0.1; }\n  visitBundle(b) { return b.items.reduce((s, i) => s + i.accept(this), 0); }\n}',
      },
      realWorld: { vi: ["AST linter/formatter", "Document export (PDF/HTML)"], en: ["AST linters/formatters", "Document export to PDF/HTML"] },
    },
  ];

  var PATTERNS_BY_ID = {};
  PATTERNS.forEach(function (p) {
    PATTERNS_BY_ID[p.id] = p;
  });

  window.PATTERNS_CATALOG = PATTERNS;
  window.PATTERNS_BY_ID = PATTERNS_BY_ID;

  window.patternPageUrl = function (id, language) {
    var lang = language || (document.documentElement.lang === "en" ? "en" : "vi");
    return "./pattern" + (lang === "en" ? ".en" : "") + ".html?id=" + id;
  };
})();
