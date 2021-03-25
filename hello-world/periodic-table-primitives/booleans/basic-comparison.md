# Basic Comparison

```javascript
let season = "winter";
let isAnything = season == "winter";
```

```javascript
let isAnything = 2 == "2";
```

```javascript
let isAnything = 2 === "2";
```

### Possible Questions

1. Can you check for more than one condition?

Use a double ampersand like this:

```javascript
if (2 == "2" && 2 !== "2") {
  console.log("And");
}
```

2. Can you check an OR condition?

Yes, for this you'll use the double-pipe operator (`||`).

```javascript
if (2 == "2" || 2 == "3") {
  console.log("Or");
}
```

3. How do you do inequality comparisons?

The exclamation mark (`!`) is what you'll use for this.

- `!=` Means not equal
- `!==` Means strict not equal

```javascript
if (2 !== "2") {
  console.log("This Equality Comparison is Strict!");
}
```

4. Which resources would you recommend for learning more about these operators?

A really slick tool you can check out is [Operator Lookup](https://www.joshwcomeau.com/operator-lookup/), https://www.joshwcomeau.com/operator-lookup/.
