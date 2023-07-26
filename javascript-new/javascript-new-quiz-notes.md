# javascript-constructors-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What does the `new` operator do?
  A:

When a function is called with the new keyword, the function will be used as a constructor. new will do the following things:

Creates a blank, plain JavaScript object. For convenience, let's call it newInstance.

Points newInstance's [[Prototype]] to the constructor function's prototype property, if the prototype is an Object. Otherwise, newInstance stays as a plain object with Object.prototype as its [[Prototype]].
Note: Properties/objects added to the constructor function's prototype property are therefore accessible to all instances created from the constructor function.

Executes the constructor function with the given arguments, binding newInstance as the this context (i.e. all references to this in the constructor function now refer to newInstance).

If the constructor function returns a non-primitive, this return value becomes the result of the whole new expression. Otherwise, if the constructor function doesn't return anything or returns a primitive, newInstance is returned instead. (Normally constructors don't return a value, but they can choose to do so to override the normal object creation process.)

- What property of JavaScript functions can store shared behavior for instances created with `new`?
  A:

To add the new property to all objects of the same type, you must add the property to the constructor's prototype property.

- What does the `instanceof` operator do?
  A:
  The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value. Its behavior can be customized with

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
