# Assignment 1 — Advanced Problem Solving with TypeScript & OOP

This repository contains solutions for the B7A1 assignment, covering fundamental TypeScript concepts including type safety, generics, interfaces, class inheritance, and OOP principles.

---

## 📁 File Structure

```
├── solutions.ts   # All 7 coding solutions
├── blog-1.md      # Blog: any vs unknown & Type Narrowing
├── blog-2.md      # Blog: The Four Pillars of OOP in TypeScript
└── README.md
```

---

## 💻 Problem Solutions (`solutions.ts`)

| #  | Function / Class        | Description                                               |
|----|-------------------------|-----------------------------------------------------------|
| 1  | `filterEvenNumbers`     | Filters and returns only even numbers from an array       |
| 2  | `reverseString`         | Reverses the characters of a given string                 |
| 3  | `checkType`             | Type guard returning `"String"` or `"Number"` via `typeof`|
| 4  | `getProperty`           | Generic function to safely access a typed object property |
| 5  | `toggleReadStatus`      | Adds `isRead: true` to a `Book` interface object          |
| 6  | `Person` / `Student`    | Class inheritance with a `getDetails()` method            |
| 7  | `getIntersection`       | Returns elements common to two number arrays              |

---

## 📝 Blog Posts

### [blog-1.md](./blog-1.md) — `any` vs `unknown` & Type Narrowing
Explains why `any` is a type safety hole, how `unknown` enforces safe handling of unpredictable data, and demonstrates type narrowing with `typeof`, `instanceof`, and custom type guards.

### [blog-2.md](./blog-2.md) — The Four Pillars of OOP in TypeScript
A deep dive into **Encapsulation**, **Inheritance**, **Abstraction**, and **Polymorphism** — with practical TypeScript code examples showing how each pillar reduces complexity in large-scale projects.

---

## 🛠️ How to Run

Make sure you have [Node.js](https://nodejs.org) and [ts-node](https://typestrong.org/ts-node/) installed.

```bash
npx ts-node solutions.ts
```

Or compile with the TypeScript compiler:

```bash
tsc solutions.ts
node solutions.js
```
