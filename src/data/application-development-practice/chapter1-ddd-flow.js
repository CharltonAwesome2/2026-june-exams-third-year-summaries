// chapter1-ddd-flow.js

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
      description: "Plain Java DDD flow for customer creation",
      language: "java",
      code: 'public class Main {\n    public static void main(String[] args) {\n        CustomerRepository repository = new InMemoryCustomerRepository();\n        CustomerService service = new CustomerService(repository);\n        \n        CreateCustomerCommand command = new CreateCustomerCommand("1", "Lelethu", "lelethu@cput.ac.za");\n        CustomerCreatedEvent event = service.handle(command);\n        \n        GetCustomerQuery query = new GetCustomerQuery("1");\n        Customer customer = service.handle(query);\n    }\n}',
    },
    {
      description: "Complete DDD flow from Main entry point to repository",
      language: "java",
      code: 'public class Main {\n    public static void main(String[] args) {\n        CartRepository repository = new InMemoryCartRepository();\n        CartService service = new CartService(repository);\n        CartCommandHandler handler = new CartCommandHandler(service);\n        \n        AddItemCommand command = new AddItemCommand("cart-123", "prod-456", 2, 25.99);\n        ItemAddedEvent event = handler.handle(command);\n        \n        GetCartTotalQuery query = new GetCartTotalQuery("cart-123");\n        CartQueryHandler queryHandler = new CartQueryHandler(service);\n        double total = queryHandler.handle(query);\n        \n        System.out.println("Total: $" + total);\n    }\n}',
    },
    {
      description: "DDD layer responsibilities with Spring Boot annotations",
      language: "java",
      code: '@RestController\n@RequestMapping("/api/orders")\npublic class OrderController {\n    private final OrderService service;\n    \n    @PostMapping\n    public Order create(@RequestBody OrderRequestDTO request) {\n        return service.create(request);\n    }\n}\n\n@Service\npublic class OrderService {\n    private final OrderRepository repository;\n    \n    public Order create(OrderRequestDTO request) {\n        Order order = OrderFactory.createOrder(request);\n        return repository.save(order);\n    }\n}\n\n@Entity\npublic class Order {\n    @Id private String id;\n    private double amount;\n    \n    public void applyDiscount(double percentage) {\n        if (percentage < 0 || percentage > 100) {\n            throw new IllegalArgumentException("Invalid discount");\n        }\n        this.amount = this.amount * (1 - percentage / 100);\n    }\n}\n\n@Repository\npublic interface OrderRepository extends JpaRepository<Order, String> {\n}',
    },
  ],

  architectureDiagram: {
    description: "DDD Flow for Write Operation",
    diagram:
      "CreateCustomerCommand\n        |\n        v\nCustomerService\n        |\n        v\nCustomerFactory -> Customer -> CustomerRepository\n        |\n        v\nCustomerCreatedEvent",
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
