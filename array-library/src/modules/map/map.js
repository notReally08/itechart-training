export const map = (array, callback) => {
  if (typeof callback !== "function") {
    throw new Error("The second parameter should be a function");
  }

  if (!array.length) {
    return [];
  }

  let outputArray = [];
  for (let i = 0; i < array.length; i++) {
    outputArray.push(callback(array[i]));
  }
  return outputArray;
}

