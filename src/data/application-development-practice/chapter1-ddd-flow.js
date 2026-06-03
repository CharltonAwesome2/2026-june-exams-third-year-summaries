// chapter1-ddd-flow.js (REVISED - no duplicates)

export const dddFlowLayers = {
  id: "ddd-flow-layers",
  title: "Chapter 1: DDD Flow & Layered Architecture",
  subtitle: "How the Pieces Fit Together",
  badge: "Architecture",

  contextAndPrerequisites: [
    "Basic understanding of object-oriented programming (classes, objects, methods)",
    "Familiarity with Java or similar OOP language",
    "No prior DDD experience required — this is foundational",
  ],

  realWorldAnalogy:
    "A restaurant has clear separation of concerns. The customer (input) talks to the waiter (controller). The waiter takes the order to the kitchen manager (service). The chef (domain) cooks using recipes (business rules). The pantry (repository) stores ingredients. Each person has a specific job and doesn't interfere with others. This separation makes the restaurant scalable, testable, and maintainable.",

  commonMisconceptions: [
    "DDD is only for large projects → TRUTH: DDD patterns help any project with complex business logic, regardless of size",
    "All code must be in the domain layer → TRUTH: Only business rules belong in domain; coordination belongs in services; HTTP concerns belong in controllers",
    "Repositories are just database DAOs → TRUTH: Repositories ABSTRACT persistence; the domain doesn't know if data comes from memory, database, or API",
    "DDD requires complex frameworks → TRUTH: Plain Java DDD works perfectly; Spring Boot just reduces boilerplate",
  ],

  examTips: [
    "The Standard Flow: Input → Command/DTO → Service → Factory/Domain → Repository → Result",
    "For reads: Query → Service → Repository → Domain object → Result",
    "For Spring Boot CRUD: HTTP request → Controller → Service → Domain/Factory → Repository → HTTP response",
    "Layer boundaries: NEVER let a controller talk directly to a repository. ALWAYS go through service.",
    "Remember: Domain layer has NO dependencies on infrastructure (no Spring annotations, no database code)",
  ],

  keyTakeaway:
    "DDD separates code into four layers: Entry/Controller (handles input), Application (coordinates use cases), Domain (business rules), Infrastructure (persistence). The domain layer is the heart — it should contain all business logic and have zero dependencies on frameworks or databases.",

  furtherConnections: [
    "Links to Chapter 2: Domain objects (entities, value objects, factories) live in the domain layer",
    "Links to Chapter 3: Services and handlers coordinate between layers",
    "Links to Chapter 4: Infrastructure provides repository implementations",
  ],

  objectives: [
    "Explain the standard DDD flow for write operations and read operations",
    "Identify the responsibility of each layer (Entry, Application, Domain, Infrastructure)",
    "Understand why the domain layer should have no external dependencies",
    "Differentiate between commands (write) and queries (read)",
    "Recognize when to use each layer in a Spring Boot project",
  ],

  keyConcepts: [
    "Standard DDD Flow (Write): Input → Command/DTO → Service/Handler → Factory/Domain → Repository → Result. The command carries intent, service coordinates, factory creates valid objects, repository persists.",
    "Standard DDD Flow (Read): Query → Service/Handler → Repository → Domain object → Result. Reads skip factories and domain logic because they only retrieve existing data.",
    "Spring Boot CRUD Flow: HTTP request → Controller → Service → Domain/Factory → Repository → HTTP response. Controllers handle HTTP, services orchestrate, repositories persist.",
    "Entry/Controller Layer: Handles external input (console commands in plain Java, HTTP requests in Spring Boot). Should be thin — no business logic, just parsing input and calling services.",
    "Application Layer: Coordinates use cases. Contains commands (write intent), queries (read intent), handlers (adapt input to service calls), services (orchestrate domain and repositories), events (record outcomes).",
    "Domain Layer: The heart of the system. Contains entities (have identity), value objects (defined by data), factories (create valid objects), repository interfaces (define persistence needs). Business rules live here.",
    "Infrastructure Layer: Provides technical implementations. In-memory repositories for plain Java testing. Spring Data JPA repositories for database persistence. Should depend on domain layer, not vice versa.",
    "Why Layer Separation Matters: Each layer can be tested in isolation. Domain logic doesn't break when database changes. Controllers can be swapped without affecting business rules. The system is maintainable and scalable.",
  ],

  content:
    "Domain-Driven Design separates code into distinct layers with clear responsibilities. The standard flow for write operations is: Input → Command/DTO → Service/Handler → Factory/Domain → Repository → Result. For reads: Query → Service/Handler → Repository → Domain object → Result. In Spring Boot projects, HTTP requests go through Controller → Service → Domain → Repository. The domain layer is the most important — it contains business rules and has no dependencies on frameworks or databases. This separation makes the system testable, maintainable, and scalable.",

  additionalKeyPoints: [
    "Plain Java Bootstrap Example: Main.java creates InMemoryCustomerRepository, CustomerService, then calls service.handle(command) and service.handle(query). No frameworks needed.",
    "Spring Boot Application: @SpringBootApplication on main class enables auto-configuration. Spring creates and injects all dependencies automatically.",
    "Why Services Exist: To keep use-case logic out of controllers AND out of domain entities. Services coordinate; domain entities contain rules.",
    "Why Factories Exist: To centralize creation rules and validation. A factory ensures you can't create an invalid Customer, Order, or Cart.",
    "Why Repository Interfaces in Domain: So the domain doesn't depend on a specific database. The same domain works with in-memory (for testing) and MySQL (for production).",
    "In-Memory Repository: Simple HashMap-based storage. Perfect for plain Java projects and unit tests. No database setup required.",
    "Spring Data JPA Repository: Extends JpaRepository<T, ID>. Provides save(), findById(), findAll(), deleteById() without writing SQL. Great for production.",
    "Layer Boundaries - Do NOT: Put business logic in controllers. Put database code in domain entities. Make services depend on specific database implementations. Let controllers call repositories directly.",
    "Layer Boundaries - DO: Keep controllers thin (just parse HTTP → call service). Keep domain pure (no Spring annotations, no JPA). Inject repository interfaces into services, not implementations.",
  ],

  codeExamples: [
    {
      description: "Command and Event classes (carry intent and record outcomes)",
      language: "java",
      code: "// COMMAND - carries write intent (immutable)\npublic class CreateCustomerCommand {\n    private final String id;\n    private final String name;\n    private final String email;\n    \n    public CreateCustomerCommand(String id, String name, String email) {\n        this.id = id;\n        this.name = name;\n        this.email = email;\n    }\n    \n    // getters only - no setters\n    public String getId() { return id; }\n    public String getName() { return name; }\n    public String getEmail() { return email; }\n}\n\n// EVENT - records what happened (immutable, for audit)\npublic class CustomerCreatedEvent {\n    private final String customerId;\n    private final String name;\n    private final LocalDateTime occurredAt;\n    \n    public CustomerCreatedEvent(String customerId, String name) {\n        this.customerId = customerId;\n        this.name = name;\n        this.occurredAt = LocalDateTime.now();\n    }\n    \n    // getters only\n}",
    },
    {
      description: "Repository interface (defined in domain layer - no implementation)",
      language: "java",
      code: "// DOMAIN LAYER - pure interface, no database details\npublic interface CustomerRepository {\n    Customer save(Customer customer);\n    Optional<Customer> findById(String id);\n    List<Customer> findAll();\n    void deleteById(String id);\n    boolean existsById(String id);\n}",
    },
    {
      description: "Plain Java DDD flow - complete example from Main entry point",
      language: "java",
      code: 'public class Main {\n    public static void main(String[] args) {\n        // INFRASTRUCTURE LAYER: Create concrete repository (in-memory for testing)\n        CustomerRepository repository = new InMemoryCustomerRepository();\n        \n        // APPLICATION LAYER: Create service with injected repository\n        CustomerService service = new CustomerService(repository);\n        \n        // WRITE FLOW: Command → Service → Factory → Domain → Repository → Event\n        CreateCustomerCommand command = new CreateCustomerCommand("1", "Lelethu", "lelethu@cput.ac.za");\n        CustomerCreatedEvent event = service.handle(command);\n        System.out.println("Created: " + event.getCustomerId());\n        \n        // READ FLOW: Query → Service → Repository → Domain object\n        GetCustomerQuery query = new GetCustomerQuery("1");\n        Customer customer = service.handle(query);\n        System.out.println("Found: " + customer.getName());\n    }\n}',
    },
    {
      description: "In-memory repository implementation (infrastructure layer)",
      language: "java",
      code: "// INFRASTRUCTURE LAYER - concrete implementation\npublic class InMemoryCustomerRepository implements CustomerRepository {\n    private final Map<String, Customer> store = new HashMap<>();\n    \n    @Override\n    public Customer save(Customer customer) {\n        store.put(customer.getId(), customer);\n        return customer;\n    }\n    \n    @Override\n    public Optional<Customer> findById(String id) {\n        return Optional.ofNullable(store.get(id));\n    }\n    \n    @Override\n    public List<Customer> findAll() {\n        return new ArrayList<>(store.values());\n    }\n    \n    @Override\n    public void deleteById(String id) {\n        store.remove(id);\n    }\n    \n    @Override\n    public boolean existsById(String id) {\n        return store.containsKey(id);\n    }\n}",
    },
    {
      description: "DDD layer responsibilities with Spring Boot annotations (full example)",
      language: "java",
      code: '@RestController                    // CONTROLLER LAYER - handles HTTP\n@RequestMapping("/api/orders")\npublic class OrderController {\n    private final OrderService service;  // depends on interface, not implementation\n    \n    public OrderController(OrderService service) {  // constructor injection\n        this.service = service;\n    }\n    \n    @PostMapping\n    public ResponseEntity<OrderResponse> create(@RequestBody CreateOrderRequest request) {\n        // Controller is THIN - just parse HTTP and delegate\n        CreateOrderCommand command = new CreateOrderCommand(request.getCustomerId(), request.getItems());\n        OrderCreatedEvent event = service.createOrder(command);\n        return ResponseEntity.ok(new OrderResponse(event.getOrderId()));\n    }\n    \n    @GetMapping("/{id}")\n    public ResponseEntity<Order> get(@PathVariable String id) {\n        GetOrderQuery query = new GetOrderQuery(id);\n        Order order = service.findOrder(query);\n        return ResponseEntity.ok(order);\n    }\n}\n\n@Service                             // APPLICATION LAYER - coordinates\npublic class OrderService {\n    private final OrderRepository repository;\n    private final OrderFactory factory;\n    \n    public OrderService(OrderRepository repository, OrderFactory factory) {\n        this.repository = repository;\n        this.factory = factory;\n    }\n    \n    public OrderCreatedEvent createOrder(CreateOrderCommand command) {\n        // Service COORDINATES - no business logic here\n        Order order = factory.createOrder(command);  // factory validates\n        repository.save(order);                       // persist\n        return new OrderCreatedEvent(order.getId());  // return event\n    }\n    \n    public Order findOrder(GetOrderQuery query) {\n        // Query flow - just retrieve\n        return repository.findById(query.getId())\n            .orElseThrow(() -> new OrderNotFoundException(query.getId()));\n    }\n}\n\n// DOMAIN LAYER - pure business rules, no annotations\npublic class Order {\n    private final String id;          // identity\n    private final CustomerId customerId;\n    private Money total;              // value object\n    private OrderStatus status;\n    \n    public Order(String id, CustomerId customerId) {\n        this.id = id;\n        this.customerId = customerId;\n        this.status = OrderStatus.PENDING;\n        this.total = new Money(0);\n    }\n    \n    // BUSINESS RULE: Order can only be completed if total > 0\n    public void complete() {\n        if (total.getAmount() <= 0) {\n            throw new IllegalStateException("Cannot complete order with zero total");\n        }\n        this.status = OrderStatus.COMPLETED;\n    }\n    \n    // BUSINESS RULE: Discount cannot exceed 50%\n    public void applyDiscount(double percentage) {\n        if (percentage < 0 || percentage > 50) {\n            throw new IllegalArgumentException("Discount must be between 0 and 50");\n        }\n        this.total = this.total.multiply(1 - percentage / 100);\n    }\n}\n\n@Repository                          // INFRASTRUCTURE - persistence\npublic interface OrderRepository extends JpaRepository<OrderJpa, String> {\n    // Spring Data JPA automatically implements this interface\n    List<OrderJpa> findByCustomerId(String customerId);\n}',
    },
  ],

  architectureDiagram: {
    description: "DDD Flow for Write Operation (Complete)",
    diagram:
      "HTTP Request → Controller (parses) → Command (carries data) → Service (coordinates) → Factory (validates) → Domain (business rules) → Repository (persists) → Event (records) → HTTP Response",
  },

  exercises: [
    {
      q: "Draw the DDD flow for an 'add item to cart' operation. Label each component (Command, Service, Factory/Domain, Repository, Event).",
      a: [
        "AddItemCommand (carries cartId, productId, quantity, price)",
        "↓",
        "CartCommandHandler / CartService (receives command, loads cart)",
        "↓",
        "Cart.addItem() or Cart.increaseQuantity() (domain logic)",
        "↓",
        "CartRepository.save(updatedCart) (persists change)",
        "↓",
        "ItemAddedEvent (confirms action completed)",
      ],
    },
    {
      q: "For each responsibility below, name the correct DDD layer: (a) Validating that money cannot be negative, (b) Parsing JSON from an HTTP request, (c) Saving a customer to a MySQL database, (d) Deciding whether to create an online order or in-store order.",
      a: [
        "(a) Domain layer — validation is a business rule",
        "(b) Controller layer (or entry point) — HTTP concerns belong at the edge",
        "(c) Infrastructure layer — database implementation details",
        "(d) Application layer (service or factory) — coordination and decision logic, not core business rule",
      ],
    },
    {
      q: "Why should the domain layer have no dependencies on Spring Boot annotations or database code? What problem does this solve?",
      a: [
        "The domain layer should be PURE business logic",
        "Spring annotations (@Entity, @Table) couple domain to a specific framework",
        "Database code in domain makes testing harder (requires database setup)",
        "Without dependencies, domain can be tested with plain JUnit assertions",
        "The same domain works with in-memory repositories (testing) and real databases (production)",
        "This follows the Dependency Inversion Principle — domain defines interfaces, infrastructure implements them",
      ],
    },
    {
      q: "Explain the difference between the flow for a write operation (creating an order) and a read operation (getting an order). Why do reads skip the factory?",
      a: [
        "Write flow: Command → Service → Factory → Domain → Repository → Event",
        "Read flow: Query → Service → Repository → Domain object → Result",
        "Reads skip factories because the object already exists in the repository",
        "Factories are for CREATION — validating input, generating IDs, ensuring valid state",
        "When reading, the object already passed validation when it was created",
        "Reads also skip event generation because no change occurred",
      ],
    },
  ],
};
