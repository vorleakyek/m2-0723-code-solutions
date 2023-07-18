# es6-destructuring-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is destructuring, conceptually?
  ES6 provides a new feature called destructing assignment that allows you to destructure properties of an object or elements of an array into individual variables.

Destructuring is a JavaScript expression that allows us to extract data from arrays, objects, and maps and set them into new, distinct variables. Destructuring allows us to extract multiple properties, or items, from an array​ at a time.

Notes from reading:
ES6 introduces the object destructuring syntax that provides an alternative way to assign properties of an object to variables:

let { firstName: fname, lastName: lname } = person;
let [, , thirdItem = 0] = getItems();

- What is the syntax for `Object` destructuring?
  let { property1: variable1, property2: variable2 } = object;

The identifier before the colon (:) is the property of the object and the identifier after the colon is the variable.

- What is the syntax for `Array` destructuring?
  const [a, b, ...rest] = array;

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

- How can you tell the difference between destructuring and creating `Object`/`Array` literals?

creating Object`/`Array` literals:
Define an object or an array leterals and then assign it to a variable.

const person = {
firstName: 'John',
lastName: 'Doe'
};

const arr = [1, 2, 3];

destructuring object:
Write the property name: variable name inside of a {} and then set it to equal the object.
let { firstName: fname, lastName: lname } = person;

Write the name of the variable for the element of the array inside of a [] and then set it to equal the array.
const [a, b] = array;

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
