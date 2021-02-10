# Compare Ages

1. Look up JavaScript's age based on 9/1/1995.
2. Load the ages.json file as a variable
3. Check to see if JavaScript is older, younger, or the same age as the people in the file

```javascript
const users = require("./ages.json");

for (let i = 0; i < users.length; i++) {
  let ageCheckString =
    users[i].age > 25
      ? `${users[i].age - 25} years older than`
      : users[i].age < 25
      ? `${25 - users[i].age} years younger than`
      : `the same age as`;
  console.log(
    `${users[i].name} is ${ageCheckString} JavaScript`
  );
}
```
