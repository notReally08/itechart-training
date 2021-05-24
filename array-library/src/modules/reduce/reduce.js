export const reduce = (array, callback, initialValue) => {
  if (!array.length) {
    if (typeof initialValue === "undefined") {
      throw new TypeError;
    }

    return initialValue;
  }

  if (array.length === 1) {
    return typeof initialValue === "undefined" ? reduce([...array, initialValue], callback) : array[0];
  }

  let accumulator = typeof initialValue !== "undefined" ? initialValue : array[0];
  let currentValue = typeof initialValue !== "undefined" ? array[0] : array[1];

  let i = typeof initialValue !== "undefined" ? 0 : 1;
  for (; i < array.length; i++) {
    accumulator = callback(accumulator, currentValue);

    if (i === array.length - 1) {
      break;
    }

    currentValue = array[i + 1];
  }

  return accumulator;
}