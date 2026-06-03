// chapter5-testing.js (REVISED - complete with all test types)

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
      description: "Domain test for Money value object (complete with edge cases)",
      language: "java",
      code: 'import org.junit.jupiter.api.Test;\nimport org.junit.jupiter.params.ParameterizedTest;\nimport org.junit.jupiter.params.provider.ValueSource;\nimport static org.junit.jupiter.api.Assertions.*;\n\npublic class MoneyTest {\n    \n    @Test\n    void constructor_rejectsNegativeAmount() {\n        assertThrows(IllegalArgumentException.class, () -> new Money(-10));\n        assertThrows(IllegalArgumentException.class, () -> new Money(-0.01));\n    }\n    \n    @Test\n    void constructor_acceptsZeroAmount() {\n        Money zero = new Money(0);\n        assertEquals(0, zero.getAmount());\n    }\n    \n    @Test\n    void constructor_rejectsNullCurrency() {\n        assertThrows(IllegalArgumentException.class, () -> new Money(10, null));\n    }\n    \n    @Test\n    void add_returnsNewMoneyWithSum() {\n        Money ten = new Money(10);\n        Money twenty = new Money(20);\n        Money thirty = ten.add(twenty);\n        \n        assertEquals(30, thirty.getAmount());\n        // Immutability: original objects unchanged\n        assertEquals(10, ten.getAmount());\n        assertEquals(20, twenty.getAmount());\n    }\n    \n    @Test\n    void add_rejectsDifferentCurrencies() {\n        Money usd10 = new Money(10, "USD");\n        Money eur10 = new Money(10, "EUR");\n        \n        assertThrows(IllegalArgumentException.class, () -> usd10.add(eur10));\n    }\n    \n    @Test\n    void multiply_returnsNewMoneyWithProduct() {\n        Money ten = new Money(10);\n        Money thirty = ten.multiply(3);\n        \n        assertEquals(30, thirty.getAmount());\n        assertEquals(10, ten.getAmount());  // unchanged\n    }\n    \n    @ParameterizedTest\n    @ValueSource(doubles = {0, 10, 25, 50, 75, 100})\n    void applyDiscount_worksForValidPercentages(double percentage) {\n        Money hundred = new Money(100);\n        Money discounted = hundred.applyDiscount(percentage);\n        \n        double expected = 100 * (1 - percentage / 100);\n        assertEquals(expected, discounted.getAmount(), 0.001);\n    }\n    \n    @Test\n    void applyDiscount_rejectsInvalidPercentages() {\n        Money hundred = new Money(100);\n        assertThrows(IllegalArgumentException.class, () -> hundred.applyDiscount(-10));\n        assertThrows(IllegalArgumentException.class, () -> hundred.applyDiscount(101));\n    }\n    \n    @Test\n    void equals_worksBasedOnAmountAndCurrency() {\n        Money tenA = new Money(10, "USD");\n        Money tenB = new Money(10, "USD");\n        Money tenEur = new Money(10, "EUR");\n        Money twenty = new Money(20, "USD");\n        \n        assertEquals(tenA, tenB);  // Same amount and currency = equal\n        assertNotEquals(tenA, tenEur);  // Different currency\n        assertNotEquals(tenA, twenty);   // Different amount\n    }\n}',
    },
    {
      description: "Domain test for Cart entity (business rules)",
      language: "java",
      code: 'import org.junit.jupiter.api.BeforeEach;\nimport org.junit.jupiter.api.Test;\nimport static org.junit.jupiter.api.Assertions.*;\n\npublic class CartTest {\n    private Cart cart;\n    private ProductId productId;\n    private Money price;\n    \n    @BeforeEach\n    void setUp() {\n        cart = new Cart("CART-001");\n        productId = new ProductId("PROD-001");\n        price = new Money(25.99);\n    }\n    \n    @Test\n    void addItem_whenNewItem_itemAddedToCart() {\n        cart.addItem(productId, 2, price);\n        \n        assertEquals(1, cart.getItems().size());\n        assertEquals(2, cart.getItems().get(0).getQuantity());\n        assertEquals(price, cart.getItems().get(0).getUnitPrice());\n    }\n    \n    @Test\n    void addItem_whenExistingItem_increasesQuantity() {\n        cart.addItem(productId, 2, price);\n        cart.addItem(productId, 3, price);\n        \n        assertEquals(1, cart.getItems().size());\n        assertEquals(5, cart.getItems().get(0).getQuantity());\n    }\n    \n    @Test\n    void addItem_rejectsZeroOrNegativeQuantity() {\n        assertThrows(IllegalArgumentException.class, () -> cart.addItem(productId, 0, price));\n        assertThrows(IllegalArgumentException.class, () -> cart.addItem(productId, -5, price));\n    }\n    \n    @Test\n    void getTotal_calculatesSumOfAllItems() {\n        cart.addItem(productId, 2, new Money(10.00));\n        cart.addItem(new ProductId("PROD-002"), 3, new Money(5.00));\n        \n        Money total = cart.getTotal();\n        assertEquals(35.00, total.getAmount());  // (2*10) + (3*5) = 35\n    }\n    \n    @Test\n    void removeItem_whenRemovingAll_removesItemCompletely() {\n        cart.addItem(productId, 5, price);\n        cart.removeItem(productId, 5);\n        \n        assertTrue(cart.getItems().isEmpty());\n    }\n    \n    @Test\n    void removeItem_whenRemovingPartial_decreasesQuantity() {\n        cart.addItem(productId, 5, price);\n        cart.removeItem(productId, 2);\n        \n        assertEquals(1, cart.getItems().size());\n        assertEquals(3, cart.getItems().get(0).getQuantity());\n    }\n    \n    @Test\n    void removeItem_whenQuantityExceedsAvailable_throwsException() {\n        cart.addItem(productId, 5, price);\n        \n        assertThrows(IllegalArgumentException.class, () -> cart.removeItem(productId, 10));\n    }\n    \n    @Test\n    void checkout_whenCartHasItems_changesStatus() {\n        cart.addItem(productId, 2, price);\n        cart.checkout();\n        \n        assertEquals(CartStatus.CHECKED_OUT, cart.getStatus());\n    }\n    \n    @Test\n    void checkout_whenCartEmpty_throwsException() {\n        assertThrows(IllegalStateException.class, () -> cart.checkout());\n    }\n    \n    @Test\n    void addItem_whenCartCheckedOut_throwsException() {\n        cart.addItem(productId, 2, price);\n        cart.checkout();\n        \n        assertThrows(IllegalStateException.class, () -> cart.addItem(productId, 1, price));\n    }\n}',
    },
    {
      description: "Factory test with validation (complete)",
      language: "java",
      code: 'import org.junit.jupiter.api.Test;\nimport static org.junit.jupiter.api.Assertions.*;\n\npublic class CustomerFactoryTest {\n    \n    @Test\n    void createCustomer_withValidInput_returnsCustomerWithGeneratedId() {\n        Customer customer = CustomerFactory.createCustomer("John Doe", "john@example.com");\n        \n        assertNotNull(customer);\n        assertNotNull(customer.getId());\n        assertTrue(customer.getId().startsWith("CUST-"));\n        assertEquals("John Doe", customer.getName());\n        assertEquals("john@example.com", customer.getEmail());\n        assertEquals(CustomerStatus.ACTIVE, customer.getStatus());\n    }\n    \n    @Test\n    void createCustomer_withEmptyName_throwsException() {\n        assertThrows(IllegalArgumentException.class, \n            () -> CustomerFactory.createCustomer("", "john@example.com"));\n        \n        assertThrows(IllegalArgumentException.class, \n            () -> CustomerFactory.createCustomer(null, "john@example.com"));\n        \n        assertThrows(IllegalArgumentException.class, \n            () -> CustomerFactory.createCustomer("   ", "john@example.com"));\n    }\n    \n    @Test\n    void createCustomer_withInvalidEmail_throwsException() {\n        assertThrows(IllegalArgumentException.class, \n            () -> CustomerFactory.createCustomer("John Doe", "not-an-email"));\n        \n        assertThrows(IllegalArgumentException.class, \n            () -> CustomerFactory.createCustomer("John Doe", "missing@domain"));\n        \n        assertThrows(IllegalArgumentException.class, \n            () -> CustomerFactory.createCustomer("John Doe", null));\n    }\n    \n    @Test\n    void createCustomer_generatesSequentialIds() {\n        Customer customer1 = CustomerFactory.createCustomer("John", "john@test.com");\n        Customer customer2 = CustomerFactory.createCustomer("Jane", "jane@test.com");\n        \n        assertNotEquals(customer1.getId(), customer2.getId());\n        \n        int id1 = Integer.parseInt(customer1.getId().substring(5));\n        int id2 = Integer.parseInt(customer2.getId().substring(5));\n        assertEquals(id1 + 1, id2);\n    }\n    \n    @Test\n    void createCustomer_withExplicitId_usesProvidedId() {\n        Customer customer = CustomerFactory.createCustomer("CUST-99999", "John Doe", "john@test.com");\n        \n        assertEquals("CUST-99999", customer.getId());\n        assertEquals("John Doe", customer.getName());\n    }\n}',
    },
    {
      description: "Service test with Mockito (mocking repository)",
      language: "java",
      code: 'import org.junit.jupiter.api.BeforeEach;\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.extension.ExtendWith;\nimport org.mockito.InjectMocks;\nimport org.mockito.Mock;\nimport org.mockito.junit.jupiter.MockitoExtension;\nimport java.util.Optional;\nimport static org.mockito.Mockito.*;\nimport static org.junit.jupiter.api.Assertions.*;\n\n@ExtendWith(MockitoExtension.class)\npublic class CartServiceTest {\n    \n    @Mock\n    private CartRepository repository;\n    \n    @InjectMocks\n    private CartService service;\n    \n    private Cart cart;\n    private AddItemCommand command;\n    \n    @BeforeEach\n    void setUp() {\n        cart = new Cart("CART-001\");\n        command = new AddItemCommand(\"CART-001\", \"PROD-001\", 2, new Money(25.99));\n    }\n    \n    @Test\n    void addItem_whenCartExists_shouldAddItemAndSave() {\n        // GIVEN\n        when(repository.findById(\"CART-001\")).thenReturn(Optional.of(cart));\n        \n        // WHEN\n        ItemAddedEvent event = service.addItem(command);\n        \n        // THEN\n        verify(repository).save(cart);\n        assertNotNull(event);\n        assertEquals(\"CART-001\", event.getCartId());\n        assertEquals(\"PROD-001\", event.getProductId());\n        assertEquals(2, event.getQuantity());\n    }\n    \n    @Test\n    void addItem_whenCartNotFound_throwsException() {\n        // GIVEN\n        when(repository.findById(\"CART-001\")).thenReturn(Optional.empty());\n        \n        // WHEN/THEN\n        assertThrows(CartNotFoundException.class, () -> service.addItem(command));\n        \n        // Verify save was NEVER called\n        verify(repository, never()).save(any());\n    }\n    \n    @Test\n    void addItem_shouldLoadCartAndCallDomainMethod() {\n        // GIVEN\n        when(repository.findById(\"CART-001\")).thenReturn(Optional.of(cart));\n        \n        // WHEN\n        service.addItem(command);\n        \n        // THEN - cart should be modified (domain logic executed)\n        assertEquals(1, cart.getItems().size());\n        assertEquals(2, cart.getItems().get(0).getQuantity());\n    }\n    \n    @Test\n    void getTotal_whenCartExists_returnsTotal() {\n        // GIVEN\n        cart.addItem(new ProductId(\"PROD-001\"), 2, new Money(25.99));\n        when(repository.findById(\"CART-001\")).thenReturn(Optional.of(cart));\n        \n        // WHEN\n        Money total = service.getCartTotal(\"CART-001\");\n        \n        // THEN\n        assertEquals(51.98, total.getAmount());\n        // Verify save was NOT called (read operation)\n        verify(repository, never()).save(any());\n    }\n    \n    @Test\n    void removeItem_removesItemAndSaves() {\n        // GIVEN\n        cart.addItem(new ProductId(\"PROD-001\"), 5, new Money(25.99));\n        when(repository.findById(\"CART-001\")).thenReturn(Optional.of(cart));\n        \n        RemoveItemCommand removeCommand = new RemoveItemCommand(\"CART-001\", \"PROD-001\", 2);\n        \n        // WHEN\n        ItemRemovedEvent event = service.removeItem(removeCommand);\n        \n        // THEN\n        verify(repository).save(cart);\n        assertEquals(3, event.getRemainingQuantity());\n    }\n}',
    },
    {
      description: "Controller test with MockMvc (Spring Boot)",
      language: "java",
      code: 'import org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;\nimport org.springframework.boot.test.mock.mockito.MockBean;\nimport org.springframework.http.MediaType;\nimport org.springframework.test.web.servlet.MockMvc;\nimport com.fasterxml.jackson.databind.ObjectMapper;\nimport static org.mockito.ArgumentMatchers.any;\nimport static org.mockito.Mockito.*;\nimport static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;\nimport static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;\n\n@WebMvcTest(OrderController.class)\npublic class OrderControllerTest {\n    \n    @Autowired\n    private MockMvc mockMvc;\n    \n    @Autowired\n    private ObjectMapper objectMapper;\n    \n    @MockBean\n    private OrderService orderService;\n    \n    @Test\n    void createOrder_shouldReturnCreatedOrder() throws Exception {\n        // GIVEN\n        CreateOrderRequest request = new CreateOrderRequest();\n        request.setCustomerName(\"John Doe\");\n        request.setItems(List.of(new OrderItemDTO(\"PROD-001\", 2, 25.99)));\n        \n        OrderCreatedEvent event = new OrderCreatedEvent(\"ORD-12345\");\n        when(orderService.createOrder(any(CreateOrderCommand.class))).thenReturn(event);\n        \n        // WHEN/THEN\n        mockMvc.perform(post(\"/api/orders\")\n                .contentType(MediaType.APPLICATION_JSON)\n                .content(objectMapper.writeValueAsString(request)))\n                .andExpect(status().isOk())\n                .andExpect(jsonPath(\"$.orderId\").value(\"ORD-12345\"));\n        \n        verify(orderService).createOrder(any(CreateOrderCommand.class));\n    }\n    \n    @Test\n    void getOrder_whenOrderExists_returnsOrder() throws Exception {\n        // GIVEN\n        Order order = new Order(new OrderId(\"ORD-12345\"), new CustomerName(\"John\", \"Doe\"));\n        order.addItem(new ProductId(\"PROD-001\"), new Money(25.99), 2);\n        \n        when(orderService.findOrder(new OrderId(\"ORD-12345\"))).thenReturn(order);\n        \n        // WHEN/THEN\n        mockMvc.perform(get(\"/api/orders/ORD-12345\"))\n                .andExpect(status().isOk())\n                .andExpect(jsonPath(\"$.id.value\").value(\"ORD-12345\"))\n                .andExpect(jsonPath(\"$.total.amount\").value(51.98));\n    }\n    \n    @Test\n    void getOrder_whenOrderNotFound_returns404() throws Exception {\n        // GIVEN\n        when(orderService.findOrder(new OrderId(\"ORD-99999\")))\n            .thenThrow(new OrderNotFoundException(\"ORD-99999\"));\n        \n        // WHEN/THEN\n        mockMvc.perform(get(\"/api/orders/ORD-99999\"))\n                .andExpect(status().isNotFound());\n    }\n    \n    @Test\n    void createOrder_withInvalidInput_returns400() throws Exception {\n        // GIVEN - empty customer name\n        CreateOrderRequest request = new CreateOrderRequest();\n        request.setCustomerName(\"\");\n        request.setItems(List.of());\n        \n        // WHEN/THEN - validation should reject\n        mockMvc.perform(post(\"/api/orders\")\n                .contentType(MediaType.APPLICATION_JSON)\n                .content(objectMapper.writeValueAsString(request)))\n                .andExpect(status().isBadRequest());\n        \n        verify(orderService, never()).createOrder(any());\n    }\n}',
    },
    {
      description: "Repository test with in-memory implementation",
      language: "java",
      code: 'import org.junit.jupiter.api.BeforeEach;\nimport org.junit.jupiter.api.Test;\nimport java.util.List;\nimport java.util.Optional;\nimport static org.junit.jupiter.api.Assertions.*;\n\npublic class InMemoryOrderRepositoryTest {\n    \n    private InMemoryOrderRepository repository;\n    private Order order1;\n    private Order order2;\n    \n    @BeforeEach\n    void setUp() {\n        repository = new InMemoryOrderRepository();\n        order1 = new Order(new OrderId(\"ORD-001\"), new CustomerName(\"John\", \"Doe\"));\n        order2 = new Order(new OrderId(\"ORD-002\"), new CustomerName(\"Jane\", \"Smith\"));\n    }\n    \n    @Test\n    void save_shouldStoreOrder() {\n        Order saved = repository.save(order1);\n        \n        assertNotNull(saved);\n        assertEquals(\"ORD-001\", saved.getId().getValue());\n        assertEquals(1, repository.size());\n    }\n    \n    @Test\n    void save_shouldOverwriteExistingOrder() {\n        repository.save(order1);\n        Order updatedOrder = new Order(new OrderId(\"ORD-001\"), new CustomerName(\"Johnathan\", \"Doe\"));\n        \n        repository.save(updatedOrder);\n        \n        assertEquals(1, repository.size());\n        Optional<Order> found = repository.findById(new OrderId(\"ORD-001\"));\n        assertEquals(\"Johnathan\", found.get().getCustomerName().getFirstName());\n    }\n    \n    @Test\n    void findById_whenOrderExists_returnsOrder() {\n        repository.save(order1);\n        \n        Optional<Order> found = repository.findById(new OrderId(\"ORD-001\"));\n        \n        assertTrue(found.isPresent());\n        assertEquals(\"ORD-001\", found.get().getId().getValue());\n    }\n    \n    @Test\n    void findById_whenOrderDoesNotExist_returnsEmpty() {\n        Optional<Order> found = repository.findById(new OrderId(\"ORD-999\"));\n        \n        assertFalse(found.isPresent());\n    }\n    \n    @Test\n    void findAll_returnsAllStoredOrders() {\n        repository.save(order1);\n        repository.save(order2);\n        \n        List<Order> orders = repository.findAll();\n        \n        assertEquals(2, orders.size());\n        assertTrue(orders.stream().anyMatch(o -> o.getId().equals(order1.getId())));\n        assertTrue(orders.stream().anyMatch(o -> o.getId().equals(order2.getId())));\n    }\n    \n    @Test\n    void deleteById_removesOrder() {\n        repository.save(order1);\n        repository.save(order2);\n        \n        repository.deleteById(new OrderId(\"ORD-001\"));\n        \n        assertEquals(1, repository.size());\n        assertFalse(repository.findById(new OrderId(\"ORD-001\")).isPresent());\n        assertTrue(repository.findById(new OrderId(\"ORD-002\")).isPresent());\n    }\n    \n    @Test\n    void existsById_returnsCorrectBoolean() {\n        repository.save(order1);\n        \n        assertTrue(repository.existsById(new OrderId(\"ORD-001\")));\n        assertFalse(repository.existsById(new OrderId(\"ORD-999\")));\n    }\n    \n    @Test\n    void clear_removesAllOrders() {\n        repository.save(order1);\n        repository.save(order2);\n        \n        repository.clear();\n        \n        assertEquals(0, repository.size());\n        assertTrue(repository.findAll().isEmpty());\n    }\n}',
    },
    {
      description: "Integration test with Spring Boot and test database",
      language: "java",
      code: 'import org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;\nimport org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;\nimport org.springframework.test.context.ActiveProfiles;\nimport java.util.Optional;\nimport static org.junit.jupiter.api.Assertions.*;\n\n@DataJpaTest\n@ActiveProfiles("test")\npublic class SpringDataOrderRepositoryIntegrationTest {\n    \n    @Autowired\n    private SpringDataOrderRepository repository;\n    \n    @Autowired\n    private TestEntityManager entityManager;\n    \n    @Test\n    void saveAndFindById_worksWithDatabase() {\n        // GIVEN\n        OrderJpa orderJpa = new OrderJpa();\n        orderJpa.setId("ORD-001\");\n        orderJpa.setCustomerFirstName(\"John\");\n        orderJpa.setCustomerLastName(\"Doe\");\n        orderJpa.setTotalAmount(100.00);\n        orderJpa.setTotalCurrency(\"USD\");\n        orderJpa.setStatus(OrderStatus.PENDING);\n        \n        // WHEN\n        OrderJpa saved = repository.save(orderJpa);\n        entityManager.flush();\n        entityManager.clear();  // Clear persistence context to test real DB retrieval\n        \n        // THEN\n        Optional<OrderJpa> found = repository.findById(\"ORD-001\");\n        assertTrue(found.isPresent());\n        assertEquals(\"John\", found.get().getCustomerFirstName());\n        assertEquals(100.00, found.get().getTotalAmount());\n    }\n    \n    @Test\n    void findByStatus_returnsOrdersWithMatchingStatus() {\n        // GIVEN\n        OrderJpa pendingOrder = createOrder(\"ORD-001\", OrderStatus.PENDING);\n        OrderJpa completedOrder = createOrder(\"ORD-002\", OrderStatus.COMPLETED);\n        repository.save(pendingOrder);\n        repository.save(completedOrder);\n        \n        // WHEN\n        var pendingOrders = repository.findByStatus(OrderStatus.PENDING);\n        \n        // THEN\n        assertEquals(1, pendingOrders.size());\n        assertEquals(\"ORD-001\", pendingOrders.get(0).getId());\n    }\n    \n    @Test\n    void findOrdersAboveAmount_returnsOrdersExceedingThreshold() {\n        // GIVEN\n        repository.save(createOrder(\"ORD-001\", 50.00));\n        repository.save(createOrder(\"ORD-002\", 150.00));\n        repository.save(createOrder(\"ORD-003\", 250.00));\n        \n        // WHEN\n        var highValueOrders = repository.findOrdersAboveAmount(100.00);\n        \n        // THEN\n        assertEquals(2, highValueOrders.size());\n        assertTrue(highValueOrders.stream().anyMatch(o -> o.getId().equals(\"ORD-002\")));\n        assertTrue(highValueOrders.stream().anyMatch(o -> o.getId().equals(\"ORD-003\")));\n    }\n    \n    private OrderJpa createOrder(String id, OrderStatus status) {\n        OrderJpa order = new OrderJpa();\n        order.setId(id);\n        order.setCustomerFirstName(\"Test\");\n        order.setCustomerLastName(\"User\");\n        order.setTotalAmount(100.00);\n        order.setTotalCurrency(\"USD\");\n        order.setStatus(status);\n        return order;\n    }\n    \n    private OrderJpa createOrder(String id, double amount) {\n        OrderJpa order = new OrderJpa();\n        order.setId(id);\n        order.setCustomerFirstName(\"Test\");\n        order.setCustomerLastName(\"User\");\n        order.setTotalAmount(amount);\n        order.setTotalCurrency(\"USD\");\n        order.setStatus(OrderStatus.PENDING);\n        return order;\n    }\n}',
    },
    {
      description: "Startup test (smoke test for Spring context)",
      language: "java",
      code: 'import org.junit.jupiter.api.Test;\nimport org.springframework.boot.test.context.SpringBootTest;\nimport org.springframework.test.context.ActiveProfiles;\n\n@SpringBootTest\n@ActiveProfiles("test")\npublic class ECommerceApplicationTests {\n    \n    @Test\n    void contextLoads() {\n        // This test simply verifies that the Spring application context can start\n        // If any beans fail to load (missing dependencies, configuration errors),\n        // this test will fail\n    }\n    \n    // Additional smoke tests\n    @Test\n    void mainMethodStartsApplication() {\n        // Verify main method doesn\'t throw exceptions\n        ECommerceApplication.main(new String[]{});\n    }\n}',
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
        example: "CustomerFactoryTest",
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
        tools: "In-memory repository or @DataJpaTest",
        example: "InMemoryOrderRepositoryTest",
      },
      {
        type: "Integration Test",
        whatItChecks: "Real database interactions",
        tools: "@DataJpaTest, TestEntityManager",
        example: "SpringDataOrderRepositoryIntegrationTest",
      },
      {
        type: "Startup Test",
        whatItChecks: "Spring context loads",
        tools: "@SpringBootTest",
        example: "ECommerceApplicationTests",
      },
    ],
  },

  exercises: [
    {
      q: "Write a domain test for a Product class with reduceStock(int quantity) method that throws exception if quantity exceeds available stock.",
      a: [
        {
          type: "code",
          language: "java",
          code: '@Test\nvoid reduceStock_throwsExceptionWhenInsufficientStock() {\n    Product product = new Product(new ProductId("PROD-001"), "Laptop", new Money(1000), 5);\n    assertThrows(IllegalStateException.class, () -> product.reduceStock(10));\n}\n\n@Test\nvoid reduceStock_reducesStockWhenSufficient() {\n    Product product = new Product(new ProductId("PROD-001"), "Laptop", new Money(1000), 5);\n    product.reduceStock(3);\n    assertEquals(2, product.getStockQuantity());\n}\n\n@Test\nvoid reduceStock_whenStockReachesZero_updatesStatus() {\n    Product product = new Product(new ProductId("PROD-001"), "Laptop", new Money(1000), 5);\n    product.reduceStock(5);\n    assertEquals(ProductStatus.OUT_OF_STOCK, product.getStatus());\n}',
        },
      ],
    },
    {
      q: "Write a service test using Mockito for CartService.addItem(). Mock the repository and verify save is called.",
      a: [
        {
          type: "code",
          language: "java",
          code: '@ExtendWith(MockitoExtension.class)\npublic class CartServiceTest {\n    @Mock\n    private CartRepository repository;\n    \n    @InjectMocks\n    private CartService service;\n    \n    @Test\n    void addItem_savesCartAfterAddingItem() {\n        Cart cart = new Cart("CART-1");\n        when(repository.findById("CART-1")).thenReturn(Optional.of(cart));\n        \n        AddItemCommand command = new AddItemCommand("CART-1", "PROD-1", 2, new Money(50));\n        service.addItem(command);\n        \n        verify(repository).save(cart);\n    }\n}',
        },
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
        {
          type: "code",
          language: "java",
          code: '@WebMvcTest(OrderController.class)\npublic class OrderControllerTest {\n    @Autowired\n    private MockMvc mockMvc;\n    \n    @MockBean\n    private OrderService service;\n    \n    @Test\n    void getOrder_returnsOrder() throws Exception {\n        Order order = new Order(new OrderId("ORD-123"), new CustomerName("John", "Doe"));\n        when(service.findOrder(new OrderId("ORD-123"))).thenReturn(order);\n        \n        mockMvc.perform(get("/api/orders/ORD-123"))\n            .andExpect(status().isOk())\n            .andExpect(jsonPath("$.id.value").value("ORD-123"));\n    }\n}',
        },
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
        "Controller tests are slower because:",
        "  - Start Spring context (or use MockMvc which is faster but still heavier)",
        "  - Serialize/deserialize JSON",
        "  - Mock services",
        "Write many domain tests because they catch business rule bugs quickly.",
      ],
    },
  ],
};
