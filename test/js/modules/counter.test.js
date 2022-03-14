const Counter = require('../../../src/js/modules/counter');

test('#count', () => {
  const counter = new Counter();
  counter.count();
});

test('#countNormalize', () => {
  const counter = new Counter();
  counter.countNormalize();
});
