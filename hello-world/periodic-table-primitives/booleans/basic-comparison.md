# Basic Comparison

Let's go through some of the ways we can compare values with JavaScript.

- A single equals sign means that we're setting a value.
- A double equals sign means that we're performing an equality check. Is the season winter?

```javascript
let season = "winter";
let isAnything = season == "winter";
```

- Keep in mind that a double equals sign will not check for type equality, so the number 2 and string 2 will evaluate as equal.

```javascript
let isAnything = 2 == "2";
```

- To check for type and value equality, use the triple equals sign.

```javascript
let isAnything = 2 === "2";
```

<Question title="Can you check for more than one condition?">
Use a double ampersand like this:

```javascript
if (2 == "2" && 2 !== "2") {
  console.log("And");
}
```

</Question>

<Question title="Can you check an OR condition?">
Yes, for this you'll use the double-pipe operator (`||`).

```javascript
if (2 == "2" || 2 == "3") {
  console.log("Or");
}
```

</Question>

<Question title="How do you do inequality comparisons?">
The exclamation mark (`!`) is what you'll use for this.

- `!=` Means not equal
- `!==` Means strict not equal

```javascript
if (2 !== "2") {
  console.log("This Equality Comparison is Strict!");
}
```

</Question>

<Info>
If you have time you can show the Operator Lookup Tool (https://www.joshwcomeau.com/operator-lookup/). 
</Info>
