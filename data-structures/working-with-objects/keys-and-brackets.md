# Keys and Brackets

In this lesson, we'll dig into some other little tips about working with objects.

1. Loop through objects with the `for/in` loop:

```javascript
for (let key in agenda) {
  console.log(key);
}
```

2. You can also access the field values with brackets:

```javascript
for (let key in agenda) {
  console.log(`${key} : ${agenda[key]}`);
}
```

3. If you ever are in a situation where your key has a space in it (i.e. two words), you can wrap in square brackets and quotes.

Access the same way, with brackets and quotes:

```javascript
const agenda = {
  name: "JavaScript Jungle",
  ["max participants"]: 20
};

console.log(agenda["max participants"]);
```
