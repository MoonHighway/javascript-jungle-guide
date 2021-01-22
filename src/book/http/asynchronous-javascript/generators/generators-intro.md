# Generators

(1) Update song to generator

```javascript
function* singTo({
  name,
  adjective,
  verb,
  chorus = f => f
}) {
  yield console.log(`la la la ${name}`);
  yield console.log(`${name} you're so ${adjective}`);
  yield console.log(`Can we ${verb} together forever?`);
  yield console.log(`la la la`);
  yield chorus(name);
  yield console.log(`la la la ${name}`);
  yield console.log(`${name} your so ${adjective}`);
  yield console.log(`Can we ${verb} together forever?`);
  yield console.log(`la la la`);
  chorus(name);
  chorus(name);
  yield { done: true };
}

const song = singTo({
  name: "Florence",
  adjective: "beautiful",
  verb: "do paperwork",
  chorus(name) {
    console.log(
      `Sha na na, ${name} you're a person I know!`
    );
  }
});

song();
```
