# Using Fetch

(1) Fetch Data

```javascript
fetch("https://opendb.com/api.php?amount=1").then(
  console.log
);
```

(2) Parse the Response Body

```javascript
fetch("https://opendb.com/api.php?amount=1")
  .then(response => response.json())
  .then(json => json.results[0])
  .then(console.table);
```

(3) Handle Errors

```javascript
fetch("https://opendb.com/api.php?amount=1")
  .then(response => response.json())
  .then(json => json.results[0])
  .then(console.table)
  .catch(console.error);
```

---

(a) Parse Question and Answer

```javascript
fetch("https://opendb.com/api.php?amount=1")
  .then(response => response.json())
  .then(json => json.results[0])
  .then(({ question, correct_answer }) => ({
    question,
    answer: correct_answer
  }))
  .then(console.table)
  .catch(console.error);
```

(b) Print Data on DOM

```javascript
fetch("https://opendb.com/api.php?amount=1")
  .then(response => response.json())
  .then(json => json.results[0])
  .then(({ question, correct_answer }) => ({
    question,
    answer: correct_answer
  }))
  .then(({ question, answer }) => {
    document.body.innerHTML = `
      <h1>${question}</h1>
      <h2>answer: ${answer}</h2>
    `;
  })
  .catch(console.error);
```

(c) Naming the Functions

```javascript
const parseResponseBody = response => response.json();

const grabFirstResult = ([result]) => result;

const filterQuestionAnswer = ({
  question,
  correct_answer: answer
}) => ({
  question,
  answer
});

const print = ({ question, answer }) => {
  document.body.innerHTML = `
      <h1>${question}</h1>
      <h2>answer: ${answer}</h2>
    `;
};

fetch("https://opendb.com/api.php?amount=1")
  .then(parseResponseBody)
  .then(grabFirstResult)
  .then(filterQuestionAnswer)
  .then(print)
  .catch(console.error);
```
