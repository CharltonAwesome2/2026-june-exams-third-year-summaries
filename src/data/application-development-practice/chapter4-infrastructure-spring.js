// chapter4-infrastructure-spring.js (REVISED - added domain/JPA separation)

export const dddInfrastructureSpring = {
  id: "ddd-infrastructure-spring",
  title: "Chapter 4: Infrastructure & Spring Boot",
  subtitle: "Repositories, JPA, Annotations, and Dependency Injection",
  badge: "Infrastructure",

  contextAndPrerequisites: [
    "Complete Chapters 1-3 for context",
    "Basic understanding of databases helpful but not required",
  ],

  realWorldAnalogy:
    "The infrastructure layer is like a building's plumbing and electrical systems. The kitchen (domain) doesn't care whether water comes from a well or city pipes — it just turns on the faucet. The repository interface is the faucet; the implementation (in-memory vs MySQL) is the pipe. Spring Boot is like a smart home system that automatically connects all the faucets to the right pipes.",

  commonMisconceptions: [
    "JPA entities are domain entities → TRUTH: JPA entities are INFRASTRUCTURE; they should be separate from pure domain objects",
    "Spring annotations can be used in domain layer → TRUTH: Domain layer should have NO Spring dependencies (pure Java only)",
    "Repositories must use a database → TRUTH: Repositories can be in-memory for testing",
    "DDD requires complex infrastructure → TRUTH: In-memory repositories work perfectly for plain Java DDD",
  ],

  examTips: [
    "@SpringBootApplication → enables auto-configuration, marks main class",
    "@RestController → handles HTTP requests, returns JSON responses",
    "@Service → marks service as Spring bean (Spring manages it)",
    "@Entity/@Table → maps class to database table",
    "@Id → marks primary key",
    "@Embedded/@Embeddable → embeds value objects in entities",
    "@OneToMany/@ManyToOne → defines relationships",
    "JpaRepository<T,ID> → provides CRUD methods without SQL",
  ],

  keyTakeaway:
    "Infrastructure provides technical implementations. Repository interfaces in domain are implemented by in-memory (testing) or Spring Data JPA (production). Spring Boot annotations (@Service, @Repository, @RestController) tell Spring to manage objects as beans. The domain layer has NO Spring dependencies — it stays pure. This separation lets you swap implementations without changing business rules.",

  furtherConnections: [
    "Links to Chapter 1: Infrastructure implements repository interfaces defined in domain",
    "Links to Chapter 2: Domain entities should NOT have JPA annotations",
    "Links to Chapter 3: Services use repository interfaces, not implementations",
  ],

  objectives: [
    "Implement repository interfaces in domain and concrete implementations in infrastructure",
    "Use Spring Data JPA repositories to reduce boilerplate",
    "Apply common Spring annotations correctly (Controller, Service, Repository, Entity)",
    "Understand why domain layer should have NO framework dependencies",
    "Differentiate between in-memory (testing) and JPA (production) repositories",
  ],

  keyConcepts: [
    "Repository Interface (Domain): Defines save, findById, findAll, delete methods. No implementation — just contract.",
    "In-Memory Repository (Infrastructure): Uses HashMap to store objects. Perfect for plain Java projects and unit tests. No database required.",
    "Spring Data JPA Repository (Infrastructure): Extends JpaRepository<T, ID>. Provides save(), findById(), findAll(), deleteById() automatically. No SQL writing required.",
    "@SpringBootApplication: Marks main class, enables auto-configuration, component scanning. Must be at root of package structure.",
    "@RestController vs @Controller: @RestController = @Controller + @ResponseBody (returns JSON directly, no view resolver).",
    "@Service: Marks class as service-layer bean. Spring creates single instance (singleton) and injects dependencies.",
    "@Repository: Marks class as repository bean (Spring translates persistence exceptions). Often not needed if extending JpaRepository.",
    "@Entity: Marks class as JPA entity (maps to database table). Requires @Id field and no-args constructor.",
    "@Embedded/@Embeddable: @Embeddable on value object class, @Embedded on field in entity. Stores value object columns in same table.",
    "@OneToMany/@ManyToOne: Defines relationships. mappedBy on the non-owning side. cascade = CascadeType.ALL propagates operations.",
    "@JoinColumn: Specifies foreign key column name. Use on @ManyToOne side.",
    "Why Domain Has No Spring Annotations: Domain layer should work in any environment (plain Java, Spring, Quarkus). Annotations couple domain to specific framework. Testing becomes harder.",
    "In-Memory Repository Implementation: private final Map<String, Customer> store = new HashMap<>(); save() does store.put(id, customer); findById() returns store.get(id).",
  ],

  content:
    "Infrastructure provides technical implementations of repository interfaces defined in the domain layer. In-memory repositories (using HashMap) are perfect for plain Java projects and unit tests. Spring Data JPA repositories extend JpaRepository and provide CRUD methods without writing SQL. Spring Boot annotations (@Service, @Repository, @RestController) tell Spring to manage objects as beans and inject dependencies automatically. The domain layer has NO Spring dependencies — it stays pure Java, making it testable and framework-independent.",

  additionalKeyPoints: [
    "Plain Java Repository Flow: Define interface in domain (CustomerRepository). Implement in infrastructure (InMemoryCustomerRepository). Main manually creates: new InMemoryCustomerRepository(), new CustomerService(repository).",
    "Spring Boot Repository Flow: Domain defines interface extends JpaRepository. Spring creates implementation automatically. Service injects interface with @Autowired or constructor injection.",
    "Constructor Injection (Recommended): public CartService(CartRepository repository) { this.repository = repository; }. No @Autowired needed — Spring auto-wires.",
    "JpaRepository Methods Provided: save(entity), findById(id), findAll(), deleteById(id), existsById(id), count(). No implementation required.",
    "@Embeddable Example:\n@Embeddable\npublic class CustomerName {\n    private String firstName;\n    private String lastName;\n}\n\n@Entity\npublic class Order {\n    @Embedded\n    private CustomerName customerName;\n}",
    '@OneToMany Example:\n@OneToMany(mappedBy = "order", cascade = CascadeType.ALL)\nprivate List<OrderItem> items;\n\n@ManyToOne\n@JoinColumn(name = "order_id")\nprivate Order order;',
    "Inheritance Mapping: @Inheritance(strategy = InheritanceType.JOINED) with @DiscriminatorColumn on parent, @DiscriminatorValue on child. Maps subclasses to separate tables.",
  ],

  codeExamples: [
    {
      description: "PURE DOMAIN ENTITY (no annotations, framework-independent)",
      language: "java",
      code: '// DOMAIN LAYER - Pure Java, no Spring/JPA annotations\n// This can be used in ANY Java project (plain Java, Spring, Quarkus, etc.)\npublic class Order {\n    private final OrderId id;\n    private CustomerName customerName;\n    private Money total;\n    private OrderStatus status;\n    private final List<OrderLineItem> items;\n    \n    public Order(OrderId id, CustomerName customerName) {\n        this.id = id;\n        this.customerName = customerName;\n        this.total = new Money(0);\n        this.status = OrderStatus.PENDING;\n        this.items = new ArrayList<>();\n    }\n    \n    // Business methods only - no persistence concerns\n    public void addItem(ProductId productId, Money price, int quantity) {\n        if (status != OrderStatus.PENDING) {\n            throw new IllegalStateException("Cannot add items to non-pending order");\n        }\n        items.add(new OrderLineItem(productId, price, quantity));\n        recalculateTotal();\n    }\n    \n    private void recalculateTotal() {\n        Money sum = new Money(0);\n        for (OrderLineItem item : items) {\n            sum = sum.add(item.getSubtotal());\n        }\n        this.total = sum;\n    }\n    \n    public void complete() {\n        if (total.getAmount() <= 0) {\n            throw new IllegalStateException("Cannot complete order with zero total");\n        }\n        this.status = OrderStatus.COMPLETED;\n    }\n    \n    // Getters only\n    public OrderId getId() { return id; }\n    public CustomerName getCustomerName() { return customerName; }\n    public Money getTotal() { return total; }\n    public OrderStatus getStatus() { return status; }\n    public List<OrderLineItem> getItems() { return Collections.unmodifiableList(items); }\n}',
    },
    {
      description: "JPA ENTITY (infrastructure layer - separate from domain)",
      language: "java",
      code: '// INFRASTRUCTURE LAYER - JPA entity for database mapping\n// This is SEPARATE from the domain Order class\n@Entity\n@Table(name = "orders")\npublic class OrderJpa {\n    @Id\n    private String id;\n    \n    @Column(name = "customer_first_name")\n    private String customerFirstName;\n    \n    @Column(name = "customer_last_name")\n    private String customerLastName;\n    \n    @Column(name = "total_amount")\n    private double totalAmount;\n    \n    @Column(name = "total_currency")\n    private String totalCurrency;\n    \n    @Enumerated(EnumType.STRING)\n    private OrderStatus status;\n    \n    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, fetch = FetchType.LAZY)\n    private List<OrderLineItemJpa> items = new ArrayList<>();\n    \n    // Required no-args constructor for JPA\n    protected OrderJpa() {}\n    \n    // Factory method to create from domain object\n    public static OrderJpa fromDomain(Order order) {\n        OrderJpa jpa = new OrderJpa();\n        jpa.id = order.getId().getValue();\n        jpa.customerFirstName = order.getCustomerName().getFirstName();\n        jpa.customerLastName = order.getCustomerName().getLastName();\n        jpa.totalAmount = order.getTotal().getAmount();\n        jpa.totalCurrency = order.getTotal().getCurrency();\n        jpa.status = order.getStatus();\n        // Map line items...\n        return jpa;\n    }\n    \n    // Convert back to domain object\n    public Order toDomain() {\n        CustomerName customerName = new CustomerName(customerFirstName, customerLastName);\n        OrderId orderId = new OrderId(id);\n        Order order = new Order(orderId, customerName);\n        // Reconstruct items, total, status...\n        return order;\n    }\n    \n    // getters/setters for JPA\n}',
    },
    {
      description: "Repository interface (domain layer) and Spring Data JPA implementation",
      language: "java",
      code: '// DOMAIN LAYER - Repository interface (pure, no Spring)\npublic interface OrderRepository {\n    Order save(Order order);\n    Optional<Order> findById(OrderId id);\n    List<Order> findAll();\n    void deleteById(OrderId id);\n    boolean existsById(OrderId id);\n}\n\n// INFRASTRUCTURE LAYER - Spring Data JPA implementation\n// This extends JpaRepository (Spring interface) AND implements domain interface\n@Repository\npublic interface SpringDataOrderRepository \n        extends JpaRepository<OrderJpa, String>, OrderRepository {\n    \n    // Custom query methods (Spring Data JPA parses method names)\n    List<OrderJpa> findByStatus(OrderStatus status);\n    List<OrderJpa> findByCustomerLastName(String lastName);\n    Optional<OrderJpa> findByCustomerFirstNameAndCustomerLastName(String firstName, String lastName);\n    \n    // Native query example\n    @Query(value = "SELECT * FROM orders WHERE total_amount > :amount\", nativeQuery = true)\n    List<OrderJpa> findOrdersAboveAmount(@Param(\"amount\") double amount);\n    \n    // Implementation of domain interface methods (converts between domain and JPA)\n    @Override\n    default Order save(Order order) {\n        OrderJpa jpa = OrderJpa.fromDomain(order);\n        OrderJpa saved = save(jpa);  // calls JpaRepository.save()\n        return saved.toDomain();\n    }\n    \n    @Override\n    default Optional<Order> findById(OrderId id) {\n        return findById(id.getValue())\n            .map(OrderJpa::toDomain);\n    }\n    \n    @Override\n    default List<Order> findAll() {\n        return findAll().stream()\n            .map(OrderJpa::toDomain)\n            .collect(Collectors.toList());\n    }\n    \n    @Override\n    default void deleteById(OrderId id) {\n        deleteById(id.getValue());\n    }\n    \n    @Override\n    default boolean existsById(OrderId id) {\n        return existsById(id.getValue());\n    }\n}',
    },
    {
      description: "Spring Boot application with dependency injection (complete)",
      language: "java",
      code: '@SpringBootApplication\npublic class ECommerceApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(ECommerceApplication.class, args);\n    }\n}\n\n// CONTROLLER LAYER\n@RestController\n@RequestMapping("/api/orders")\npublic class OrderController {\n    private final OrderService orderService;\n    \n    // Constructor injection (Spring auto-wires)\n    public OrderController(OrderService orderService) {\n        this.orderService = orderService;\n    }\n    \n    @PostMapping\n    public ResponseEntity<OrderResponse> createOrder(@RequestBody CreateOrderRequest request) {\n        CreateOrderCommand command = new CreateOrderCommand(\n            request.getCustomerName(),\n            request.getItems()\n        );\n        OrderCreatedEvent event = orderService.createOrder(command);\n        return ResponseEntity.ok(new OrderResponse(event.getOrderId()));\n    }\n    \n    @GetMapping(\"/{id}\")\n    public ResponseEntity<Order> getOrder(@PathVariable String id) {\n        Order order = orderService.findOrder(new OrderId(id));\n        return ResponseEntity.ok(order);\n    }\n}\n\n// APPLICATION/SERVICE LAYER\n@Service\npublic class OrderService {\n    private final SpringDataOrderRepository orderRepository;\n    private final OrderFactory orderFactory;\n    \n    public OrderService(SpringDataOrderRepository orderRepository, OrderFactory orderFactory) {\n        this.orderRepository = orderRepository;\n        this.orderFactory = orderFactory;\n    }\n    \n    @Transactional  // Spring manages database transaction\n    public OrderCreatedEvent createOrder(CreateOrderCommand command) {\n        // Factory creates validated domain object\n        Order order = orderFactory.createOrder(command);\n        \n        // Repository saves (auto-converts to JPA entity)\n        orderRepository.save(order);\n        \n        return new OrderCreatedEvent(order.getId().getValue());\n    }\n    \n    @Transactional(readOnly = true)\n    public Order findOrder(OrderId id) {\n        return orderRepository.findById(id)\n            .orElseThrow(() -> new OrderNotFoundException(id));\n    }\n}\n\n// DOMAIN FACTORY\n@Component  // Spring manages factory as bean\npublic class OrderFactory {\n    private static final AtomicLong idGenerator = new AtomicLong(1);\n    \n    public Order createOrder(CreateOrderCommand command) {\n        // Validation\n        if (command.getItems().isEmpty()) {\n            throw new IllegalArgumentException(\"Order must have at least one item\");\n        }\n        \n        // Generate ID\n        OrderId orderId = new OrderId(\"ORD-\" + idGenerator.getAndIncrement());\n        CustomerName customerName = new CustomerName(command.getCustomerName());\n        \n        Order order = new Order(orderId, customerName);\n        \n        for (OrderItemDTO item : command.getItems()) {\n            order.addItem(\n                new ProductId(item.getProductId()),\n                new Money(item.getPrice()),\n                item.getQuantity()\n            );\n        }\n        \n        return order;\n    }\n}\n\n// DTO for request (no business logic)\npublic class CreateOrderRequest {\n    private String customerName;\n    private List<OrderItemDTO> items;\n    // getters/setters\n}',
    },
    {
      description: "@Embedded value object in JPA entity (mapping Money as embeddable)",
      language: "java",
      code: '// Value object designed for JPA embedding\n@Embeddable\npublic class MoneyJpa {\n    @Column(name = "amount")\n    private double amount;\n    \n    @Column(name = "currency")\n    private String currency;\n    \n    protected MoneyJpa() {}  // for JPA\n    \n    public MoneyJpa(Money money) {\n        this.amount = money.getAmount();\n        this.currency = money.getCurrency();\n    }\n    \n    public Money toDomain() {\n        return new Money(amount, currency);\n    }\n    \n    // getters/setters\n}\n\n// Using the embeddable in JPA entity\n@Entity\n@Table(name = "products")\npublic class ProductJpa {\n    @Id\n    private String id;\n    \n    private String name;\n    \n    @Embedded\n    private MoneyJpa price;  // Embedded value object\n    \n    @Column(name = "stock_quantity")\n    private int stockQuantity;\n    \n    // ...\n}',
    },
    {
      description: "In-memory repository implementation (for testing and plain Java)",
      language: "java",
      code: '// INFRASTRUCTURE LAYER - In-memory implementation\n// No database required - perfect for testing\npublic class InMemoryOrderRepository implements OrderRepository {\n    private final Map<String, Order> store = new ConcurrentHashMap<>();\n    \n    @Override\n    public Order save(Order order) {\n        store.put(order.getId().getValue(), order);\n        return order;\n    }\n    \n    @Override\n    public Optional<Order> findById(OrderId id) {\n        return Optional.ofNullable(store.get(id.getValue()));\n    }\n    \n    @Override\n    public List<Order> findAll() {\n        return new ArrayList<>(store.values());\n    }\n    \n    @Override\n    public void deleteById(OrderId id) {\n        store.remove(id.getValue());\n    }\n    \n    @Override\n    public boolean existsById(OrderId id) {\n        return store.containsKey(id.getValue());\n    }\n    \n    // Helper methods for testing\n    public void clear() {\n        store.clear();\n    }\n    \n    public int size() {\n        return store.size();\n    }\n}\n\n// Usage in plain Java (no Spring needed)\npublic class Main {\n    public static void main(String[] args) {\n        OrderRepository repository = new InMemoryOrderRepository();\n        OrderService service = new OrderService(repository, new OrderFactory());\n        \n        CreateOrderCommand command = new CreateOrderCommand(\"John Doe\", List.of(...));\n        OrderCreatedEvent event = service.createOrder(command);\n        \n        System.out.println(\"Created order: \" + event.getOrderId());\n    }\n}',
    },
  ],

  annotationTable: {
    title: "Common Spring Boot Annotations",
    subtitle: "Purpose and Example Usage",
    badge: "Infrastructure",
    annotations: [
      {
        annotation: "@SpringBootApplication",
        purpose: "Marks main class, enables auto-configuration",
        example: "@SpringBootApplication\npublic class Application",
      },
      {
        annotation: "@RestController",
        purpose: "Handles HTTP requests, returns JSON",
        example: '@RestController\n@RequestMapping("/api/orders")',
      },
      {
        annotation: "@Service",
        purpose: "Marks service-layer Spring bean",
        example: "@Service\npublic class OrderService",
      },
      {
        annotation: "@Repository",
        purpose: "Marks repository bean (optional with JpaRepository)",
        example: "@Repository\npublic interface OrderRepository",
      },
      {
        annotation: "@Entity",
        purpose: "Marks JPA entity (database table)",
        example: '@Entity\n@Table(name = "orders")',
      },
      { annotation: "@Id", purpose: "Marks primary key field", example: "@Id\nprivate String id;" },
      {
        annotation: "@Embedded/@Embeddable",
        purpose: "Embeds value objects in entities",
        example: "@Embedded\nprivate MoneyJpa price;",
      },
      {
        annotation: "@OneToMany/@ManyToOne",
        purpose: "Defines entity relationships",
        example: '@OneToMany(mappedBy = "order")\nList<OrderItemJpa> items',
      },
      { annotation: "@JoinColumn", purpose: "Specifies foreign key column", example: '@JoinColumn(name = "order_id")' },
      {
        annotation: "@PostMapping/@GetMapping",
        purpose: "Maps HTTP methods to controller methods",
        example: "@PostMapping\npublic Order create(@RequestBody Order order)",
      },
      {
        annotation: "@RequestBody",
        purpose: "Binds HTTP request body to Java object",
        example: "public Order create(@RequestBody Order order)",
      },
      {
        annotation: "@PathVariable",
        purpose: "Binds URL path variable to parameter",
        example: '@GetMapping("/{id}")\npublic Order get(@PathVariable String id)',
      },
      {
        annotation: "@Transactional",
        purpose: "Manages database transactions",
        example: "@Transactional\npublic Order createOrder(Command cmd)",
      },
    ],
  },

  exercises: [
    {
      q: "Why should the domain layer have NO Spring annotations? What problems would @Entity in the domain cause?",
      a: [
        "Domain layer should be framework-independent — works in plain Java, Spring, or any other environment",
        "@Entity in domain couples business logic to JPA (specific database mapping)",
        "Testing becomes harder — need to mock JPA or start Spring context",
        "Domain can't be used in plain Java projects without Spring dependencies",
        "Separation of concerns — domain is about BUSINESS, not persistence",
        "Best practice: Keep JPA annotations in separate JPA entity classes, map between domain and JPA entities",
      ],
    },
    {
      q: "Compare in-memory repository vs Spring Data JPA repository. When would you use each?",
      a: [
        "In-memory repository:",
        "  - Uses HashMap storage",
        "  - No database required",
        "  - Fast for unit tests",
        "  - Data lost on restart",
        "  - Use for: plain Java projects, unit tests, prototyping",
        "Spring Data JPA repository:",
        "  - Stores data in database (MySQL, PostgreSQL)",
        "  - Data persists across restarts",
        "  - Supports complex queries",
        "  - Requires database setup",
        "  - Use for: production applications, multi-user systems",
      ],
    },
    {
      q: "What does @SpringBootApplication do? Why is it important that it's at the root of the package structure?",
      a: [
        "@SpringBootApplication combines three annotations:",
        "  - @Configuration (marks class as configuration source)",
        "  - @EnableAutoConfiguration (Spring guesses configuration based on dependencies)",
        "  - @ComponentScan (scans subpackages for beans)",
        "Root package location: Spring scans ALL subpackages of the class with @SpringBootApplication",
        "If not at root, beans in sibling packages won't be found",
        "Standard structure: com.example.app (root) → controller/, service/, repository/ subpackages",
      ],
    },
    {
      q: "Write the code for an in-memory CustomerRepository implementation. Include save, findById, findAll, and deleteById methods.",
      a: [
        {
          type: "code",
          language: "java",
          code: `public class InMemoryCustomerRepository implements CustomerRepository {\n    private final Map<String, Customer> store = new HashMap<>();\n\n    @Override\n    public Customer save(Customer customer) {\n        store.put(customer.getId(), customer);\n        return customer;\n    }\n\n    @Override\n    public Optional<Customer> findById(String id) {\n        return Optional.ofNullable(store.get(id));\n    }\n\n    @Override\n    public List<Customer> findAll() {\n        return new ArrayList<>(store.values());\n    }\n\n    @Override\n    public void deleteById(String id) {\n        store.remove(id);\n    }\n}`,
        },
      ],
    },
  ],
};
