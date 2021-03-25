# Functions as Arguments

(1) Review Sample

```javascript
function singTo(name, adjective, verb) {
  console.log(`la la la ${name}`);
  console.log(`${name} your so ${adjective}`);
  console.log(`Can we ${verb} together forever?`);
  console.log(`la la la`);
}

singTo("Florence", "beautiful", "do paperwork");
```

(2) Functions as Arguments

```javascript
function singTo(name, adjective, verb, chorus) {
  console.log(`la la la ${name}`);
  console.log(`${name} your so ${adjective}`);
  console.log(`Can we ${verb} together forever?`);
  console.log(`la la la`);
  chorus();
  console.log(`la la la ${name}`);
  console.log(`${name} your so ${adjective}`);
  console.log(`Can we ${verb} together forever?`);
  console.log(`la la la`);
  chorus();
  chorus();
}

function personIKnow() {
  console.log("Sha na na, you're a person I know!");
}

singTo(
  "Florence",
  "beautiful",
  "do paperwork",
  personIKnow
);
```

(3) Call Inline with an Arrow Function

```javascript
singTo("Florence", "beautiful", "do paperwork", () =>
  console.log("Sha na na, you're a person I know!")
);
```
