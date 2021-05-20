/*eslint keyword-spacing: ["error", { "before": true }]*/
/*eslint-env es6*/

export const reduce = (array, callback, initialValue = false) => {
  if (!array.length) {
    if (!initialValue) throw new TypeError;
    return initialValue;
  }
  if (array.length === 1) {
    return initialValue ? reduce([...array, initialValue], callback) : array[0];
  }
  let accumulator = initialValue ? initialValue : array[0];
  let currentValue = initialValue ? array[0] : array[1];
  let i = initialValue ? 0 : 1;
  for (; i < array.length; i++) {
    accumulator = callback(accumulator, currentValue)
    if (i === array.length - 1) break;
    currentValue = array[i + 1];
  }
  return accumulator;
}