# Create Mood Variable

We want to load the mood as a variable and will add this to the html string:

```javascript
let mood = "happy";

const html = await readFile(
  `./public/${mood}.html`,
  "UTF-8"
);
```
