const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

console.log(
  'Price objects',
  prices.map((ele) => ({ price: ele, salePrice: ele / 2 }))
);

console.log(
  'Formated prices',
  prices.map((ele) => `$${ele.toFixed(2)}`)
);
