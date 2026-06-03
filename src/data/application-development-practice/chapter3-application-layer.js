// chapter3-application-layer.js (REVISED - added missing query handlers)

export const dddApplicationLayer = {
  id: "ddd-application-layer",
  title: "Chapter 3: Application Layer",
  subtitle: "Commands, Queries, Handlers, Services, and Events",
  badge: "Application Layer",

  contextAndPrerequisites: [
    "Complete Chapter 1 (DDD Flow) and Chapter 2 (Domain Objects)",
    "Understanding of how entities and value objects work",
  ],

  realWorldAnalogy:
    "A restaurant host (handler) seats customers and takes their initial requests. The floor manager (service) coordinates between waiters, kitchen, and bar. The order ticket (command) tells the kitchen what to cook. The 'order ready' announcement (event) tells the waiter to deliver food. Each piece has a specific job, and they communicate through standard messages.",

  commonMisconceptions: [
    "Services should contain business rules → TRUTH: Services COORDINATE; business rules belong in domain objects",
    "Commands and queries can be the same object → TRUTH: Separation makes read/write intentions clear and prevents accidental side effects",
    "Handlers are unnecessary — services can handle input directly → TRUTH: Handlers adapt input to service calls, making each use case explicit",
    "Events are optional nice-to-haves → TRUTH: Events make flow explicit and enable audit trails and downstream triggers",
  ],

  examTips: [
    "Commands = write intent (CreateCustomerCommand, AddItemCommand)",
    "Queries = read intent (GetCustomerQuery, GetCartTotalQuery)",
    "Handlers = adapt commands/queries into service calls, return events or results",
    "Services = coordinate repository and domain objects, contain no business rules",
    "Events = record what happened (CustomerCreatedEvent, ItemAddedEvent)",
    "Remember: Services load domain objects, call domain methods, save through repositories",
  ],

  keyTakeaway:
    "The application layer coordinates use cases. Commands represent write intent; queries represent read intent. Handlers adapt input into service calls. Services orchestrate domain objects and repositories — they load, call domain methods, and save. Events record outcomes. The application layer contains NO business rules — those belong in domain objects.",

  furtherConnections: [
    "Links to Chapter 1: Application layer sits between controllers and domain",
    "Links to Chapter 2: Services call factories to create domain objects",
    "Links to Chapter 4: Services inject repository interfaces",
  ],

  objectives: [
    "Differentiate between commands (write) and queries (read)",
    "Explain the role of handlers in adapting input to service calls",
    "Understand what services should and should NOT contain",
    "Use events to record successful operations",
    "Trace the complete flow from command to event",
  ],

  keyConcepts: [
    "Commands: Represent intent to CHANGE state. Examples: CreateCustomerCommand (carries name, email), AddItemCommand (carries cartId, productId, quantity, price). Commands should be immutable.",
    "Queries: Represent intent to READ state. Examples: GetCustomerQuery (carries customerId), GetCartTotalQuery (carries cartId). Queries should NOT modify state.",
    "Handlers: Receive commands/queries, call the appropriate service method, return events (for commands) or results (for queries). Each use case gets its own handler.",
    "Services: Coordinate domain objects and repositories. A service loads a domain object from repository, calls domain methods, saves back through repository. Services contain NO business rules — they delegate to domain objects.",
    "Events: Record that something happened. Examples: CustomerCreatedEvent (carries customerId), ItemAddedEvent (carries cartId, productId, quantity). Events are returned from handlers and can trigger downstream actions.",
    "Why Separate Commands and Queries: Commands modify state (may have side effects). Queries only read (idempotent, safe). Explicit separation prevents accidentally modifying state in a read operation.",
    "Why Handlers: Make each use case explicit. Instead of a giant service with 20 methods, each handler represents one business action. Easier to test, easier to understand.",
  ],

  content:
    "The application layer coordinates use cases without containing business rules. Commands (write) and queries (read) carry input. Handlers adapt commands/queries into service calls. Services orchestrate — they load domain objects from repositories, call domain methods, and save back. Events record outcomes. This separation ensures each use case is explicit, testable, and maintains clear boundaries between read and write operations.",

  additionalKeyPoints: [
    "Command Handler Pattern: AddItemCommandHandler has handle(AddItemCommand) that calls cartService.addItem(). Returns ItemAddedEvent.",
    "Query Handler Pattern: GetCartTotalQueryHandler has handle(GetCartTotalQuery) that calls cartService.getTotal(). Returns Money.",
    "Service Responsibilities: load cart from repository, call cart.addItem(), save cart, return event. That's it — no validation (already in command or domain), no business rules (in cart.addItem()).",
    "What Services Should NOT Contain: Validation rules (belongs in command or value object), Business logic (belongs in domain object), Database code (belongs in repository), HTTP concerns (belongs in controller).",
    "Cart Service Example: public ItemAddedEvent addItem(AddItemCommand cmd) { Cart cart = repo.findById(cmd.cartId); cart.addItem(cmd.productId, cmd.quantity, cmd.price); repo.save(cart); return new ItemAddedEvent(cmd.cartId, cmd.productId, cmd.quantity); }",
    "Event Benefits: Audit trail of all actions, can trigger notifications, makes flow explicit, easy to test (check event was returned).",
    "Event vs Result: Commands return Events (something happened). Queries return Domain objects or DTOs (data).",
  ],

  codeExamples: [
    {
      description: "Command and Query classes (separate intents)",
      language: "java",
      code: "// COMMAND - write intent (changes state)\npublic class AddItemCommand {\n    private final String cartId;\n    private final String productId;\n    private final int quantity;\n    private final Money price;\n    \n    public AddItemCommand(String cartId, String productId, int quantity, Money price) {\n        this.cartId = cartId;\n        this.productId = productId;\n        this.quantity = quantity;\n        this.price = price;\n    }\n    \n    // getters only\n    public String getCartId() { return cartId; }\n    public String getProductId() { return productId; }\n    public int getQuantity() { return quantity; }\n    public Money getPrice() { return price; }\n}\n\n// QUERY - read intent (no state change)\npublic class GetCartTotalQuery {\n    private final String cartId;\n    \n    public GetCartTotalQuery(String cartId) {\n        this.cartId = cartId;\n    }\n    \n    public String getCartId() { return cartId; }\n}\n\n// Another Query example\npublic class GetCustomerQuery {\n    private final String customerId;\n    \n    public GetCustomerQuery(String customerId) {\n        this.customerId = customerId;\n    }\n    \n    public String getCustomerId() { return customerId; }\n}",
    },
    {
      description: "Event classes (record outcomes)",
      language: "java",
      code: "// EVENT - records what happened (for commands)\npublic class ItemAddedEvent {\n    private final String cartId;\n    private final String productId;\n    private final int quantity;\n    private final Money newTotal;\n    private final LocalDateTime occurredAt;\n    \n    public ItemAddedEvent(String cartId, String productId, int quantity, Money newTotal) {\n        this.cartId = cartId;\n        this.productId = productId;\n        this.quantity = quantity;\n        this.newTotal = newTotal;\n        this.occurredAt = LocalDateTime.now();\n    }\n    \n    // getters\n    public String getCartId() { return cartId; }\n    public String getProductId() { return productId; }\n    public int getQuantity() { return quantity; }\n    public Money getNewTotal() { return newTotal; }\n    public LocalDateTime getOccurredAt() { return occurredAt; }\n}\n\npublic class CustomerCreatedEvent {\n    private final String customerId;\n    private final String customerName;\n    private final LocalDateTime occurredAt;\n    \n    public CustomerCreatedEvent(String customerId, String customerName) {\n        this.customerId = customerId;\n        this.customerName = customerName;\n        this.occurredAt = LocalDateTime.now();\n    }\n    \n    // getters\n}",
    },
    {
      description: "Command Handler (for write operations)",
      language: "java",
      code: "// HANDLER - adapts command to service call\npublic class AddItemCommandHandler {\n    private final CartService cartService;\n    \n    public AddItemCommandHandler(CartService cartService) {\n        this.cartService = cartService;\n    }\n    \n    public ItemAddedEvent handle(AddItemCommand command) {\n        // Delegate to service (which coordinates domain and repository)\n        return cartService.addItem(command);\n    }\n}\n\n// Separate handler for each use case\npublic class CreateCustomerCommandHandler {\n    private final CustomerService customerService;\n    \n    public CreateCustomerCommandHandler(CustomerService customerService) {\n        this.customerService = customerService;\n    }\n    \n    public CustomerCreatedEvent handle(CreateCustomerCommand command) {\n        return customerService.createCustomer(command);\n    }\n}",
    },
    {
      description: "Query Handler (for read operations)",
      language: "java",
      code: "// QUERY HANDLER - adapts query to service call, returns data (not event)\npublic class GetCartTotalQueryHandler {\n    private final CartService cartService;\n    \n    public GetCartTotalQueryHandler(CartService cartService) {\n        this.cartService = cartService;\n    }\n    \n    public Money handle(GetCartTotalQuery query) {\n        // Returns data directly, not an event (no state change)\n        return cartService.getCartTotal(query.getCartId());\n    }\n}\n\npublic class GetCustomerQueryHandler {\n    private final CustomerService customerService;\n    \n    public GetCustomerQueryHandler(CustomerService customerService) {\n        this.customerService = customerService;\n    }\n    \n    public Customer handle(GetCustomerQuery query) {\n        return customerService.findCustomer(query.getCustomerId());\n    }\n}",
    },
    {
      description: "Service layer (coordinates, no business logic)",
      language: "java",
      code: "// SERVICE - coordinates domain and repository\npublic class CartService {\n    private final CartRepository repository;\n    \n    public CartService(CartRepository repository) {\n        this.repository = repository;\n    }\n    \n    // Service COORDINATES - no business logic here!\n    public ItemAddedEvent addItem(AddItemCommand command) {\n        // 1. LOAD domain object from repository\n        Cart cart = repository.findById(command.getCartId())\n            .orElseThrow(() -> new CartNotFoundException(command.getCartId()));\n        \n        // 2. CALL domain method (business rule lives in Cart, not here)\n        cart.addItem(\n            new ProductId(command.getProductId()),\n            command.getQuantity(),\n            command.getPrice()\n        );\n        \n        // 3. SAVE back to repository\n        repository.save(cart);\n        \n        // 4. RETURN event confirming completion\n        return new ItemAddedEvent(\n            command.getCartId(),\n            command.getProductId(),\n            command.getQuantity(),\n            cart.getTotal()\n        );\n    }\n    \n    // Query method - no state change\n    public Money getCartTotal(String cartId) {\n        Cart cart = repository.findById(cartId)\n            .orElseThrow(() -> new CartNotFoundException(cartId));\n        return cart.getTotal();\n    }\n    \n    // Another command example\n    public ItemRemovedEvent removeItem(RemoveItemCommand command) {\n        Cart cart = repository.findById(command.getCartId())\n            .orElseThrow(() -> new CartNotFoundException(command.getCartId()));\n        \n        cart.removeItem(new ProductId(command.getProductId()), command.getQuantity());\n        repository.save(cart);\n        \n        return new ItemRemovedEvent(\n            command.getCartId(),\n            command.getProductId(),\n            command.getQuantity(),\n            cart.getTotal()\n        );\n    }\n}",
    },
    {
      description: "Service with factory for object creation",
      language: "java",
      code: "public class CustomerService {\n    private final CustomerRepository repository;\n    \n    public CustomerService(CustomerRepository repository) {\n        this.repository = repository;\n    }\n    \n    // Command - creates new customer using factory\n    public CustomerCreatedEvent createCustomer(CreateCustomerCommand command) {\n        // 1. FACTORY creates validated domain object\n        Customer customer = CustomerFactory.createCustomer(\n            command.getName(),\n            command.getEmail()\n        );\n        \n        // 2. REPOSITORY persists\n        repository.save(customer);\n        \n        // 3. EVENT confirms creation\n        return new CustomerCreatedEvent(customer.getId(), customer.getName());\n    }\n    \n    // Query - just retrieve, no factory needed\n    public Customer findCustomer(String customerId) {\n        return repository.findById(customerId)\n            .orElseThrow(() -> new CustomerNotFoundException(customerId));\n    }\n    \n    // Command - updates existing customer\n    public CustomerEmailUpdatedEvent updateEmail(UpdateCustomerEmailCommand command) {\n        Customer customer = repository.findById(command.getCustomerId())\n            .orElseThrow(() -> new CustomerNotFoundException(command.getCustomerId()));\n        \n        // Domain method contains validation\n        customer.updateEmail(command.getNewEmail());\n        repository.save(customer);\n        \n        return new CustomerEmailUpdatedEvent(\n            command.getCustomerId(),\n            command.getNewEmail()\n        );\n    }\n}",
    },
    {
      description: "Complete application layer flow with dispatcher (Mediator pattern)",
      language: "java",
      code: '// Command/Query dispatcher (simplified Mediator pattern)\npublic class Dispatcher {\n    private final Map<Class<?>, Object> commandHandlers = new HashMap<>();\n    private final Map<Class<?>, Object> queryHandlers = new HashMap<>();\n    \n    public <C, R> void registerCommandHandler(Class<C> commandClass, CommandHandler<C, R> handler) {\n        commandHandlers.put(commandClass, handler);\n    }\n    \n    public <Q, R> void registerQueryHandler(Class<Q> queryClass, QueryHandler<Q, R> handler) {\n        queryHandlers.put(queryClass, handler);\n    }\n    \n    @SuppressWarnings("unchecked")\n    public <C, R> R dispatchCommand(C command) {\n        CommandHandler<C, R> handler = (CommandHandler<C, R>) commandHandlers.get(command.getClass());\n        if (handler == null) {\n            throw new IllegalStateException("No handler registered for command: " + command.getClass());\n        }\n        return handler.handle(command);\n    }\n    \n    @SuppressWarnings("unchecked")\n    public <Q, R> R dispatchQuery(Q query) {\n        QueryHandler<Q, R> handler = (QueryHandler<Q, R>) queryHandlers.get(query.getClass());\n        if (handler == null) {\n            throw new IllegalStateException("No handler registered for query: " + query.getClass());\n        }\n        return handler.handle(query);\n    }\n}\n\n// Interfaces for handlers\npublic interface CommandHandler<C, R> {\n    R handle(C command);\n}\n\npublic interface QueryHandler<Q, R> {\n    R handle(Q query);\n}\n\n// Main application setup\npublic class Application {\n    public static void main(String[] args) {\n        // Infrastructure\n        CartRepository repository = new InMemoryCartRepository();\n        \n        // Services\n        CartService cartService = new CartService(repository);\n        \n        // Handlers\n        AddItemCommandHandler addItemHandler = new AddItemCommandHandler(cartService);\n        GetCartTotalQueryHandler getTotalHandler = new GetCartTotalQueryHandler(cartService);\n        \n        // Dispatcher\n        Dispatcher dispatcher = new Dispatcher();\n        dispatcher.registerCommandHandler(AddItemCommand.class, addItemHandler);\n        dispatcher.registerQueryHandler(GetCartTotalQuery.class, getTotalHandler);\n        \n        // Usage\n        AddItemCommand command = new AddItemCommand("cart-1", "prod-1", 2, new Money(25.99));\n        ItemAddedEvent event = dispatcher.dispatchCommand(command);\n        System.out.println("Item added. New total: " + event.getNewTotal());\n        \n        GetCartTotalQuery query = new GetCartTotalQuery("cart-1");\n        Money total = dispatcher.dispatchQuery(query);\n        System.out.println("Cart total: " + total);\n    }\n}',
    },
  ],

  exercises: [
    {
      q: "Explain the difference between a Command and a Query. Why should they be separate classes?",
      a: [
        "Command = write intent (changes state). Examples: CreateOrderCommand, AddItemCommand.",
        "Query = read intent (does not change state). Examples: GetOrderQuery, GetCartTotalQuery.",
        "Separation prevents accidentally modifying state in a read operation.",
        "Separation makes code more explicit — the class name tells you intent.",
        "Different handling: Commands return Events; Queries return data.",
        "Testing is clearer — you know exactly which operations have side effects.",
      ],
    },
    {
      q: "What should a Service contain and NOT contain? Give examples of correct and incorrect code placement.",
      a: [
        "Service SHOULD contain: loading domain objects, calling domain methods, saving via repositories, coordination logic.",
        "Service SHOULD NOT contain: validation rules (put in command or value object), business logic (put in domain object), database code (put in repository), HTTP concerns (put in controller).",
        "INCORRECT service method:\nif (price.getAmount() < 0) throw... // validation in service\ncart.setTotal(price.multiply(quantity)) // business logic in service",
        "CORRECT service method:\nCart cart = repo.findById(cmd.cartId);\ncart.addItem(cmd.productId, cmd.quantity, cmd.price);\nrepo.save(cart);\nreturn new ItemAddedEvent(...);",
      ],
    },
    {
      q: "Why do Commands return Events? What value does the Event provide?",
      a: [
        "Events prove the operation completed successfully",
        "Events can be used for audit trails (record every state change)",
        "Events can trigger downstream actions (email notifications, logging)",
        "Events make testing easier — verify the correct event was returned",
        "Events are immutable records of what happened",
        "Example: CustomerCreatedEvent proves customer was created with specific ID and timestamp",
      ],
    },
    {
      q: "Design the application layer for a 'RemoveItemFromCart' use case. Include Command, Handler, Service method signature, and Event.",
      a: [
        "Command: RemoveItemCommand(cartId, productId, quantity)",
        "Event: ItemRemovedEvent(cartId, productId, quantity, remainingQuantity, newTotal)",
        "Handler: RemoveItemCommandHandler with handle(RemoveItemCommand) → ItemRemovedEvent",
        {
          type: "code",
          language: "java",
          code: "Service method: ItemRemovedEvent removeItem(RemoveItemCommand cmd) {\n    Cart cart = repo.findById(cmd.getCartId());\n    int remaining = cart.removeItem(cmd.getProductId(), cmd.getQuantity());\n    repo.save(cart);\n    return new ItemRemovedEvent(cmd.getCartId(), cmd.getProductId(), cmd.getQuantity(), remaining, cart.getTotal());\n}",
    }],
    },
  ],
};
