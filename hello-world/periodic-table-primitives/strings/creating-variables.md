# Creating Variables

In most modern JS applications, you'll see the `var` keyword used very sparingly.

- Convert `var` to `let`.
- Create a string.
- Concatenate the string.

<Info>
You can use double quotes or single quotes with JavaScript strings. Just make sure to close the string with the same character that you open it with.
</Info>

```javascript
let age = 10;
let name = "Biscuit";

console.log(name + " is a cat!");
```

<Question title="Why should we use let instead of var?">
We'll see this a little later, but using let helps us with variable scope in our JavaScript apps. 
</Question>
