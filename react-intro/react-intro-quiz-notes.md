# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is React?
  A: An open-source front-end JavaScript library for building user interfaces based on components.
  React apps are made out of components.

- What is a React component?
  A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.
  React components are JavaScript functions that return markup.

- How do you mount a React app (root component) to the DOM?
  A: Need to "import ReactDOM from 'react-dom/' "
  Then, ReactDom.render

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<App />
</React.StrictMode>,
)

- What are some other popular frontend frameworks?
  A: Angular, Vue.js, JQuery...

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
