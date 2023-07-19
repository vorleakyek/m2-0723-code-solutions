# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  A: These are the possible syntaxes:

() => expression

param => expression

(param) => expression

(param1, paramN) => expression

() => {
statements
}

param => {
statements
}

(param1, paramN) => {
statements
}

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  A: In a concise body, only a single expression is specified, which becomes the implicit return value. In a block body, you must use an explicit return statement.

- When using _concise body syntax_, how do you return an object literal?
  A: wrapt the object literal in parentheses.

const func = () => ({ foo: 1 });

- In the expression
  `js
    foo(() => 42);
    `

  - Identify the arrow function
    A: () => 42

  - How many arguments does the arrow function take?
    A: none

  - What value does it return?
    A: return the number 42

  - How many arguments are passed to the function `foo`?
    A: one

  - What type of argument is passed to the function `foo`?
    A: a function

- In the expression
  `` js
    bar((y) => {
      console.log(`4y = ${4 * y}`);
    });
     ``

  - Identify the arrow function
    A: (y) => { console.log(`4y = ${4 * y}`);}

  - How many arguments does the arrow function take?
    A: 1

  - What value does it return?
    A: undefined since the return keyword is not explicitely define in the block body

  - How many arguments are passed to the function `bar`?
    A: one

  - What type of argument is passed to the function `bar`?
    A: function

  - When does the arrow function's code get executed?
    A: When the bar function is invoked

- How does the value of `this` differ between standard functions and arrow functions?
  A: The value of "this" in a standard function is defined by the calling object.
  The value of "this" in an arrow function is taken from the surrounding scope, aka lexical scoping.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
