const reorderArray = require('../src');

// 0
test('Empty array', () => {
  expect(reorderArray([], null, null))
    .toEqual([]);
});

// 1
test('Array with 1 element', () => {
  expect(reorderArray(['a'], null, null))
    .toEqual(['a']);
});

// 2
test('Array with 2 element', () => {
  expect(reorderArray(['a', 'b'], 0, 1))
    .toEqual(['b', 'a']);
});

test('Array with 2 element', () => {
  expect(reorderArray(['a', 'b'], 1, 0))
    .toEqual(['b', 'a']);
});

test('Array with 2 element', () => {
  expect(reorderArray(['a', 'b'], 0, 0))
    .toEqual(['a', 'b']);
});

test('Array with 2 element', () => {
  expect(reorderArray(['a', 'b'], 1, 1))
    .toEqual(['a', 'b']);
});

// 3
test('Array with 3 element', () => {
  expect(reorderArray(['a', 'b', 'c'], 0, 0))
    .toEqual(['a', 'b', 'c']);
});

test('Array with 3 element', () => {
  expect(reorderArray(['a', 'b', 'c'], 0, 1))
    .toEqual(['c', 'a', 'b']);
});

test('Array with 3 element', () => {
  expect(reorderArray(['a', 'b', 'c'], 0, 2))
    .toEqual(['b', 'c', 'a']);
});

test('Array with 3 element', () => {
  expect(reorderArray(['a', 'b', 'c'], 1, 0))
    .toEqual(['b', 'c', 'a']);
});

test('Array with 3 element', () => {
  expect(reorderArray(['a', 'b', 'c'], 1, 1))
    .toEqual(['a', 'b', 'c']);
});

test('Array with 3 element', () => {
  expect(reorderArray(['a', 'b', 'c'], 1, 2))
    .toEqual(['c', 'a', 'b']);
});

test('Array with 3 element', () => {
  expect(reorderArray(['a', 'b', 'c'], 2, 0))
    .toEqual(['c', 'a', 'b']);
});

test('Array with 3 element', () => {
  expect(reorderArray(['a', 'b', 'c'], 2, 1))
    .toEqual(['b', 'c', 'a']);
});

test('Array with 3 element', () => {
  expect(reorderArray(['a', 'b', 'c'], 2, 2))
    .toEqual(['a', 'b', 'c']);
});

// 4
test('Array with 4 element', () => {
  expect(reorderArray(['a', 'b', 'c', 'd'], 0, 2))
    .toEqual(['c', 'd', 'a', 'b']);
});

// 5
test('Array with 5 element', () => {
  expect(reorderArray(['a', 'b', 'c', 'd', 'e'], 1, 3))
    .toEqual(['d', 'e', 'a', 'b', 'c']);
});

test('Array with 5 element', () => {
  expect(reorderArray(['a', 'b', 'c', 'd', 'e'], 4, 0))
    .toEqual(['e', 'a', 'b', 'c', 'd']);
});