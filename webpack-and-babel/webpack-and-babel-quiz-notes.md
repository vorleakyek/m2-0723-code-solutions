# webpack-and-babel-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Webpack?
  A: Webpack is a static module bundler for modern JS applications.

Webpack works by examining your code, starting at its entry point, and recursively scanning the import statements to find all the modules your code uses. It builds a dependency graph and analyzes it to find and remove code that is not in use (using a process known as tree shaking).

It renames functions, variables, classes, etc., to ensure there are no name conflicts and to minimize and obfuscate the resulting JavaScript code. It performs similar optimizations on HTML, CSS, and image files. The result is a small number of files that can be easily sent to a browser by a Web server.

- What is the advantage of using Webpack (or a similar bundler)?
  o bundle all the code from JavaScript files and npm packages into a single (or a few) files that can be easily downloaded.
  o bundlers will remove unused code and may also "minify" and/or "obfuscate" the code by renaming variables and functions to just a few letters.
  o The result is a small number of files that can be easily sent to a browser by a Web server.

- What is Babel?
  A: Babel is the most widely-used JavaScript transpiler. It is designed to transpile newer versions of JavaScript into older versions.

NOTE: A "transpiler" converts code written in one high-level language into another high-level language. For example, TypeScript transpiles TypeScript code into JavaScript so that it can be run in browsers or in NodeJS.

- What is the advantage of using Babel (or a similar transpiler)?
  A: Allows developers to write code in the modern JavaScript language and knowing that the code is still working on older devices and systems.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
