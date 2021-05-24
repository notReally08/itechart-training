export const map = (array, callback) => {
  if (!array.length) {
    return [];
  }
  let outputArray = [];
  for (let i = 0; i < array.length; i++) {
    outputArray.push(callback(array[i]));
  }

  return outputArray;
}