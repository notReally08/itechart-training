export const reduce = (array, callback, initialValue = false) => {
  if (!Array.isArray(array)) {
    throw new Error("The first parameter should be an array");
  }

  if (typeof callback !== "function") {
    throw new Error("The second parameter should be a function");
  }

  if (!array.length) {

    if (!initialValue) {
      throw new TypeError;
    }

    return initialValue;

  }

  if (array.length === 1) {
    return initialValue ? reduce([...array, initialValue], callback) : array[0];
  }

  let accumulator = initialValue ? initialValue : array[0];
  let currentValue = initialValue ? array[0] : array[1];

  let i = initialValue ? 0 : 1;
  for (; i < array.length; i++) {
    accumulator = callback(accumulator, currentValue);
    if (i === array.length - 1) break;
    currentValue = array[i + 1];
  }
  return accumulator;
}