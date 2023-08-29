# npm-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is NPM?
  A: "Node Package Manager"
  Allows developers to install and share code packages, and easy reuse.

npm consists of three distinct components;
o website - set up and manage access
o command line interface (CLI) - run from a terminal
o registry - databse of JS software

- What is a package?
  A: a small bit of reusable code (aka a module).

- What are some other popular package managers?
  A: Most popular is Yarn. Another one is PNPM.

- How can you create a `package.json` with `npm`?
  A: copy .npm-init.js from the home directory
  cp .npm-init.js ~/.npm-init.js
  Run the default package.json
  npm init --yes
  Go through all the prompts

- What is a dependency and how do you add one to a package?
  A: external code that is used to add specific functionalities without having to implement one.
  npm install <package name>

- What happens when you add a dependency to a package with `npm`?
  A: The package will be adding in the package.json under the dependency field.

- What is a devDependency and how do you add one to a package?
  A: packages that are only used during development
  npm install --save-dev <package name>
  The package will be adding in the package.json under the devDependencies field.

- How do you define and run `npm` scripts? Why are these useful?
  A: Define in the script field of the package.json.

"scripts": {
"hello": "console log this messages"
}
npm run hello

These scripts are often used to:
o make command development commands available without the need to remember or type long arguments
o share them across the team

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
