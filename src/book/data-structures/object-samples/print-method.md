# Add Print Method to Object

(1) Print Method

```javascript
print() {
    console.log(`
        ${agenda.name.toUpperCase()}
        ===========================
        taught by ${agenda.instructor.name} from ${agenda.instructor.hometown}
        topics: ${agenda.topics.join(", ")}
    `);
}
```

---

Bonus:

(a) Add Print Function to Object

```javascript
print() {
    console.log(`
        ${this.name.toUpperCase()}
        ===========================
        taught by ${this.instructor.name} from ${this.instructor.hometown}
        topics: ${this.topics.join(", ")}
    `);
}
```

(b) Introduce issues with `this` scope

```javascript
print: () => {
  console.log(`
        ${this.name.toUpperCase()}
        ===========================
        taught by ${this.instructor.name} from ${
    this.instructor.hometown
  }
        topics: ${this.topics.join(", ")}
    `);
};
```
