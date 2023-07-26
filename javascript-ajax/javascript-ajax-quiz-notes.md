# javascript-ajax-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is AJAX?
  A: a programming practice of building complex, dynamic webpages using a technology known as XMLHttpRequest.

Ajax allows you to collect data to update parts of the DOM of an HTML page without the need for a full page refresh. Ajax also lets you work asynchronously, meaning your code continues to run while the targeted part of your web page is trying to reload (compared to synchronously, which blocks your code from running until that part of your page is done reloading).

- What does the AJAX acronym stand for?
  A: Asynchronous JavaScript And XML

- Which object is built into the browser for making HTTP requests in JavaScript?
  XMLHttpRequest (XHR) objects are used to interact with servers.

- What event is fired by `XMLHttpRequest` objects when they are finished loading the data from the server?
  A: readystatechange events

readyState changes to DONE (4)

- **Bonus Question**: An `XMLHttpRequest` object has an `addEventListener()` method just like DOM elements. How is it possible that they both share this functionality?
  A: the concept of prototypes and inheritance

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
