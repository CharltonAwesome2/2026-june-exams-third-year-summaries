// chapter2-domain-objects.js (REVISED - added missing examples)

export const dddDomainObjects = {
  id: "ddd-domain-objects",
  title: "Chapter 2: Domain Objects",
  subtitle: "Entities, Value Objects, Factories, and Builders",
  badge: "Domain Layer",

  contextAndPrerequisites: [
    "Complete Chapter 1 (DDD Flow & Layers) first",
    "Understanding of classes, constructors, and basic OOP",
  ],

  realWorldAnalogy:
    "A passport (entity) has identity — even if you change your address or photo, you're still the same person. Money (value object) is defined by its amount and currency — $10 USD is $10 USD regardless of which bill you hold. A car factory (factory) ensures every car has an engine, wheels, and VIN before it leaves. An architect's blueprint (builder) lets you specify roof color, wall material, and window type step by step before construction.",

  commonMisconceptions: [
    "Entities and value objects are the same → TRUTH: Entities have identity (an ID that stays constant); value objects are interchangeable if values match",
    "Factories are over-engineering → TRUTH: Factories prevent invalid objects from being created and centralize validation logic",
    "Builders are just fancy constructors → TRUTH: Builders make object creation readable, enable validation before build, and prevent partially-constructed objects",
    "Value objects can't have behavior → TRUTH: Value objects SHOULD have behavior (Money.add(), Money.multiply())",
  ],

  examTips: [
    "Entity examples: Customer, Order, Cart, Product (each has an ID that never changes)",
    "Value object examples: Money, ProductId, CustomerName, Address (no identity, defined by data)",
    "Factory examples: CustomerFactory, OrderFactory, CartFactory (create valid objects, often with generated IDs)",
    "Builder examples: Order.Builder(), CustomerName.Builder() (fluent interface for complex construction)",
    "Business rule examples: Money cannot be negative, Product stock cannot go below zero, Customer must have name and email",
    "Always put validation in the constructor or factory — never let an invalid object exist",
  ],

  keyTakeaway:
    "Domain objects are the heart of DDD. Entities have identity (Customer, Order). Value objects are defined by their data (Money, CustomerName). Factories centralize creation logic and validation. Builders make complex object construction readable and safe. Business rules belong INSIDE these objects — not in services.",

  furtherConnections: [
    "Links to Chapter 1: Domain objects live in the domain layer, have no framework dependencies",
    "Links to Chapter 3: Services use factories to create domain objects",
    "Links to Chapter 4: Entities map to database tables via JPA annotations",
  ],

  objectives: [
    "Differentiate between entities (have identity) and value objects (defined by values)",
    "Implement validation rules inside domain objects (e.g., Money rejects negative amounts)",
    "Use factories to centralize object creation and validation",
    "Use the builder pattern for objects with many optional fields",
    "Identify which domain objects belong in example systems",
  ],

  keyConcepts: [
    "Entities: Represent things with identity that persists over time. Examples: Customer (ID: CUST-001 remains same even if name changes), Order (ORDER-123), Cart, Product. Equality is based on ID, not fields.",
    "Value Objects: Represent concepts defined entirely by their attributes. Examples: Money (amount + currency), CustomerName (firstName + lastName), ProductId, Address. Equality is based on all fields — two Money objects with $10 USD are equal.",
    "Value Objects with Behavior: Value objects should contain domain logic. Money.add(Money other) returns new Money. Money.multiply(int quantity) returns new Money. This keeps rules in the domain, not services.",
    "Factories: Centralize object creation with validation. CustomerFactory.createCustomer(name, email) validates inputs, generates ID, returns Customer. Ensures invalid objects never exist.",
    "Builder Pattern: Used when objects have many fields or complex validation. Order.Builder().setOrderId().setCustomerName().setAmount().build(). Prevents partially-built objects from being used.",
    "Business Rule Examples: Money constructor throws IllegalArgumentException if amount < 0. Product has reduceStock(quantity) that throws if stock would go negative. Order total is sum of line items.",
    "Why Validate in Domain: If validation is in services, you might forget to call it. Validation in constructors/factories ensures invalid objects CANNOT be created.",
  ],

  content:
    "Domain objects are the heart of DDD. Entities (Customer, Order, Cart) have identity — an ID that stays constant even when other fields change. Value objects (Money, CustomerName, ProductId) are defined entirely by their data; two Money objects with $10 are interchangeable. Factories centralize object creation with validation, ensuring invalid objects never exist. Builders make complex object construction readable and safe. All business rules (no negative money, stock can't go below zero) belong inside these domain objects, not in services. This keeps the domain pure and ensures rules are always enforced.",

  additionalKeyPoints: [
    "Entity Equality: Two Customer objects with same ID are the same customer, even if names differ. Implement equals() and hashCode() based on ID.",
    "Value Object Equality: Two Money objects with same amount and currency are equal. Implement equals() and hashCode() based on ALL fields.",
    "Immutability: Value objects should be immutable — create new objects for changes. Money.add() returns new Money, doesn't modify original.",
    "Factory vs Constructor: Use factory when creation requires business logic (generated IDs, choosing subclass). Use simple constructor for simple value objects.",
    "Builder vs Factory: Use builder for objects with many optional fields. Use factory for objects with mandatory fields and validation.",
    "Money Class Example: Constructor validates amount >= 0. add(Money) returns new Money. multiply(int) returns new Money. No setters — immutable.",
    "CustomerName Value Object: Validates firstName and lastName not null/empty. Combines them for fullName(). No ID.",
    "Cart Entity: Has ID, List<CartItem>. addItem() validates quantity > 0, updates or adds item. Calculates total() using Money arithmetic.",
    "Product Entity: Has ID, name, price (Money), stockQuantity. reduceStock() throws exception if insufficient stock.",
    "Order Factory: Accepts customer and cart. Validates cart not empty. Generates order ID. Creates OnlineOrder or InStoreOrder based on request.",
  ],

  codeExamples: [
    {
      description: "Money value object - immutable with validation and arithmetic (complete)",
      language: "java",
      code: 'public class Money {\n    private final double amount;\n    private final String currency;  // added currency for completeness\n\n    public Money(double amount, String currency) {\n        // BUSINESS RULE: Money cannot be negative\n        if (amount < 0) {\n            throw new IllegalArgumentException("Amount cannot be negative");\n        }\n        if (currency == null || currency.isEmpty()) {\n            throw new IllegalArgumentException("Currency is required");\n        }\n        this.amount = amount;\n        this.currency = currency;\n    }\n    \n    // Convenience constructor for USD\n    public Money(double amount) {\n        this(amount, "USD");\n    }\n\n    public double getAmount() { return amount; }\n    public String getCurrency() { return currency; }\n\n    // Returns NEW Money object (immutable)\n    public Money add(Money other) {\n        if (!this.currency.equals(other.currency)) {\n            throw new IllegalArgumentException("Cannot add different currencies");\n        }\n        return new Money(this.amount + other.amount, this.currency);\n    }\n\n    // Returns NEW Money object (immutable)\n    public Money multiply(int quantity) {\n        return new Money(this.amount * quantity, this.currency);\n    }\n    \n    // Returns NEW Money object with discount applied\n    public Money applyDiscount(double percentage) {\n        if (percentage < 0 || percentage > 100) {\n            throw new IllegalArgumentException("Discount must be between 0 and 100");\n        }\n        return new Money(this.amount * (1 - percentage / 100), this.currency);\n    }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (!(o instanceof Money)) return false;\n        Money money = (Money) o;\n        return Double.compare(money.amount, amount) == 0 \n            && currency.equals(money.currency);\n    }\n\n    @Override\n    public int hashCode() {\n        return Objects.hash(amount, currency);\n    }\n    \n    @Override\n    public String toString() {\n        return String.format("%.2f %s", amount, currency);\n    }\n}',
    },
    {
      description: "CartItem value object (referenced by Cart entity)",
      language: "java",
      code: '// VALUE OBJECT - no identity, defined by productId + price\npublic class CartItem {\n    private final ProductId productId;\n    private int quantity;\n    private final Money unitPrice;  // price at time of adding to cart\n    \n    public CartItem(ProductId productId, int quantity, Money unitPrice) {\n        if (quantity <= 0) {\n            throw new IllegalArgumentException("Quantity must be positive");\n        }\n        if (unitPrice.getAmount() <= 0) {\n            throw new IllegalArgumentException("Price must be positive");\n        }\n        this.productId = productId;\n        this.quantity = quantity;\n        this.unitPrice = unitPrice;\n    }\n    \n    public ProductId getProductId() { return productId; }\n    public int getQuantity() { return quantity; }\n    public Money getUnitPrice() { return unitPrice; }\n    \n    public void increaseQuantity(int additional) {\n        if (additional <= 0) {\n            throw new IllegalArgumentException("Additional quantity must be positive");\n        }\n        this.quantity += additional;\n    }\n    \n    public void decreaseQuantity(int decrement) {\n        if (decrement <= 0) {\n            throw new IllegalArgumentException("Decrement must be positive");\n        }\n        if (decrement > quantity) {\n            throw new IllegalArgumentException("Cannot remove more than available");\n        }\n        this.quantity -= decrement;\n    }\n    \n    public Money getTotal() {\n        return unitPrice.multiply(quantity);\n    }\n    \n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (!(o instanceof CartItem)) return false;\n        CartItem item = (CartItem) o;\n        return productId.equals(item.productId) && unitPrice.equals(item.unitPrice);\n    }\n    \n    @Override\n    public int hashCode() {\n        return Objects.hash(productId, unitPrice);\n    }\n}',
    },
    {
      description: "Cart entity with identity and business logic (complete with CartItem)",
      language: "java",
      code: '// ENTITY - has identity (cartId)\npublic class Cart {\n    private final String id;  // IDENTITY - never changes\n    private final List<CartItem> items = new ArrayList<>();\n    private CartStatus status;\n\n    public Cart(String id) {\n        if (id == null || id.isEmpty()) {\n            throw new IllegalArgumentException("Cart ID required");\n        }\n        this.id = id;\n        this.status = CartStatus.ACTIVE;\n    }\n\n    public void addItem(ProductId productId, int quantity, Money price) {\n        if (status != CartStatus.ACTIVE) {\n            throw new IllegalStateException("Cannot add items to " + status + " cart");\n        }\n        if (quantity <= 0) {\n            throw new IllegalArgumentException("Quantity must be positive");\n        }\n        \n        // BUSINESS RULE: If item exists, increase quantity\n        Optional<CartItem> existing = items.stream()\n                .filter(i -> i.getProductId().equals(productId))\n                .findFirst();\n\n        if (existing.isPresent()) {\n            existing.get().increaseQuantity(quantity);\n        } else {\n            items.add(new CartItem(productId, quantity, price));\n        }\n    }\n    \n    public void removeItem(ProductId productId, int quantity) {\n        Optional<CartItem> existing = items.stream()\n                .filter(i -> i.getProductId().equals(productId))\n                .findFirst();\n                \n        if (existing.isEmpty()) {\n            throw new IllegalArgumentException("Product not in cart");\n        }\n        \n        CartItem item = existing.get();\n        if (quantity >= item.getQuantity()) {\n            items.remove(item);  // remove entirely\n        } else {\n            item.decreaseQuantity(quantity);\n        }\n    }\n\n    public Money getTotal() {\n        Money total = new Money(0);\n        for (CartItem item : items) {\n            total = total.add(item.getTotal());\n        }\n        return total;\n    }\n    \n    public int getItemCount() {\n        return items.stream().mapToInt(CartItem::getQuantity).sum();\n    }\n    \n    public void checkout() {\n        if (items.isEmpty()) {\n            throw new IllegalStateException("Cannot checkout empty cart");\n        }\n        this.status = CartStatus.CHECKED_OUT;\n    }\n\n    public String getId() { return id; }\n    public List<CartItem> getItems() { return Collections.unmodifiableList(items); }\n    public CartStatus getStatus() { return status; }\n    \n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (!(o instanceof Cart)) return false;\n        Cart cart = (Cart) o;\n        return id.equals(cart.id);  // Entity equality = ID only\n    }\n    \n    @Override\n    public int hashCode() {\n        return id.hashCode();\n    }\n}\n\npublic enum CartStatus {\n    ACTIVE, CHECKED_OUT, ABANDONED\n}',
    },
    {
      description: "ProductId value object (type safety over String)",
      language: "java",
      code: '// VALUE OBJECT - wraps String for type safety\npublic class ProductId {\n    private final String value;\n    \n    public ProductId(String value) {\n        if (value == null || value.trim().isEmpty()) {\n            throw new IllegalArgumentException("Product ID cannot be empty");\n        }\n        // Validation: must match pattern PROD-XXX-XXX\n        if (!value.matches("PROD-\\\\d{3}-\\\\d{3}")) {\n            throw new IllegalArgumentException("Invalid Product ID format. Expected PROD-XXX-XXX");\n        }\n        this.value = value;\n    }\n    \n    public String getValue() { return value; }\n    \n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (!(o instanceof ProductId)) return false;\n        ProductId that = (ProductId) o;\n        return value.equals(that.value);\n    }\n    \n    @Override\n    public int hashCode() {\n        return value.hashCode();\n    }\n    \n    @Override\n    public String toString() {\n        return value;\n    }\n}\n\n// Usage shows type safety benefit:\npublic class OrderService {\n    // Clear intent - expects ProductId, not just any String\n    public void addToCart(CartId cartId, ProductId productId, int quantity) { }\n    \n    // Wrong: findById(String ambiguous) - could be product, customer, or order ID\n    // Right: findById(ProductId productId) - type-safe\n}',
    },
    {
      description: "CustomerName value object with validation (complete)",
      language: "java",
      code: '// VALUE OBJECT - no identity, validated at construction\npublic class CustomerName {\n    private final String firstName;\n    private final String lastName;\n    \n    public CustomerName(String firstName, String lastName) {\n        if (firstName == null || firstName.trim().isEmpty()) {\n            throw new IllegalArgumentException("First name is required");\n        }\n        if (lastName == null || lastName.trim().isEmpty()) {\n            throw new IllegalArgumentException("Last name is required");\n        }\n        if (firstName.length() > 50) {\n            throw new IllegalArgumentException("First name cannot exceed 50 characters");\n        }\n        if (lastName.length() > 50) {\n            throw new IllegalArgumentException("Last name cannot exceed 50 characters");\n        }\n        this.firstName = firstName.trim();\n        this.lastName = lastName.trim();\n    }\n    \n    public String getFirstName() { return firstName; }\n    public String getLastName() { return lastName; }\n    \n    public String getFullName() {\n        return firstName + " " + lastName;\n    }\n    \n    public String getFormalName() {\n        return lastName + ", " + firstName;\n    }\n    \n    public CustomerName capitalize() {\n        // Returns NEW value object (immutability)\n        String cappedFirst = firstName.substring(0, 1).toUpperCase() + firstName.substring(1).toLowerCase();\n        String cappedLast = lastName.substring(0, 1).toUpperCase() + lastName.substring(1).toLowerCase();\n        return new CustomerName(cappedFirst, cappedLast);\n    }\n    \n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (!(o instanceof CustomerName)) return false;\n        CustomerName that = (CustomerName) o;\n        return firstName.equals(that.firstName) && lastName.equals(that.lastName);\n    }\n    \n    @Override\n    public int hashCode() {\n        return Objects.hash(firstName, lastName);\n    }\n}',
    },
    {
      description: "Product entity with stock management business rules",
      language: "java",
      code: '// ENTITY - has identity (productId), manages stock\npublic class Product {\n    private final ProductId id;  // identity\n    private String name;\n    private Money price;\n    private int stockQuantity;\n    private ProductStatus status;\n    \n    public Product(ProductId id, String name, Money price, int stockQuantity) {\n        this.id = id;\n        this.name = name;\n        this.price = price;\n        this.stockQuantity = stockQuantity;\n        this.status = stockQuantity > 0 ? ProductStatus.IN_STOCK : ProductStatus.OUT_OF_STOCK;\n    }\n    \n    // BUSINESS RULE: Cannot reduce stock below zero\n    public void reduceStock(int quantity) {\n        if (quantity <= 0) {\n            throw new IllegalArgumentException("Quantity must be positive");\n        }\n        if (quantity > stockQuantity) {\n            throw new IllegalStateException(\n                String.format("Insufficient stock. Available: %d, Requested: %d", \n                    stockQuantity, quantity)\n            );\n        }\n        this.stockQuantity -= quantity;\n        if (stockQuantity == 0) {\n            this.status = ProductStatus.OUT_OF_STOCK;\n        }\n    }\n    \n    // BUSINESS RULE: Can increase stock (restocking)\n    public void increaseStock(int quantity) {\n        if (quantity <= 0) {\n            throw new IllegalArgumentException("Quantity must be positive");\n        }\n        this.stockQuantity += quantity;\n        if (this.status == ProductStatus.OUT_OF_STOCK && stockQuantity > 0) {\n            this.status = ProductStatus.IN_STOCK;\n        }\n    }\n    \n    // BUSINESS RULE: Price can only be increased by max 10% per day (simplified)\n    public void updatePrice(Money newPrice) {\n        double maxIncrease = price.getAmount() * 1.10;\n        if (newPrice.getAmount() > maxIncrease) {\n            throw new IllegalStateException(\n                String.format("Price increase cannot exceed 10%%. Max: %.2f, Attempted: %.2f",\n                    maxIncrease, newPrice.getAmount())\n            );\n        }\n        this.price = newPrice;\n    }\n    \n    public boolean isInStock() {\n        return status == ProductStatus.IN_STOCK && stockQuantity > 0;\n    }\n    \n    // Getters\n    public ProductId getId() { return id; }\n    public String getName() { return name; }\n    public Money getPrice() { return price; }\n    public int getStockQuantity() { return stockQuantity; }\n    public ProductStatus getStatus() { return status; }\n}\n\npublic enum ProductStatus {\n    IN_STOCK, OUT_OF_STOCK, DISCONTINUED\n}',
    },
    {
      description: "Factory pattern with validation (CustomerFactory)",
      language: "java",
      code: 'public class CustomerFactory {\n    private static final AtomicInteger idGenerator = new AtomicInteger(1);\n    \n    // Factory method with validation and ID generation\n    public static Customer createCustomer(String name, String email) {\n        // VALIDATION: Factory ensures no invalid objects are created\n        if (name == null || name.trim().isEmpty()) {\n            throw new IllegalArgumentException("Customer name cannot be empty");\n        }\n        if (email == null || !email.matches("^[A-Za-z0-9+_.-]+@(.+)$")) {\n            throw new IllegalArgumentException("Valid email required");\n        }\n        \n        // Generate ID automatically\n        String id = "CUST-" + String.format("%05d", idGenerator.getAndIncrement());\n        \n        // Only creates object if validation passes\n        return new Customer(id, name.trim(), email.toLowerCase());\n    }\n    \n    // Overloaded factory method with specific ID (for testing or migration)\n    public static Customer createCustomer(String id, String name, String email) {\n        if (id == null || id.trim().isEmpty()) {\n            throw new IllegalArgumentException("Customer ID cannot be empty");\n        }\n        if (name == null || name.trim().isEmpty()) {\n            throw new IllegalArgumentException("Customer name cannot be empty");\n        }\n        if (email == null || !email.contains("@")) {\n            throw new IllegalArgumentException("Valid email required");\n        }\n        return new Customer(id, name.trim(), email.toLowerCase());\n    }\n}\n\n// Customer entity (with identity)\npublic class Customer {\n    private final String id;\n    private String name;\n    private String email;\n    private CustomerStatus status;\n    \n    // Package-private constructor - only factory can create\n    Customer(String id, String name, String email) {\n        this.id = id;\n        this.name = name;\n        this.email = email;\n        this.status = CustomerStatus.ACTIVE;\n    }\n    \n    // Business methods...\n    \n    public String getId() { return id; }\n}\n\n// Usage - factory prevents invalid state:\nCustomer customer = CustomerFactory.createCustomer("John Doe", "john@email.com");\n// CustomerFactory.createCustomer("", "email"); // THROWS EXCEPTION',
    },
    {
      description: "Builder pattern for complex objects (Order with inheritance) - complete",
      language: "java",
      code: '// Base Order class with Builder\npublic abstract class Order {\n    protected final String orderId;\n    protected final LocalDateTime orderDate;\n    protected String status;\n    protected final CustomerId customerId;\n    protected Money total;\n    \n    protected Order(Builder<?> builder) {\n        this.orderId = builder.orderId;\n        this.orderDate = builder.orderDate;\n        this.status = builder.status;\n        this.customerId = builder.customerId;\n        this.total = builder.total;\n    }\n    \n    // Abstract builder with self-referential generic type\n    public abstract static class Builder<T extends Builder<T>> {\n        private String orderId;\n        private LocalDateTime orderDate;\n        private String status;\n        private CustomerId customerId;\n        private Money total;\n        \n        public T orderId(String orderId) {\n            this.orderId = orderId;\n            return self();\n        }\n        \n        public T orderDate(LocalDateTime orderDate) {\n            this.orderDate = orderDate;\n            return self();\n        }\n        \n        public T status(String status) {\n            this.status = status;\n            return self();\n        }\n        \n        public T customerId(CustomerId customerId) {\n            this.customerId = customerId;\n            return self();\n        }\n        \n        public T total(Money total) {\n            this.total = total;\n            return self();\n        }\n        \n        protected abstract T self();\n        public abstract Order build();\n        \n        protected void validate() {\n            if (orderId == null || orderId.isEmpty()) {\n                throw new IllegalStateException("Order ID is required");\n            }\n            if (customerId == null) {\n                throw new IllegalStateException("Customer ID is required");\n            }\n            if (orderDate == null) {\n                orderDate = LocalDateTime.now();  // default\n            }\n            if (status == null) {\n                status = "PENDING";  // default\n            }\n            if (total == null) {\n                total = new Money(0);  // default\n            }\n        }\n    }\n}\n\n// OnlineOrder extends Order with additional fields\npublic class OnlineOrder extends Order {\n    private final String deliveryAddress;\n    private final String shippingCode;\n    private final String trackingNumber;\n    \n    private OnlineOrder(Builder builder) {\n        super(builder);\n        this.deliveryAddress = builder.deliveryAddress;\n        this.shippingCode = builder.shippingCode;\n        this.trackingNumber = builder.trackingNumber;\n    }\n    \n    public static class Builder extends Order.Builder<Builder> {\n        private String deliveryAddress;\n        private String shippingCode;\n        private String trackingNumber;\n        \n        public Builder deliveryAddress(String deliveryAddress) {\n            this.deliveryAddress = deliveryAddress;\n            return this;\n        }\n        \n        public Builder shippingCode(String shippingCode) {\n            this.shippingCode = shippingCode;\n            return this;\n        }\n        \n        public Builder trackingNumber(String trackingNumber) {\n            this.trackingNumber = trackingNumber;\n            return this;\n        }\n        \n        @Override\n        protected Builder self() {\n            return this;\n        }\n        \n        @Override\n        public OnlineOrder build() {\n            validate();\n            // Additional validation for online order\n            if (deliveryAddress == null || deliveryAddress.isEmpty()) {\n                throw new IllegalStateException("Delivery address required for online order");\n            }\n            if (shippingCode == null || shippingCode.isEmpty()) {\n                throw new IllegalStateException("Shipping code required for online order");\n            }\n            return new OnlineOrder(this);\n        }\n    }\n}\n\n// InStoreOrder extends Order with different fields\npublic class InStoreOrder extends Order {\n    private final String storeId;\n    private final String cashierId;\n    private final LocalDateTime pickupTime;\n    \n    private InStoreOrder(Builder builder) {\n        super(builder);\n        this.storeId = builder.storeId;\n        this.cashierId = builder.cashierId;\n        this.pickupTime = builder.pickupTime;\n    }\n    \n    public static class Builder extends Order.Builder<Builder> {\n        private String storeId;\n        private String cashierId;\n        private LocalDateTime pickupTime;\n        \n        public Builder storeId(String storeId) {\n            this.storeId = storeId;\n            return this;\n        }\n        \n        public Builder cashierId(String cashierId) {\n            this.cashierId = cashierId;\n            return this;\n        }\n        \n        public Builder pickupTime(LocalDateTime pickupTime) {\n            this.pickupTime = pickupTime;\n            return this;\n        }\n        \n        @Override\n        protected Builder self() {\n            return this;\n        }\n        \n        @Override\n        public InStoreOrder build() {\n            validate();\n            if (storeId == null || storeId.isEmpty()) {\n                throw new IllegalStateException("Store ID required for in-store order");\n            }\n            if (pickupTime == null) {\n                pickupTime = LocalDateTime.now().plusHours(1);  // default: 1 hour from now\n            }\n            return new InStoreOrder(this);\n        }\n    }\n}\n\n// Usage - readable and safe construction:\nOnlineOrder onlineOrder = new OnlineOrder.Builder()\n        .orderId("ORD-12345")\n        .customerId(new CustomerId("CUST-001"))\n        .total(new Money(299.99))\n        .deliveryAddress("123 Main St, Springfield, IL 62701")\n        .shippingCode("SHIP-EXPRESS")\n        .trackingNumber("1Z999AA10123456784")\n        .status("PAID")\n        .build();\n\nInStoreOrder inStoreOrder = new InStoreOrder.Builder()\n        .orderId("ORD-12346\")\n        .customerId(new CustomerId(\"CUST-002\"))\n        .total(new Money(49.99))\n        .storeId(\"STORE-DOWNTOWN\")\n        .cashierId(\"CASH-JOHN\")\n        .pickupTime(LocalDateTime.now().plusMinutes(30))\n        .build();',
    },
  ],

  componentTable: {
    title: "DDD Component Types",
    subtitle: "Entities, Value Objects, Factories, and Builders",
    badge: "Domain Layer",
    components: [
      {
        name: "Entity",
        description: "Has persistent identity (ID stays same over time)",
        examples: "Customer, Order, Cart, Product",
      },
      {
        name: "Value Object",
        description: "Defined by attribute values (interchangeable if values match)",
        examples: "Money, CustomerName, Address, ProductId",
      },
      {
        name: "Factory",
        description: "Creates valid domain objects with validation",
        examples: "CustomerFactory, OrderFactory, CartFactory",
      },
      {
        name: "Builder",
        description: "Step-by-step construction for complex objects",
        examples: "Order.Builder, CustomerName.Builder",
      },
    ],
  },

  exercises: [
    {
      q: "For each concept, state whether it should be an Entity or Value Object: (a) A person in a hospital system, (b) A ZIP code, (c) A transaction record, (d) A temperature reading, (e) A bank account.",
      a: [
        "(a) Person → Entity (needs identity across time, even if name/address changes)",
        "(b) ZIP code → Value Object (90210 is 90210 regardless of which building)",
        "(c) Transaction record → Entity (each transaction is unique, needs audit trail)",
        "(d) Temperature reading → Value Object (36.6°C is interchangeable)",
        "(e) Bank account → Entity (account number provides identity across time)",
      ],
    },
    {
      q: "Design a ProductId value object. What validation should it have? Why should ProductId be a value object, not a primitive String?",
      a: [
        "ProductId should validate format (e.g., 'PROD-XXX-XXX'), not null/empty",
        "It's a value object because 'PROD-001' is interchangeable — only the string value matters, not identity",
        "Using a value object instead of String prevents accidental mixing with other IDs (CustomerId, OrderId)",
        "Type safety: method signatures become clear — findByProductId(ProductId id) vs findById(String ambiguous)",
        "Validation happens once, at construction time",
      ],
    },
    {
      q: "Write the constructor validation for a CustomerName value object that requires firstName and lastName (non-null, non-empty, max 50 chars). Include a getFullName() method.",
      a: [
        'public class CustomerName {\n    private final String firstName;\n    private final String lastName;\n\n    public CustomerName(String firstName, String lastName) {\n        if (firstName == null || firstName.trim().isEmpty()) {\n            throw new IllegalArgumentException("First name required");\n        }\n        if (lastName == null || lastName.trim().isEmpty()) {\n            throw new IllegalArgumentException("Last name required");\n        }\n        if (firstName.length() > 50 || lastName.length() > 50) {\n            throw new IllegalArgumentException("Name too long");\n        }\n        this.firstName = firstName.trim();\n        this.lastName = lastName.trim();\n    }\n\n    public String getFullName() {\n        return firstName + " " + lastName;\n    }\n}',
      ],
    },
    {
      q: "When would you use a Factory instead of a simple constructor? Give an example.",
      a: [
        "Use a factory when creation requires:",
        "  - Generated IDs (UUID, sequence numbers)",
        "  - Choosing between subclasses (OnlineOrder vs InStoreOrder)",
        "  - Complex validation spanning multiple fields",
        "  - External data (current timestamp, user context)",
        "Example: OrderFactory.createOnlineOrder(cart, customer) validates cart not empty, generates ORDER-XXX, returns OnlineOrder; createInStoreOrder(cart, storeId) returns different subclass",
      ],
    },
    {
      q: "What is the problem this Builder solves? Why not just use a constructor with 10 parameters?",
      a: [
        "Constructor with 10 parameters:",
        "  - Caller must remember parameter order (easy to mix up)",
        "  - Many nulls for optional fields (ugly and error-prone)",
        "  - Hard to read — which parameter is which?",
        "Builder solution:",
        "  - Fluent interface: .setName().setPrice().setQuantity()",
        "  - Optional fields can be skipped",
        "  - Validation before build() ensures object is valid",
        "  - Readable and self-documenting",
      ],
    },
  ],
};
