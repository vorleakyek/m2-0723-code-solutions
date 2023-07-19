# javascript-timers-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a "callback" function?
  A: A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

- Besides adding an event listener callback function to an element or the `document`, what is one way to delay the execution of a JavaScript function until some point in the future?
  A: by using the global setTimeout() method which executes a function or specified piece of code once the timer expires.

setTimeout(() => {
console.log("Delayed for 1 second.");
}, 1000);

- How can you set up a function to be called repeatedly without using a loop?
  A: To call a function repeatedly (e.g., every N milliseconds), consider using setInterval().

The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.

const intervalID = setInterval(myCallback, 500, "Parameter 1", "Parameter 2");

function myCallback(a, b) {
// Your code here
// Parameters are purely optional.
console.log(a);
console.log(b);
}

- What is the default time delay if you omit the `delay` parameter from `setTimeout()` or `setInterval()`?
  A: If this parameter is omitted, a value of 0 is used, meaning execute "immediately", or more accurately, the next event cycle.

- What do `setTimeout()` and `setInterval()` return?
  A: The returned timeoutID is a positive integer value which identifies the timer created by the call to setTimeout(). This value can be passed to clearTimeout() to cancel the timeout.

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
