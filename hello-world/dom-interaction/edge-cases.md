# Edge Cases

What happens if someone is the same age as JavaScript? We can adjust the ternary statement to handle that case.

```javascript
const results =
  inputName.value > jsAge
    ? `${inputName.value} is older than JavaScript`
    : inputName.value < jsAge
    ? `${inputName.value} is younger than JavaScript`
    : `${inputName.value} is the same age as JavaScript`;
```
