// chapter3-application-layer.js

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
      description: "Complete application layer flow for adding item to cart",
      language: "java",
      code: "// Command\npublic class AddItemCommand {\n    private final String cartId;\n    private final String productId;\n    private final int quantity;\n    private final Money price;\n    // constructor, getters\n}\n\n// Event\npublic class ItemAddedEvent {\n    private final String cartId;\n    private final String productId;\n    private final int quantity;\n    // constructor, getters\n}\n\n// Handler\npublic class AddItemCommandHandler {\n    private final CartService service;\n    \n    public ItemAddedEvent handle(AddItemCommand command) {\n        return service.addItem(command);\n    }\n}\n\n// Service\npublic class CartService {\n    private final CartRepository repository;\n    \n    public ItemAddedEvent addItem(AddItemCommand cmd) {\n        Cart cart = repository.findById(cmd.getCartId());\n        cart.addItem(cmd.getProductId(), cmd.getQuantity(), cmd.getPrice());\n        repository.save(cart);\n        return new ItemAddedEvent(cmd.getCartId(), cmd.getProductId(), cmd.getQuantity());\n    }\n}",
    },
    {
      description: "Service layer coordinating domain and repository (CartService)",
      language: "java",
      code: "public class CartService {\n    private final CartRepository repository;\n\n    public CartService(CartRepository repository) {\n        this.repository = repository;\n    }\n\n    // Service COORDINATES - no business logic\n    public void addItem(String cartId, String productId, int quantity, double price) {\n        // 1. LOAD domain object from repository\n        Cart cart = repository.findById(cartId);\n        \n        // 2. CALL domain method (business rule lives in Cart, not here)\n        cart.addItem(\n            new ProductId(productId),\n            quantity,\n            new Money(price)\n        );\n        \n        // 3. SAVE back to repository\n        repository.save(cart);\n    }\n\n    // Query - no state change\n    public double getTotal(String cartId) {\n        return repository.findById(cartId)\n                .getTotal()\n                .getAmount();\n    }\n}",
    },
    {
      description: "Command and Handler pattern (write operation)",
      language: "java",
      code: "// COMMAND - carries write intent (immutable data carrier)\npublic class AddItemCommand {\n    public final String cartId;\n    public final String productId;\n    public final int quantity;\n    public final double price;\n\n    public AddItemCommand(String cartId, String productId, int quantity, double price) {\n        this.cartId = cartId;\n        this.productId = productId;\n        this.quantity = quantity;\n        this.price = price;\n    }\n}\n\n// EVENT - confirms what happened\npublic class ItemAddedEvent {\n    public final String cartId;\n    public final String productId;\n    public final int quantity;\n\n    public ItemAddedEvent(String cartId, String productId, int quantity) {\n        this.cartId = cartId;\n        this.productId = productId;\n        this.quantity = quantity;\n    }\n}\n\n// HANDLER - adapts command to service call\npublic class CartCommandHandler {\n    private final CartService service;\n\n    public CartCommandHandler(CartService service) {\n        this.service = service;\n    }\n\n    public ItemAddedEvent handle(AddItemCommand command) {\n        // Delegate to service\n        service.addItem(\n            command.cartId,\n            command.productId,\n            command.quantity,\n            command.price\n        );\n        \n        // Return event proving completion\n        return new ItemAddedEvent(\n            command.cartId,\n            command.productId,\n            command.quantity\n        );\n    }\n}",
    },
    {
      description: "Service with factory for object creation (CustomerService)",
      language: "java",
      code: "public class CustomerService {\n    private CustomerRepository repository;\n\n    public CustomerService(CustomerRepository repository) {\n        this.repository = repository;\n    }\n\n    public CustomerCreatedEvent handle(CreateCustomerCommand command) {\n        // 1. FACTORY creates validated domain object\n        Customer customer = CustomerFactory.createCustomer(\n            command.id,\n            command.name,\n            command.email\n        );\n        \n        // 2. REPOSITORY persists\n        repository.save(customer);\n        \n        // 3. EVENT confirms creation\n        return new CustomerCreatedEvent(customer.getId(), customer.getName());\n    }\n\n    public Customer handle(GetCustomerQuery query) {\n        // Query - just retrieve\n        return repository.findById(query.id);\n    }\n}",
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
        "Event: ItemRemovedEvent(cartId, productId, quantity, remainingQuantity)",
        "Handler: RemoveItemCommandHandler with handle(RemoveItemCommand) → ItemRemovedEvent",
        "Service method: ItemRemovedEvent removeItem(RemoveItemCommand cmd) {\n    Cart cart = repo.findById(cmd.cartId);\n    int remaining = cart.removeItem(cmd.productId, cmd.quantity);\n    repo.save(cart);\n    return new ItemRemovedEvent(cmd.cartId, cmd.productId, cmd.quantity, remaining);\n}",
      ],
    },
  ],
};
