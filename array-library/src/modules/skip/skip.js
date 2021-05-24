export const skip = (array, n) => {
  let outputArray = [];

  if (n > array.length) {
    return outputArray;
  }

  for (let i = n; i < array.length; i++) {
    outputArray.push(array[i]);
  }

  return outputArray;
}