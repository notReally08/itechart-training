export const take = (array, n) => {
  if (typeof n !== "number") {
    throw new Error("The second parameter should be a number");
  }

  if (n > array.length) {
    throw new Error("The number of the taken elements should be less than the array length");
  }

  let outputArray = [];
  for (let i = 0; i < n; i++) {
    outputArray.push(array[i]);
  }
  return outputArray;
}