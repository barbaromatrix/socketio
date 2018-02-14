const dependable = require('dependable');
const path = require('path');

const container = dependable.container();

const simpleDependencies = [
  ['_', 'lodash'],
];

simpleDependencies.forEach(val => {
  container.register(val[0], () => require(val[1]));
});

container.load(path.join(__dirname, '/controllers'));
container.load(path.join(__dirname, '/helpers'));

container.register('container', () => container);

module.exports = container;
