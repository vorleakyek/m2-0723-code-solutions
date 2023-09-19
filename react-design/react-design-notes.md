# react-design-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the phases in the React design process?
  A: Identity components, identify state, and identify events (actions).

- How does data flow in React?
  A: passing down from parent to children

Note: state should be in the closest parent that control it.

- How can children components modify state in their parents?
  A: the parent can pass down the callback function as the event handler prop, so that the children components can call it.

Note: the component that own the data should also control the data.

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
