# Concatenation

1. Concatenate a Number

```javascript
console.log(typeof name);
console.log(name + " is " + age);
```

<Info>
Notice that we have to add the spaces in front of and after is. We also see that age is considered part of the string now.
</Info>

2. Adding with strings is always concatenation. The ages are added together cumulatively - not the addition that you'd expect!

```javascript
console.log(name + " is " + age + age);
```

3. To fix this problem, use parentheses to enforce an order of operations.

```javascript
console.log(name + " is " + (age + age));
```

4. We don't need parentheses for multiplying because you can't multiply strings.

```javascript
console.log(name + " is " + age * 7);
```
