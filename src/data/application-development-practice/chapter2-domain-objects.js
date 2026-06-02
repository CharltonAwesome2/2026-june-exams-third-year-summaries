// chapter2-domain-objects.js

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
      description: "Money value object with validation and arithmetic",
      language: "java",
      code: 'public class Money {\n    private final double amount;\n\n    public Money(double amount) {\n        if (amount < 0) {\n            throw new IllegalArgumentException("Amount cannot be negative");\n        }\n        this.amount = amount;\n    }\n\n    public Money add(Money other) {\n        return new Money(this.amount + other.amount);\n    }\n\n    public Money multiply(int quantity) {\n        return new Money(this.amount * quantity);\n    }\n\n    public double getAmount() { return amount; }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (!(o instanceof Money)) return false;\n        Money money = (Money) o;\n        return Double.compare(money.amount, amount) == 0;\n    }\n\n    @Override\n    public int hashCode() {\n        return Double.hashCode(amount);\n    }\n}',
    },
    {
      description: "Money value object - immutable with validation and arithmetic",
      language: "java",
      code: 'public class Money {\n    private final double amount;\n\n    public Money(double amount) {\n        // BUSINESS RULE: Money cannot be negative\n        if (amount < 0) {\n            throw new IllegalArgumentException("Amount cannot be negative");\n        }\n        this.amount = amount;\n    }\n\n    public double getAmount() { return amount; }\n\n    // Returns NEW Money object (immutable)\n    public Money add(Money other) {\n        return new Money(this.amount + other.amount);\n    }\n\n    // Returns NEW Money object (immutable)\n    public Money multiply(int quantity) {\n        return new Money(this.amount * quantity);\n    }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (!(o instanceof Money)) return false;\n        Money money = (Money) o;\n        return Double.compare(money.amount, amount) == 0;\n    }\n\n    // Two Money objects with same amount are INTERCHANGEABLE\n    // That\'s why we override equals/hashCode\n}',
    },
    {
      description: "Cart entity with identity and business logic",
      language: "java",
      code: "public class Cart {\n    private final String id;  // IDENTITY - never changes\n    private final List<CartItem> items = new ArrayList<>();\n\n    public Cart(String id) {\n        this.id = id;  // Identity assigned at creation\n    }\n\n    public void addItem(ProductId productId, int quantity, Money price) {\n        // BUSINESS RULE: If item exists, increase quantity\n        Optional<CartItem> existing = items.stream()\n                .filter(i -> i.getProductId().equals(productId))\n                .findFirst();\n\n        if (existing.isPresent()) {\n            existing.get().increaseQuantity(quantity);\n        } else {\n            items.add(new CartItem(productId, quantity, price));\n        }\n    }\n\n    public Money getTotal() {\n        Money total = new Money(0);\n        for (CartItem item : items) {\n            total = total.add(item.getTotal());\n        }\n        return total;\n    }\n\n    public String getId() { return id; }\n}",
    },
    {
      description: "Factory pattern with validation (CustomerFactory)",
      language: "java",
      code: 'public class CustomerFactory {\n    public static Customer createCustomer(String id, String name, String email) {\n        // VALIDATION: Factory ensures no invalid objects are created\n        if (name == null || name.isEmpty()) {\n            throw new IllegalArgumentException("Name cannot be empty");\n        }\n        if (email == null || !email.contains("@")) {\n            throw new IllegalArgumentException("Valid email required");\n        }\n        // Only creates object if validation passes\n        return new Customer(id, name, email);\n    }\n}\n\n// Usage - factory prevents invalid state:\nCustomer customer = CustomerFactory.createCustomer("1", "John", "john@email.com");\n// CustomerFactory.createCustomer("2", "", "email"); // THROWS EXCEPTION',
    },
    {
      description: "Builder pattern for complex objects (Order with inheritance)",
      language: "java",
      code: 'public class OnlineOrder extends Order {\n    private String deliveryAddress;\n    private String shippingCode;\n\n    private OnlineOrder(Builder builder) {\n        super(builder);\n        this.deliveryAddress = builder.deliveryAddress;\n        this.shippingCode = builder.shippingCode;\n    }\n\n    public static class Builder extends Order.Builder {\n        private String deliveryAddress;\n        private String shippingCode;\n\n        @Override\n        public Builder orderId(String orderId) {\n            super.orderId(orderId);\n            return this;  // Returns THIS builder for chaining\n        }\n\n        @Override\n        public Builder date(Date date) {\n            super.date(date);\n            return this;\n        }\n\n        public Builder deliveryAddress(String deliveryAddress) {\n            this.deliveryAddress = deliveryAddress;\n            return this;\n        }\n\n        public Builder shippingCode(String shippingCode) {\n            this.shippingCode = shippingCode;\n            return this;\n        }\n\n        @Override\n        public OnlineOrder build() {\n            return new OnlineOrder(this);  // Validates then creates\n        }\n    }\n}\n\n// Usage - readable and safe construction:\nOnlineOrder order = new OnlineOrder.Builder()\n        .orderId("ORD-123")\n        .date(new Date())\n        .status("CREATED")\n        .deliveryAddress("123 Main St")\n        .shippingCode("SHIP-456")\n        .build();',
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
