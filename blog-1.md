# TypeScript: Why `any` is Dangerous and Why `unknown` is Safer

## Introduction

When I first started learning TypeScript, every time I didn't know a type, I just wrote `any` and moved on. It felt like a quick fix. But over time I realized — `any` isn't a fix, it's a trap.

In this post, I want to explain why `any` is called a "type safety hole," why `unknown` is the better choice, and what type narrowing actually means.

---

## The Problem with `any`

When you use `any`, you're basically telling TypeScript: *"Stop checking this, I know what I'm doing."* TypeScript listens — and stays silent even when you're making a mistake.

```typescript
function greet(value: any) {
    return value.toUpperCase();
}

greet(42); // No error from TypeScript, but crashes at runtime!
```

The compiler doesn't complain. But when the program runs, it breaks. That's the type safety hole — bugs that could've been caught early slip through and show up at the worst time.

---

## Why `unknown` is Better

`unknown` tells TypeScript: *"This could be anything — but you have to prove what it is before using it."*

```typescript
function greet(value: unknown) {
    return value.toUpperCase(); // Compile-time Error! TypeScript stops you here.
}
```

Now TypeScript forces you to check the type first. The error shows up while writing code, not when the app is live. That's exactly what TypeScript is for.

---

## Type Narrowing

Type narrowing is how you "prove" the type to TypeScript using conditions. Once you check, TypeScript automatically understands the type inside that block.

```typescript
function process(value: unknown): string {
    if (typeof value === "string") {
        return value.toUpperCase(); // TypeScript knows it's a string here
    }
    if (typeof value === "number") {
        return value.toFixed(2); // TypeScript knows it's a number here
    }
    return "Unsupported type";
}
```

Each `if` block narrows the type down. TypeScript tracks this and gives you full type safety inside each branch.

---

## Conclusion

`any` feels convenient but it quietly removes the safety that TypeScript was built to provide. `unknown` gives you the same flexibility but keeps you honest — you have to verify before you use.

Whenever you're dealing with data whose type you can't predict — API responses, user inputs, third-party libraries — reach for `unknown` and use type narrowing to handle it properly. Your future self will thank you.
