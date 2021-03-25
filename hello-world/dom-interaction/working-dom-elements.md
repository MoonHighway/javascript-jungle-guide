# Working with the DOM

(1) Setting an ID

```html
<h1 id="question">Are you older than JavaScript?</h1>
```

(2) Selecting an element

```javascript
const question = document.getElementById("question");
console.log(question);
console.log(question.innerText);
```

(3) Setting Inner Text

```javascript
question.innerText = "Are you ready to rock?";
```
