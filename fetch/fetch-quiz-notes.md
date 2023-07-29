# fetch-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What does `fetch()` return?
  A: A Promise that resolves to a Response object.

- What is the default request method used by `fetch()`?
  A: The default is "GET".

- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?
  A: Use the 'method' option in the second parameter ofthe 'fetch()' call

fetch(url, {method: 'POST'});

- How does `fetch` report errors?
  A: use the '.catch()' method

fetch(url)
.then(response => {})
.then(data ={})
.catch(err => {})

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
