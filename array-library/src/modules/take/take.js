export const take = (array, n) => {
  if (n > array.length) {
    return [...array];
  }

  let outputArray = [];
  for (let i = 0; i < n; i++) {
    outputArray.push(array[i]);
  }

  return outputArray;
}