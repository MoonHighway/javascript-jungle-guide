# Improving the Results

You could even calculate _how much_ older or younger than JavaScript the person completing the form might be.

```javascript
const results =
  inputName.value > jsAge
    ? `${inputName.value} is ${
        inputAge.value - jsAge
      } years older than JavaScript`
    : inputName.value < jsAge
    ? `${inputName.value} is ${
        jsAge - inputAge.value
      } years younger than JavaScript`
    : `${inputName.value} is the same age as JavaScript`;
```
