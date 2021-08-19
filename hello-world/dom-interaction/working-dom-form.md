# Working with DOM Form Elements

When creating HTML forms, we use JavaScript to grab the values of those form elements.

1. First, select the elements by ID.
2. Then create a variable for the button.
3. Then we'll use the `button` variable and attach a function to this button that will be called anytime the button is clicked.
4. Let's log the name and age values.
5. And finally reset the values of the fields once the button has been clicked.

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
