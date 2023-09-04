# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  A: Hooks are special functions that are only available while React is rendering.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  A: Hooks start with "use" and can only be called at the top level or the components.
  We can't call Hooks inside conditions, loops, or other other nested functions.

- What is the purpose of state in React?
  A: We want to use a state variable when a component needs to "remember" some information between renders.
  State variables are declared by calling the useState Hook.

NOTES:
The useState Hook provides those two things:
o A state variable to retain the data between renders.
o A state setter function to update the variable and trigger React to render the component again.

- Why can't we just maintain state in a local variable?
  Local variables don’t persist between renders.
  o When React renders this component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables.

Changes to local variables won’t trigger renders.
o React doesn’t realize it needs to render the component again with the new data.

- What two actions happen when you call a `state setter` function?
  A: Update the state variable and trigger React to render the component again.

- When does the local `state variable` get updated with the new value?
  A: After calling the state setter function, the local 'state variable' will get updated with the new value during the next render cycle.

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
