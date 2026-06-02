// chapter4-infrastructure-spring.js

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
      description: "Spring Boot JPA repository and entity",
      language: "java",
      code: '// Domain repository interface\npublic interface OrderRepository extends JpaRepository<Order, String> {\n    List<Order> findByCustomerNameContaining(String name); // custom query method\n}\n\n// Domain entity (with JPA annotations - some argue belongs in infrastructure)\n@Entity\n@Table(name = "orders")\npublic class Order {\n    @Id\n    private String id;\n    \n    @Embedded\n    private CustomerName customerName;\n    \n    private Money amount;\n    \n    // no-args constructor, getters, setters\n}\n\n// Service using repository\n@Service\npublic class OrderService {\n    private final OrderRepository repository;\n    \n    public OrderService(OrderRepository repository) {\n        this.repository = repository;\n    }\n    \n    public Order create(Order order) {\n        return repository.save(order);\n    }\n}',
    },
    {
      description: "JPA Inheritance mapping (Order - OnlineOrder/InStoreOrder)",
      language: "java",
      code: '@Entity\n@Table(name = "orders")\n@Inheritance(strategy = InheritanceType.JOINED)\n@DiscriminatorColumn(name = "order_type")\npublic abstract class Order {\n    @Id\n    private String orderId;\n    private Date date;\n    private String status;\n    \n    @ManyToOne\n    @JoinColumn(name = "customer_id")\n    private Customer customer;\n    \n    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)\n    private List<OrderItem> items = new ArrayList<>();\n    // ... getters, setters, business methods\n}\n\n@Entity\n@DiscriminatorValue("online")\npublic class OnlineOrder extends Order {\n    private String deliveryAddress;\n    private String shippingCode;\n    // ... online-specific fields\n}\n\n@Entity\n@DiscriminatorValue("instore")\npublic class InStoreOrder extends Order {\n    private double immediatePayment;\n    private String cashierName;\n    // ... in-store-specific fields\n}',
    },
    {
      description: "Factory with Builder for JPA entities",
      language: "java",
      code: 'public class OrderFactory {\n    \n    public static OnlineOrder createOnlineOrder(\n            String deliveryAddress,\n            String shippingCode\n    ) {\n        // VALIDATION before creation\n        if (deliveryAddress == null || deliveryAddress.isEmpty()) {\n            return null;\n        }\n        if (shippingCode == null || shippingCode.isEmpty()) {\n            return null;\n        }\n        \n        // BUILDER creates properly constructed object\n        return new OnlineOrder.Builder()\n                .orderId(generateOrderId())\n                .date(new Date())\n                .status("CREATED")\n                .deliveryAddress(deliveryAddress)\n                .shippingCode(shippingCode)\n                .build();\n    }\n    \n    public static InStoreOrder createInStoreOrder(\n            double immediatePayment,\n            String cashierName\n    ) {\n        if (immediatePayment <= 0) {\n            throw new IllegalArgumentException("Payment must be greater than zero");\n        }\n        \n        return new InStoreOrder.Builder()\n                .orderId(generateOrderId())\n                .date(new Date())\n                .status("PAID")\n                .immediatePayment(immediatePayment)\n                .cashierName(cashierName)\n                .build();\n    }\n    \n    private static String generateOrderId() {\n        return "ORD-" + UUID.randomUUID().toString();\n    }\n}',
    },
    {
      description: "@Embedded value object in JPA entity",
      language: "java",
      code: '@Embeddable\npublic class CustomerName {\n    private String firstName;\n    private String lastName;\n    \n    // constructor, getters, validation\n}\n\n@Entity\n@Table(name = "orders")\npublic class Order {\n    @Id\n    private String orderId;\n    \n    @Embedded  // Columns stored in orders table\n    private CustomerName customerName;\n    \n    private double amount;\n    // ...\n}\n\n// Database result:\n// orders table has columns: order_id, first_name, last_name, amount',
    },
    {
      description: "Builder pattern with validation in build() method",
      language: "java",
      code: "public static class Builder {\n    private String orderId;\n    private CustomerName customerName;\n    private double amount;\n\n    public Builder setOrderId(String orderId) {\n        this.orderId = orderId;\n        return this;\n    }\n\n    public Builder setCustomerName(CustomerName customerName) {\n        this.customerName = customerName;\n        return this;\n    }\n\n    public Builder setAmount(double amount) {\n        this.amount = amount;\n        return this;\n    }\n\n    public Order build() {\n        // VALIDATION HAPPENS HERE - prevents invalid object\n        if (orderId == null || orderId.isEmpty()) return null;\n        if (customerName == null) return null;\n        if (amount <= 0) return null;\n        \n        return new Order(this);\n    }\n}",
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
        example: "@Embedded\nprivate CustomerName name;",
      },
      {
        annotation: "@OneToMany/@ManyToOne",
        purpose: "Defines entity relationships",
        example: '@OneToMany(mappedBy = "order")\nList<OrderItem> items',
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
        "public class InMemoryCustomerRepository implements CustomerRepository {\n    private final Map<String, Customer> store = new HashMap<>();\n\n    @Override\n    public Customer save(Customer customer) {\n        store.put(customer.getId(), customer);\n        return customer;\n    }\n\n    @Override\n    public Optional<Customer> findById(String id) {\n        return Optional.ofNullable(store.get(id));\n    }\n\n    @Override\n    public List<Customer> findAll() {\n        return new ArrayList<>(store.values());\n    }\n\n    @Override\n    public void deleteById(String id) {\n        store.remove(id);\n    }\n}",
      ],
    },
  ],
};
