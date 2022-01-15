# Calculating the Results

Now that we have these values, we want to calculate whether the user is older or younger than JavaScript.

<Info>
Remember the ternary statement. We can use this to return the correct value as a statement.
</Info>

```javascript
button.onclick = function () {
  const results =
    inputAge.value > jsAge
      ? `${inputName.value} is older than JavaScript`
      : `${inputName.value} is younger than JavaScript`;

  console.log(results);

  inputName.value = "";
  inputAge.value = "";
};
```
