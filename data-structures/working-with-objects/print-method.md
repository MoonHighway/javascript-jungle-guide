# Add Print Method to Object

Objects can have methods, meaning functions that are embedded in the object.

1. The print method will log details about the agenda. Add the print method to the agenda:

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

2. Then call the method:

```javascript
agenda.print();
```

3. Values from the object can also be referenced with `this`. `this` refers to the object:

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

3. A common gotcha with `this` in JavaScript is when it's used in combination with an arrow function. Notice what `this` refers to when this is updated to an arrow.

```javascript select=1
print: () => {
  // console.log(this);
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

<Error>
This step will cause an error. You can console.log(this) inside of the function to show that this refers to the current module you're in.
</Error>

<Question title="What is this?">
this refers to whatever scope you're in. In Node.js, it's either a function/object or the file. In the browser, it's a function/object or the window.
</Question>
