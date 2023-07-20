# array-filter-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- `Array.forEach`:
  - What does `Array.forEach` do?
    A: The forEach() method executes a provided function once for each array element.

It does not return a new array; it simply iterates through the elements of the existing array.

- What should the callback function do?
  A: To handle the specific operation or action we want to perform on each element of the array.

- What is `Array.forEach` useful for?
  A: loop over each element of an array and perform a specific action on each element.

o We can log each element to the console
o modify element in the array
o accumulating data

- `Array.map`:

  - What does `Array.map` do?
    A: The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

  - What should the callback function return?
    A: Its return value is added as a single element in the new array.

A new array with each element being the result of the callback function.

- What is `Array.map` useful for?
  A: Transforming the elements of an array into a new array based on a provided mapping function.

- `Array.filter`:
  - What does `Array.filter` do?
    A: The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

Array elements which do not pass the callbackFn test are not included in the new array.

- What should the callback function return?
  A: It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.

- What is `Array.filter` useful for?
  A: is useful for creating a new array containing elements from the original array that pass a specified filtering condition.

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
