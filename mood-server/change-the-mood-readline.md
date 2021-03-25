# Change the Mood via Readline

## Note: Remember to refresh the browser to see the change

```javascript
reader.setPrompt("\n\n happy | sad \n> ");

reader.on("line", newMood => {
  if (!newMood.match(/happy|sad/)) {
    console.log("command not found");
    reader.prompt();
    return;
  }

  if (mood !== newMood) {
    mood = newMood;
    console.log(`mood changed to ${mood}`);
  }
  reader.prompt();
});

server.listen(3000);
console.log("Mood Server listening on port 3000");

reader.prompt();
```
