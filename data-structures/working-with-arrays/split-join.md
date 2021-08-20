# Using Split and Join

- `.split`: This function takes a string and breaks it up at whatever character you pass to the method. If you pass a comma, the string will break up the string at that character and return an array of the split values.

- `.join`: This will take an array and create a string and connect the array items with whatever you pass into the method.

```javascript
let colors = "green,yellow,black,red";

const colorsArray = colors.split(",");

console.log(colorsArray);

colorsArray.push("blue");
colorsArray.push("white");

colors = colorsArray.join(" -- ");

console.log(colors);
```

<Info>
Reminder that push will add items to an array.
</Info>
