# Fetching Data

(1) Send POST Request (CLIENT JS FILE)

```javascript
fetch("/", {
  method: "POST",
  body: p.innerText
})
  .then(() => console.log("data sent to server"))
  .catch(() => console.error("Something went wrong"));

document.getElementById("output").appendChild(p);
```
