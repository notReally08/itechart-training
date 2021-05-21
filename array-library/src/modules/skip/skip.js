export const skip = (array, n) => {
  if (typeof n !== "number") {
    throw new Error("The second parameter should be a number");
  }

  if (n > array.length) {
    throw new Error("The number of skipped elements should be less than the array length");
  }

  let outputArray = [];
  for (let i = n; i < array.length; i++) {
    outputArray.push(array[i]);
  }
  return outputArray;
}