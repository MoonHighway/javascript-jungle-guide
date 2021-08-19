# Whitespace and New Lines

In a regular string, you have to add newline characters `\n` to move to a new line.

```javascript
console.log("Hello Biscuit, \n\n I am writing...");
```

This isn't necessary with a template string because a template string recognizes whitespace and new lines.

```javascript
console.log(`
  Hello Biscuit,

  I am writing...

    Sincerely,

    Alex

`);
```
