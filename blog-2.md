# The Four Pillars of OOP in TypeScript: Building Scalable Applications

## Introduction

Object-Oriented Programming (OOP) is a paradigm that organizes code around objects and their interactions rather than procedures. TypeScript, with its rich type system and class-based syntax, is an excellent language for applying OOP principles. The four pillars — **Encapsulation**, **Inheritance**, **Abstraction**, and **Polymorphism** — work together to manage complexity, reduce duplication, and make large-scale applications easier to reason about and maintain.

---

## 1. Encapsulation

Encapsulation is the practice of bundling data (properties) and the methods that operate on that data into a single unit (a class), while **restricting direct access** to internal state using access modifiers.

In TypeScript, this is achieved with `private`, `protected`, and `public`.

```typescript
class BankAccount {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        if (amount > 0) this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) this.balance -= amount;
    }

    getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount(1000);
account.deposit(500);
// account.balance = 0; // Error: 'balance' is private
console.log(account.getBalance()); // 1500
```

**Why it matters:** External code cannot corrupt the internal state. All mutations go through controlled, validated methods. This is critical in large codebases where multiple developers interact with the same classes.

---

## 2. Inheritance

Inheritance allows a class (subclass) to **reuse and extend** the behavior of another class (superclass). This eliminates code duplication and creates a logical hierarchy.

```typescript
class Employee {
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    getSummary(): string {
        return `${this.name} earns $${this.salary}`;
    }
}

class Manager extends Employee {
    department: string;

    constructor(name: string, salary: number, department: string) {
        super(name, salary);
        this.department = department;
    }

    getSummary(): string {
        return `${super.getSummary()} and manages the ${this.department} department`;
    }
}

const mgr = new Manager("Sarah", 90000, "Engineering");
console.log(mgr.getSummary());
// Sarah earns $90000 and manages the Engineering department
```

**Why it matters:** Common logic lives in one place (the parent). Changes to shared behavior propagate automatically to all subclasses, reducing the risk of inconsistencies across a large project.

---

## 3. Abstraction

Abstraction means **hiding complex implementation details** and exposing only what is necessary. In TypeScript, this is achieved through `abstract` classes and interfaces.

```typescript
abstract class Shape {
    abstract getArea(): number;

    describe(): string {
        return `This shape has an area of ${this.getArea().toFixed(2)}`;
    }
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }

    getArea(): number {
        return this.width * this.height;
    }
}

const circle = new Circle(5);
const rect = new Rectangle(4, 6);

console.log(circle.describe());   // This shape has an area of 78.54
console.log(rect.describe());     // This shape has an area of 24.00
```

**Why it matters:** The `describe` method in `Shape` doesn't know or care how `getArea` is implemented. This separation of *what* from *how* makes each class independently testable and replaceable.

---

## 4. Polymorphism

Polymorphism means *"many forms."* It allows objects of different classes to be treated as instances of a **shared superclass or interface**, while each responds to the same method call in its own way.

```typescript
class Dog {
    speak(): string {
        return "Woof!";
    }
}

class Cat {
    speak(): string {
        return "Meow!";
    }
}

class Duck {
    speak(): string {
        return "Quack!";
    }
}

const animals: { speak(): string }[] = [new Dog(), new Cat(), new Duck()];

animals.forEach(animal => {
    console.log(animal.speak());
});
// Woof!
// Meow!
// Quack!
```

With interfaces, this becomes even more explicit:

```typescript
interface Printable {
    print(): string;
}

class Invoice implements Printable {
    print(): string {
        return "Printing Invoice...";
    }
}

class Report implements Printable {
    print(): string {
        return "Printing Report...";
    }
}

function sendToPrinter(doc: Printable): void {
    console.log(doc.print());
}

sendToPrinter(new Invoice()); // Printing Invoice...
sendToPrinter(new Report());  // Printing Report...
```

**Why it matters:** `sendToPrinter` doesn't need to know what kind of document it receives. You can add new document types (e.g., `Receipt`) without touching the function at all. This is the **Open/Closed Principle** in action — open for extension, closed for modification.

---

## How the Pillars Work Together

In a large-scale application, the four pillars are not independent — they reinforce each other:

| Pillar          | Role in a Large System                                    |
|-----------------|-----------------------------------------------------------|
| Encapsulation   | Protects internal state, reduces unintended side effects  |
| Inheritance     | Shares common logic, reduces code duplication             |
| Abstraction     | Hides complexity, defines clear contracts                 |
| Polymorphism    | Enables flexible, extensible, and decoupled components    |

---

## Conclusion

The four pillars of OOP are not abstract academic concepts — they are practical tools for managing the inevitable complexity of large software systems. TypeScript's type system makes applying these principles safer and more explicit than plain JavaScript. By designing with encapsulation, inheritance, abstraction, and polymorphism in mind from the start, teams can build codebases that are easier to extend, test, and maintain as requirements evolve.
