// chapter5-testing.js

export const dddTesting = {
  id: "ddd-testing",
  title: "Chapter 5: Testing DDD Applications",
  subtitle: "Domain Tests, Service Tests, Controller Tests, and Test Patterns",
  badge: "Testing",

  contextAndPrerequisites: ["Complete Chapters 1-4", "Basic understanding of JUnit and assertions"],

  realWorldAnalogy:
    "Testing a DDD application is like quality-checking a car at different stages. You test the engine alone (domain test — isolated business rules). You test the assembly line (service test — components working together with mock parts). You test the steering wheel interface (controller test — input/output without engine running). You drive the whole car (integration test — everything together). Each test type catches different problems.",

  commonMisconceptions: [
    "Only integration tests matter → TRUTH: Domain tests are fastest and catch business rule bugs early",
    "You don't need to test domain objects separately → TRUTH: Domain objects contain business rules and MUST be tested in isolation",
    "Mock everything in service tests → TRUTH: Mock repositories, but use real domain objects (don't mock domain)",
    "Controller tests need the whole Spring context → TRUTH: Use MockMvc and mock services for fast controller tests",
  ],

  examTips: [
    "Domain Test: Tests business rules inside domain objects (Money, Cart, Product). No mocks, just assertions.",
    "Factory Test: Tests object creation and validation (throws exception for invalid input).",
    "Service Test: Tests service orchestration with mocked repository. Use @Mock, @InjectMocks, when(), verify().",
    "Controller Test: Tests HTTP layer with MockMvc. Mock services, test endpoints and responses.",
    "Repository Test: Tests save/find behavior with in-memory repository.",
    "Startup Test: Simple contextLoads test verifying Spring context can start.",
  ],

  keyTakeaway:
    "Test each layer in isolation. Domain tests validate business rules with plain assertions (fast, no mocks). Service tests mock repositories and verify orchestration. Controller tests mock services and verify HTTP handling. Repository tests verify persistence (in-memory for unit tests, database for integration). The test pyramid: many domain tests (fast), fewer service tests, even fewer controller tests.",

  furtherConnections: [
    "Links to Chapter 2: Domain tests validate value objects and entities",
    "Links to Chapter 3: Service tests verify handlers and service orchestration",
    "Links to Chapter 4: Controller tests verify endpoints and HTTP responses",
  ],

  objectives: [
    "Write domain tests to validate business rules in isolation",
    "Write service tests using Mockito (mock repositories, verify interactions)",
    "Write controller tests using MockMvc (test HTTP layer without server)",
    "Understand when to use in-memory repositories vs mocking",
    "Explain the purpose of each test type (domain, service, controller, repository, startup)",
  ],

  keyConcepts: [
    "Domain Test: Tests business rules inside domain objects. No mocks, no Spring context. Pure JUnit assertions. Example: verify Money rejects negative amounts, Cart adds items correctly.",
    "Factory Test: Tests object creation and validation. Verify factory creates valid objects with correct fields. Verify factory throws exceptions for invalid input.",
    "Service Test: Tests service orchestration with mocked dependencies. Use @Mock for repository, @InjectMocks for service. Use when() to stub repository behavior. Use verify() to check repository calls.",
    "Controller Test: Tests HTTP layer without starting server. Use @WebMvcTest for slice testing. Use MockMvc to perform requests. Mock services, verify responses and status codes.",
    "@BeforeEach Setup: Creates fresh repository, service, and domain objects before each test. Ensures tests don't interfere with each other.",
    "Mockito Pattern: @ExtendWith(MockitoExtension.class) enables Mockito. @Mock creates fake objects. @InjectMocks injects mocks into the tested object.",
    "verify() Usage: verify(repository).save(cart) — confirms save was called. verify(repository, times(2)).findById(id) — confirms called twice.",
    "In-Memory Repository Testing: Create real InMemoryCartRepository (not mock). Test actually saves and retrieves objects. Useful for repository unit tests.",
    "Startup Test: @SpringBootTest with empty test method. Verifies Spring context can load all beans successfully. Smoke test for configuration errors.",
  ],

  content:
    "Testing DDD applications requires testing each layer separately. Domain tests validate business rules with plain JUnit assertions — no mocks, no Spring, just fast isolated tests. Service tests mock repositories and verify that services correctly orchestrate domain objects and persistence. Controller tests use MockMvc to test HTTP endpoints without starting a server. Repository tests verify persistence behavior (in-memory for unit tests, database for integration). The test pyramid recommends many domain tests (fastest), fewer service tests, and even fewer controller tests.",

  additionalKeyPoints: [
    "@BeforeEach Pattern: void setUp() { repository = new InMemoryCartRepository(); service = new CartService(repository); cart = new Cart(); repository.save(cart); } — gives every test fresh state.",
    "Domain Test Example: @Test void moneyRejectsNegativeAmount() { assertThrows(IllegalArgumentException.class, () -> new Money(-10)); }",
    "Service Test Mock Setup: @Mock CartRepository repository; @InjectMocks CartService service; — mocks automatically injected.",
    'Service Test Stubbing: when(repository.findById("123")).thenReturn(Optional.of(cart)); — stubs repository to return cart.',
    "Service Test Verification: verify(repository).save(cart); — verifies service called repository.save().",
    "Controller Test Setup: @WebMvcTest(OrderController.class) — loads only web layer. @MockBean OrderService service — mocks service.",
    'Controller Test Request: mockMvc.perform(post("/api/orders").contentType(MediaType.APPLICATION_JSON).content(json)).andExpect(status().isOk());',
    "Test Naming Convention: methodName_condition_expectedBehavior. Example: addItem_whenCartExists_itemAdded().",
    "Test Assertions: assertEquals(expected, actual), assertTrue(condition), assertThrows(Exception.class, () -> method()).",
  ],

  codeExamples: [
    {
      description: "Domain test for Money value object",
      language: "java",
      code: "import org.junit.jupiter.api.Test;\nimport static org.junit.jupiter.api.Assertions.*;\n\npublic class MoneyTest {\n    @Test\n    void constructor_rejectsNegativeAmount() {\n        assertThrows(IllegalArgumentException.class, () -> new Money(-10));\n    }\n\n    @Test\n    void add_returnsNewMoneyWithSum() {\n        Money ten = new Money(10);\n        Money twenty = new Money(20);\n        Money thirty = ten.add(twenty);\n        assertEquals(30, thirty.getAmount());\n    }\n\n    @Test\n    void equals_worksBasedOnAmount() {\n        Money tenA = new Money(10);\n        Money tenB = new Money(10);\n        assertEquals(tenA, tenB);\n    }\n}",
    },
    {
      description: "Domain test for Money value object",
      language: "java",
      code: "import org.junit.jupiter.api.Test;\nimport static org.junit.jupiter.api.Assertions.*;\n\npublic class MoneyTest {\n    \n    @Test\n    void constructor_rejectsNegativeAmount() {\n        assertThrows(IllegalArgumentException.class, () -> new Money(-10));\n    }\n    \n    @Test\n    void add_returnsNewMoneyWithSum() {\n        Money ten = new Money(10);\n        Money twenty = new Money(20);\n        Money thirty = ten.add(twenty);\n        \n        assertEquals(30, thirty.getAmount());\n        // Original objects unchanged (immutability)\n        assertEquals(10, ten.getAmount());\n    }\n    \n    @Test\n    void equals_worksBasedOnAmount() {\n        Money tenA = new Money(10);\n        Money tenB = new Money(10);\n        Money twenty = new Money(20);\n        \n        assertEquals(tenA, tenB);  // Same amount = equal\n        assertNotEquals(tenA, twenty);\n    }\n}",
    },
    {
      description: "Service test with Mockito (mocking repository)",
      language: "java",
      code: '@ExtendWith(MockitoExtension.class)\npublic class CartServiceTest {\n    \n    @Mock\n    private CartRepository repository;\n    \n    @InjectMocks\n    private CartService service;\n    \n    @Test\n    void addItem_shouldSaveCartAfterAddingItem() {\n        // GIVEN\n        Cart cart = new Cart("cart-123");\n        when(repository.findById("cart-123")).thenReturn(cart);\n        \n        // WHEN\n        service.addItem("cart-123", "prod-456", 2, 25.99);\n        \n        // THEN - verify repository.save was called\n        verify(repository).save(cart);\n        \n        // Verify cart was modified\n        assertEquals(1, cart.getItems().size());\n    }\n    \n    @Test\n    void getTotal_shouldReturnAmountFromCart() {\n        Cart cart = new Cart("cart-123");\n        cart.addItem(new ProductId("prod-456"), 2, new Money(25.99));\n        when(repository.findById("cart-123")).thenReturn(cart);\n        \n        double total = service.getTotal("cart-123");\n        \n        assertEquals(51.98, total, 0.01);\n        verify(repository, never()).save(any());  // No save for reads\n    }\n}',
    },
    {
      description: "Controller test with MockMvc (Spring Boot)",
      language: "java",
      code: '@WebMvcTest(OrderController.class)\npublic class OrderControllerTest {\n    \n    @Autowired\n    private MockMvc mockMvc;\n    \n    @MockBean\n    private OrderService service;\n    \n    @Test\n    void createOrder_shouldReturnCreatedOrder() throws Exception {\n        Order order = new Order("ORD-123", new CustomerName("John", "Doe"), 250.00);\n        when(service.create(any(OrderRequestDTO.class))).thenReturn(order);\n        \n        String json = "{\\"customerName\\":\\"John Doe\\",\\"amount\\":250.00}";\n        \n        mockMvc.perform(post("/api/orders")\n                .contentType(MediaType.APPLICATION_JSON)\n                .content(json))\n                .andExpect(status().isOk())\n                .andExpect(jsonPath("$.orderId").value("ORD-123"))\n                .andExpect(jsonPath("$.amount").value(250.00));\n        \n        verify(service).create(any(OrderRequestDTO.class));\n    }\n}',
    },
    {
      description: "Factory test with validation",
      language: "java",
      code: 'public class OrderFactoryTest {\n    \n    @Test\n    void createOnlineOrder_withValidInput_returnsOrder() {\n        OnlineOrder order = OrderFactory.createOnlineOrder("123 Main St", "SHIP-456");\n        \n        assertNotNull(order);\n        assertNotNull(order.getOrderId());\n        assertTrue(order.getOrderId().startsWith("ORD-"));\n        assertEquals("CREATED", order.getStatus());\n        assertEquals("123 Main St", order.getDeliveryAddress());\n    }\n    \n    @Test\n    void createOnlineOrder_withInvalidAddress_returnsNull() {\n        OnlineOrder order = OrderFactory.createOnlineOrder("", "SHIP-456");\n        assertNull(order);  // Factory returns null for invalid input\n    }\n    \n    @Test\n    void createInStoreOrder_withZeroPayment_throwsException() {\n        assertThrows(IllegalArgumentException.class, () -> {\n            OrderFactory.createInStoreOrder(0, "Cashier Name");\n        });\n    }\n}',
    },
  ],

  testPatternsTable: {
    title: "Test Patterns in DDD Projects",
    subtitle: "What Each Test Type Checks and Tools Used",
    badge: "Testing",
    patterns: [
      {
        type: "Domain Test",
        whatItChecks: "Business rules in domain objects",
        tools: "JUnit assertions only",
        example: "MoneyTest, CartTest",
      },
      {
        type: "Factory Test",
        whatItChecks: "Object creation and validation",
        tools: "Assertions, exception checks",
        example: "CartFactoryTest",
      },
      {
        type: "Service Test",
        whatItChecks: "Service orchestration (mock repo)",
        tools: "Mockito: @Mock, when(), verify()",
        example: "CartServiceTest",
      },
      {
        type: "Controller Test",
        whatItChecks: "HTTP layer (mock service)",
        tools: "MockMvc, @WebMvcTest",
        example: "OrderControllerTest",
      },
      {
        type: "Repository Test",
        whatItChecks: "Save/find/delete behavior",
        tools: "In-memory repository",
        example: "InMemoryCartRepositoryTest",
      },
      {
        type: "Startup Test",
        whatItChecks: "Spring context loads",
        tools: "@SpringBootTest",
        example: "ApplicationTests",
      },
    ],
  },

  exercises: [
    {
      q: "Write a domain test for a Product class with reduceStock(int quantity) method that throws exception if quantity exceeds available stock.",
      a: [
        '@Test\nvoid reduceStock_throwsExceptionWhenInsufficientStock() {\n    Product product = new Product("P1", "Laptop", new Money(1000), 5);\n    assertThrows(IllegalStateException.class, () -> product.reduceStock(10));\n}\n\n@Test\nvoid reduceStock_reducesStockWhenSufficient() {\n    Product product = new Product("P1", "Laptop", new Money(1000), 5);\n    product.reduceStock(3);\n    assertEquals(2, product.getStockQuantity());\n}',
      ],
    },
    {
      q: "Write a service test using Mockito for CartService.addItem(). Mock the repository and verify save is called.",
      a: [
        '@ExtendWith(MockitoExtension.class)\npublic class CartServiceTest {\n    @Mock\n    private CartRepository repository;\n    \n    @InjectMocks\n    private CartService service;\n    \n    @Test\n    void addItem_savesCartAfterAddingItem() {\n        Cart cart = new Cart("CART-1");\n        when(repository.findById("CART-1")).thenReturn(Optional.of(cart));\n        \n        AddItemCommand command = new AddItemCommand("CART-1", "PROD-1", 2, new Money(50));\n        service.addItem(command);\n        \n        verify(repository).save(cart);\n    }\n}',
      ],
    },
    {
      q: "What is the difference between mocking a repository and using an in-memory repository? When would you use each?",
      a: [
        "Mocking a repository:",
        "  - Creates fake object with stubbed behavior",
        "  - Use when() to define returns",
        "  - Use verify() to check interactions",
        "  - Does NOT actually store anything",
        "  - Use for: service tests (only care about orchestration)",
        "In-memory repository:",
        "  - Real implementation using HashMap",
        "  - Actually stores objects",
        "  - Can verify save worked via retrieval",
        "  - Use for: repository unit tests, integration tests",
      ],
    },
    {
      q: "Write a controller test for GET /api/orders/{id} using MockMvc. Mock the service to return an Order, then verify status OK and JSON contains correct ID.",
      a: [
        '@WebMvcTest(OrderController.class)\npublic class OrderControllerTest {\n    @Autowired\n    private MockMvc mockMvc;\n    \n    @MockBean\n    private OrderService service;\n    \n    @Test\n    void getOrder_returnsOrder() throws Exception {\n        Order order = new Order("ORD-123", new CustomerName("John", "Doe"), new Money(250));\n        when(service.findById("ORD-123")).thenReturn(Optional.of(order));\n        \n        mockMvc.perform(get("/api/orders/ORD-123"))\n            .andExpect(status().isOk())\n            .andExpect(jsonPath("$.id").value("ORD-123"));\n    }\n}',
      ],
    },
    {
      q: "Explain the test pyramid. Why should you have more domain tests than controller tests?",
      a: [
        "Test pyramid (bottom to top):",
        "  - Unit/Domain tests (many) — fast, cheap, test business rules",
        "  - Service tests (fewer) — slower, test coordination",
        "  - Controller/Integration tests (fewest) — slowest, test whole system",
        "Domain tests are fastest because:",
        "  - No Spring context startup",
        "  - No database connections",
        "  - No HTTP layer",
        "  - Pure JUnit assertions",
        "Controller tests are slowest because:",
        "  - Start Spring context (or use MockMvc which is faster but still heavier)",
        "  - Serialize/deserialize JSON",
        "  - Mock services",
        "Write many domain tests because they catch business rule bugs quickly.",
      ],
    },
  ],
};
