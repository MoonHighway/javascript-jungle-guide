# Truthy and Falsy

JavaScript uses the concept of truthy/falsy to describe whether a value is true or false. Some of the rules of truthiness or falsyness can be a bit confusing.

A string is truthy:

```javascript select=1
let isAnything = "hello";
if (isAnything) {
  console.log("It's something");
} else {
  console.log("It's nothing");
}
```

An empty string is falsy:

```javascript select=1
let isAnything = "hello";
if (isAnything) {
  console.log("It's something");
} else {
  console.log("It's nothing");
}
```

A number is truthy:

```javascript
let isAnything = 7;
```

Zero is falsy:

```javascript
let isAnything = 0;
```

Negative numbers are truthy:

```javascript
let isAnything = -1;
```
