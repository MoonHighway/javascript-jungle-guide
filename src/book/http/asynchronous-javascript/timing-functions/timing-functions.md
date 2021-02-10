# Timing Functions

(1) How to wait 6 seconds before showtime

```javascript
function showtime() {
  console.log("Doug E. Fresh it's showtime!");
}

console.log("6 seconds, Doug E. Fresh you're on!");
showTime();
```

(2) Running JavaScript synchronously

```javascript
showTime();
console.log("6 seconds, Doug E. Fresh you're on!");
```

(3) Using `setTimeout`

```javascript
function showtime() {
  console.log("Doug E. Fresh it's showtime!");
}

setTimeout(showtime, 6000);
console.log("6 seconds, Doug E. Fresh you're on!");
```
