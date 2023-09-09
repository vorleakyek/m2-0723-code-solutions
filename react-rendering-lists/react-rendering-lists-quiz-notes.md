# react-rendering-lists-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When would we want to dynamically create a list of React components?
  A: When we want to show several instances of the same component using different data when building the list.

- Why is it important for React components to be data-driven?
  A: We can define one React component with a certain structure and then we can dynamically change the UI whenever the data change. So, the component is reusable.

- Where in the component code would a list of React components typically be built?
  A: within the content of JSX

For example:
const listItems = people.map(person => <li>{person}</li>);
return <ul>{listItems}</ul>;

- What `Array` method is commonly used to create a list of React components?
  A: We can use filter() and map() with React to filter and transform your array of data into an array of components.

- Why do components in a list need to have unique keys?
  A: Keys tell React which array item each component corresponds to, so React can keep track of each of them even if their position or data changes. For example when sorting, inserting, or deleting items.

- What is the best value to use as a "key" prop when rendering lists?
  A: Data from a database such as databse keys or IDs, which are unique by nature.

Locally generated data:
If your data is generated and persisted locally (e.g. notes in a note-taking app), use an incrementing counter, crypto.randomUUID() or a package like uuid when creating items.

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
