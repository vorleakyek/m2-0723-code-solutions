# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  A:The logical AND operator returns the value of the first falsy operand encountered when evaluating from left to right, or the value of the last operand if they are all truthy.

The logical OR operator returns the first truthy value or the last falsy value among its operands.

We can use them for Boolean logic that is outside of the 'if' statement.

The AND operator preserves non-Boolean values and returns them as they are:
result = "" && "foo"; // result is assigned "" (empty string)

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  A: Short circuit means that the second operand is not evaluated or executed if the result can be determined based solely on the value of the first operand.

The logical AND expression is a short-circuit operator. As each operand is converted to a boolean, if the result of one conversion is found to be false, the AND operator stops and returns the original value of that falsy operand; it does not evaluate any of the remaining operands.

The OR operator stops and returns the original value once its determine the truthy operand. It does not evaluate any of the remaining operands.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  A: The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

The nullish coalescing operator can be seen as a special case of the logical OR (||) operator. The latter returns the right-hand side operand if the left operand is any falsy value, not only null or undefined.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  A: The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.

condition ? exprIfTrue : exprIfFalse

The ternary operator is simple and best suited for simple conditional evaluations. It is not well-suited for complex conditions or multiple branches of execution, where if/else statements offer more flexibility and readability.

The ?: operator is an expression, meaning it returns a value that can be assigned to a variable or used in other expressions. In contrast, if/else statements are statements and do not produce a value.

- What is the `?.` (optional chaining) operator? When would you use it?
  A: The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

It can also be helpful while exploring the content of an object when there's no known guarantee as to which properties are required. It allows you to access nested properties or call methods on an object, even if intermediate properties are nullish (null or undefined).

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created

Spread syntax can be used when all elements from an object or array need to be included in a new array or object, or should be applied one-by-one in a function call's arguments list. There are three distinct places that accept the spread syntax:

Function arguments list (myFunction(a, ...iterableObj, b))
Array literals ([1, ...iterableObj, '4', 'five', 6])
Object literals ({ ...obj, key: 'value' })

- What data types can be spread into an array? Into an object?
  Array, strings, and any iterable objects

- How does spread syntax differ from rest syntax?
  Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
