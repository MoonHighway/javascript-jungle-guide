# Calculating the Results

```javascript
button.onclick = function () {
  const results =
    inputName.value > jsAge
      ? `${inputName.value} is older than JavaScript`
      : `${inputName.value} is younger than JavaScript`;

  console.log(results);

  inputName.value = "";
  inputAge.value = "";
};
```
