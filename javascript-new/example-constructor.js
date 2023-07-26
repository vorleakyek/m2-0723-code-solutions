function ExampleConstructor() {}
console.log(
  'value of prototype of ExampleConstructor:',
  ExampleConstructor.prototype
);
console.log(
  'typeof of prototype of ExampleConstructor:',
  typeof ExampleConstructor.prototype
);
const newExampleConstructor = new ExampleConstructor();
console.log('value of newExampleConstructor:', newExampleConstructor);
const isInstanceOf = newExampleConstructor instanceof ExampleConstructor;
console.log('value of isInstanceof:', isInstanceOf);
