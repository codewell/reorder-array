const indicesOk = (arr, a, b) => {
  const { length } = arr;
  return a < length
    && b < length
    && a >= 0
    && b >= 0;
};

const calculateNewIndex = (arr, index, newIndex, currentIndex) => (index + newIndex - currentIndex) % arr.length;

/**
 * 
 * @param {*} arr 
 * @param {*} currentIndex 
 * @param {*} newIndex 
 */
const reorderArray = (arr, currentIndex, newIndex) => {
  const { length } = arr;

  if (length === 0) {
    return [];
  };

  if (length === 1) {
    return arr;
  }

  const nullArray = arr.map(() => null);

  // Check that the indices are ok
  if (indicesOk(arr, currentIndex, newIndex)) {
    return arr.reduce((accumulator, value, index, originalArray) => {
      const newElementIndex = calculateNewIndex(originalArray, index, newIndex, currentIndex);
      return [...accumulator.slice(0, newElementIndex), value, ...accumulator.slice(newElementIndex)];
    }, nullArray)
      .filter(e => e !== null);
  } else {
    throw new Error(`Bad indices: Array length: ${arr.length}, currentIndex: ${currentIndex}, newIndex: ${newIndex}`);
  }

};

module.exports = reorderArray;