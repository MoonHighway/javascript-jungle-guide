# Working with the DOM

1. To start interacting with the DOM, we first want to set an ID in the HTML page.

```html
<h1 id="question">Are you older than JavaScript?</h1>
```

2. Then we'll use JavaScript to select or reach out to this element and return its inner text.

```javascript
const question = document.getElementById("question");
console.log(question);
console.log(question.innerText);
```

3. We can also set its inner text with the `innerText` property.

```javascript
question.innerText = "Are you ready to rock?";
```
