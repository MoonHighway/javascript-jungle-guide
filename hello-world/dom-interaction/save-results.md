# Saving the Results

If you wanted to save this data in a local variable, you could.

1. Create an empty data array.
2. Push the new data into the array when the button is clicked.

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

<Question title="Does this vanilla JavaScript work like React, Angular, or Vue?">
It is all similar. To create elements on the page, these libraries and frameworks use the DOM APIs to manipulate or create user interfaces.
</Question>
