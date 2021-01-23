# Keys and Brackets (5 min)

(1) For in loop

```javascript
for (let key in agenda) {
  console.log(key);
}
```

(2) Field Types and Values

```javascript
for (let key in agenda) {
  console.log(typeof agenda[key]);
  console.log(agenda[key]);
}
```

(3) Bracket Notation

```javascript
const agenda = {
  name: "JavaScript Jungle",
  ["max partacipants"]: 20
};

console.log(agenda["max participants"]);
```

(4) bracket notation with string variables

```javascript
const fieldName = "participants";

const agenda = {
  name: "JavaScript Jungle",
  [fieldName]: 20
};

console.log(agenda);
```
