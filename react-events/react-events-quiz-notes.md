# react-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is an "event" in React?
  A: An action that can be triggered by user interactions such as click.

Note: Events can be anything that a component wishes. For example, an event may indicate that a button was clicked, or perhaps that a complex control's value was changed, or that a menu item was selected.

- What is an "event handler"? Which component declares the handler?
  A: An event handler is the function that will be triggered in response to interactions such as clicking, hovering, and focusing.

- How do you pass an event handler to a React component?
  A: Pass it as a prop to the appropriate JSX tag.
  For example: onClick = {handleClick} to the <button> JSX

- What is the naming convention for event handlers?
  A: It is common to name event handlers as "handle" followed by the event name.
  E.g. "handleClick" or "handleMouseEnter"

- What is an "event handler prop"? Which component declares the prop?
  A: A prop that is used to pass a function from a parent component to a child component.
  Declares the event handler prop such as "onCustomClick" in the child component.

- What are some custom event handler props a component may wish to define?
  A: onSelect, onChange, onHover

- What is the naming convention for custom event handler props?
  A: They should start with "onXxx" where "Xxx" is the event.
  E.g. onSelect

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
