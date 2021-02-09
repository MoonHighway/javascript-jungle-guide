# Working with DOM Form Elements

```javascript
const inputName = document.getElementById("name");
const inputAge = document.getElementById("age");
const button = document.querySelector("main>button");

button.onclick = function () {
  console.log(inputName.value);
  console.log(inputAge.value);
  inputName.value = "";
  inputAge.value = "";
};
```
