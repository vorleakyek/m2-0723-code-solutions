# react-components-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a React component?
  A: A piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.

React components are JavaScript functions that return jsx.

- How do you define a component in React?
  Step 1: Export the component
  Step 2: Define the function
  Step 3: Add markup

export default function FunctionName() {
return <h1> Hello </h1>;
}

- How is a component "rendered" (made visible on the browser page)?
  Initial render: call the createRoot with the target DOM node, and then calling its render method with the component.

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<App />
</React.StrictMode>,
)

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
