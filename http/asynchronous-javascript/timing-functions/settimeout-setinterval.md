# setTimeout and setInterval

(1) using `setTimeout` 

```javascript
function showtime() {
  console.log("Doug E. Fresh it's showtime!");
}

setTimeout(showtime, 6000);
console.log("6 seconds, Doug E. Fresh you're on!");
```

(2) using `setInterval` 

```javascript
const theTicking = setInterval(tick, 1000);

function tick() {
  const now = new Date();
  console.log(now.toLocaleTimeString());
}
```

(3) clearing Intervals

```javascript
const theTicking = setInterval(tick, 1000);

function tick() {
  const now = new Date();
  console.log(now.toLocaleTimeString());
}

setTimeout(() => {
  clearInterval(theTicking);
  console.log("ticking has stopped");
}, 5000);
```

(4) Finish the Clock

```javascript
function tick() {
  const now = new Date();
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(now.toLocaleTimeString());
}

process.stdin.on("data", () => {
  process.exit();
});

console.log("Press (enter) to quit! \n\n");

tick();
setInterval(tick, 1000);
```