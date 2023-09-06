# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you define a React component?
  A: By creating a JavaScript function that returns a JSX.

function MyButton() {
return (
<button>I'm a button</button>
);
}

- How do you use JSX in a React component?
  o To return multiple elements from a component, wrap them with a single parent tag.
  o Close all the tags
  o Use camelCase

- How do you declare the props a React component needs?
  Using the destructuring syntax

function ComponentName({ person, size }) {
return (
<div>
<p>person.name</p>
</div>
);
}

- How do you pass props to a React component?
  Step 1: Pass props to the child component
  o specify the props using attributes
  o each attribute corresponds to a prop name and its value is the data that we want to pass

e.g.: First, pass some props to Avatar. For example, let’s pass two props: person (an object), and size (a number).

Step 2: Read props inside the child component
o access props through the 'props' object
o can use destructuring as well

e.g.: You can read these props by listing their names person, size separated by the commas inside ({ and }) directly after function Avatar. This lets you use them inside the Avatar code, like you would with a variable.

import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
return (
<img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
);
}

export default function Profile() {
return (

<div>
<Avatar
size={100}
person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
/>
</div>
);
}

- How do you include JavaScript expressions in JSX?
  A: In JSX, we can write JavaScript expressions using the curly braces to get the value, computations, or function calls.

- What are React hooks and what are the three "Rules of Hooks"?
  A: Hooks are special functions that are only available while React is rendering.

Rules of Hooks:
o use the word "use" like 'useState'
o can only be called at the top level of the components. Can't be called inside conditions, loops, or other nested functions
o only call Hooks from React Functions or components

- How do you manage state in a React component?
  A: by using 'useState' hook

- How do you handle events in React?
  A: define event handlers as a functions within the component > Pass it as a prop to the appropriate JSX tag

- How do you let a parent component know that an event happened?
  A: by passing a callback function from the parent to the child as a prop.

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
