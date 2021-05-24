export const filter = (array, callback) => {
  let outputArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])){
      continue;
    }
    outputArray.push(array[i]);
  }

  return outputArray;
}