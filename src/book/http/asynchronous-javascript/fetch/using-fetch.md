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
