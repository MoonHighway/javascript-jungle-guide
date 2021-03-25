# Quit from Readline

```javascript
reader.on("line", newMood => {
  if (!newMood.match(/happy|sad|quit/)) {
    console.log("command not found");
    reader.prompt();
    return;
  }

  if (newMood === "quit") {
    process.exit();
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
