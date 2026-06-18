# The Four Pillars of OOP in TypeScript

## Introduction

When a project is small, you can get away with just writing functions and moving on. But as things grow — more files, more developers, more features — you start feeling the pain of unorganized code. That's where Object-Oriented Programming (OOP) comes in.

TypeScript supports OOP really well. Its four main pillars — **Encapsulation, Inheritance, Abstraction, and Polymorphism** — each solve a specific kind of problem that shows up in large codebases.

---

## 1. Encapsulation — Keep Internals Private

Encapsulation is about protecting the internal state of a class. Instead of letting anyone modify data directly, you expose controlled methods.

```typescript
class BankAccount {
    private balance: number;

    constructor(amount: number) {
        this.balance = amount;
    }

    deposit(amount: number): void {
        if (amount > 0) this.balance += amount;
    }

    getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount(1000);
account.deposit(500);
// account.balance = 0; // Error! balance is private
console.log(account.getBalance()); // 1500
```

Without encapsulation, anyone could set `balance` to whatever they want and you'd have no control over it.

---

## 2. Inheritance — Share Logic, Don't Repeat It

Inheritance lets one class reuse another class's properties and methods. This removes duplication and keeps shared logic in one place.

```typescript
class Employee {
    constructor(public name: string, public salary: number) {}

    getSummary(): string {
        return `${this.name} earns $${this.salary}`;
    }
}

class Manager extends Employee {
    constructor(name: string, salary: number, public department: string) {
        super(name, salary);
    }

    getSummary(): string {
        return `${super.getSummary()} and manages the ${this.department} department`;
    }
}

const mgr = new Manager("Sarah", 90000, "Engineering");
console.log(mgr.getSummary());
// Sarah earns $90000 and manages the Engineering department
```

If the base logic changes, you update it once in `Employee` and every subclass gets the update automatically.

---

## 3. Abstraction — Hide Complexity, Show What Matters

Abstraction means hiding the "how" and only exposing the "what." Abstract classes define a contract — subclasses must fill in the details.

```typescript
abstract class Shape {
    abstract getArea(): number;

    describe(): string {
        return `This shape has an area of ${this.getArea().toFixed(2)}`;
    }
}

class Circle extends Shape {
    constructor(private radius: number) { super(); }
    getArea(): number { return Math.PI * this.radius ** 2; }
}

class Rectangle extends Shape {
    constructor(private w: number, private h: number) { super(); }
    getArea(): number { return this.w * this.h; }
}

console.log(new Circle(5).describe());    // area of 78.54
console.log(new Rectangle(4, 6).describe()); // area of 24.00
```

The `describe()` method doesn't know or care what shape it's dealing with — it just calls `getArea()` and trusts the subclass to handle it.

---

## 4. Polymorphism — One Interface, Many Behaviors

Polymorphism means the same method name behaves differently depending on which class it belongs to. This makes code flexible and easy to extend.

```typescript
interface Printable {
    print(): string;
}

class Invoice implements Printable {
    print(): string { return "Printing Invoice..."; }
}

class Report implements Printable {
    print(): string { return "Printing Report..."; }
}

function sendToPrinter(doc: Printable): void {
    console.log(doc.print());
}

sendToPrinter(new Invoice()); // Printing Invoice...
sendToPrinter(new Report());  // Printing Report...
```

You can add a new document type tomorrow — say `Receipt` — and `sendToPrinter` works with it without any changes.

---

## Conclusion

These four pillars aren't just theory — they're practical tools that solve real problems. Encapsulation protects your data. Inheritance removes duplication. Abstraction hides complexity. Polymorphism makes your code open to extension without breaking what already works.

In a large TypeScript project, applying all four consistently is what separates maintainable code from a codebase nobody wants to touch.
