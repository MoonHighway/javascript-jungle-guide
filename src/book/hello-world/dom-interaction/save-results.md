# Saving the Results

```javascript
const data = [];
button.onClick = function() {
    ...
    data.push({
        timestamp: new Date().getTime(),
        results
    })
}
```

# Possible Questions

1. How do you memorize all of the DOM manipulation methods?

You don't have to memorize them, but if you ever want to refer to them, check out MDN, the Mozilla Developer Network.

- [https://developer.mozilla.org/en-US/docs/Web/API/Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)

2. Does this vanilla JavaScript work like React, Angular, or Vue?

It is all similar. To create elements on the page, these libraries and frameworks use the DOM APIs to manipulate or create user interfaces.
