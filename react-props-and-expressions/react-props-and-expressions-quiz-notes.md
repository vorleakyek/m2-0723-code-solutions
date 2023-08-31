# react-props-and-expressions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are props in React?
  A: short for "properties", and they allow us to pass data from a parent component to a child component.

Note:
Props are the information that we pass to a JSX tag.
For example, className, src, alt, width, and height are some of the props we can pass to an <img>

- How do you declare and access props in a component?
  A: When rendering a child component in the parent component, we can pass props as attributes.
  For example: <Avatar size={100} />

In the child component, we can access props through the 'props' object.

function Avatar({person, size}) {
returns <img width={size} />
}

- How do you pass props to a component?
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
<Avatar
size={80}
person={{
          name: 'Aklilu Lemma',
          imageId: 'OKS67lh'
        }}
/>
<Avatar
size={50}
person={{
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
/>
</div>
);
}

- How do you write JavaScript expressions in JSX?
  A: In JSX, we can write JavaScript expressions using the curly braces to get the value, computations, or function calls.

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
