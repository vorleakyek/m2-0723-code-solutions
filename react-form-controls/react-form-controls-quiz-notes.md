# react-form-controls-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do controlled components differ from uncontrolled components?
  A: In controlled components, we use React state to store the current value of the form element and the value will be updating we interact with the form element.

In the uncontrolled components, the JSX only specifies the initial value. It does not control what the value should be right now.

- What are some advantages of using uncontrolled components?
  A: It's simpler to implement and can be faster in term of performance for large form.

- What are some advantages of using controlled components?
  A:
  o More control over form data
  o Easier to validate the input before updating the state
  o UI and data are in sync

- Which style do you prefer?
  A: I like the controlled component better because we can just use state hook to save the current state.

- What two props must you pass to an input for it to be "controlled"?
  A: intial value - value = ""
  onChange handler - onChange = {e => setUserName(e.target.value)}}

Notes:
o You will need two useState variables, one for the username and one for the password.
o Remember to set the initial value of these variables to an empty string to avoid the dreaded “A component is changing an uncontrolled input to be controlled” warning.
o Remember to include onChange handlers for each state variable that updates its value or you won't be able to type into the input field.

- What are some popular npm packages for creating forms in React?
  A:
  The 3 most popular packages are React Hook Form, Formik, and React Final Form.

React Hook Form is lightweight, performant, and easy to use, but it requires a version of React that supports hooks (v16.8 or higher).

Formik handles complex forms well but is large and complex to use.

Final Form: Final Form is a form library that focuses on being a high-performance, subscription-based form state management solution.

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
