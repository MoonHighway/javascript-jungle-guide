# async/await Intro

(1) Returning a Promise from a Function

```javascript
function getQuestion() {
  return fetch("https://opentdb.com/api.php?amount=1")
    .then((response) => response.json())
    .then((json) => json.results[0])
    .then(({ question, correct_answer }) => ({
      question,
      answer: correct_answer,
    }))
}

function printQuestion({ question, answer }) => {
    document.body.innerHTML = `
      <h1>${question}</h1>
      <h2>answer: ${answer}</h2>
    `;
  }
```

(2) Using async/await

```javascript
async function retrieveQuestion() {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=1"
  );
  const json = await response.json();
  const { question, correct_answer } = json.results[0];
  return {
    question,
    answer: correct_answer
  };
}
```
