export const filter = (array, callback) => {
  if (typeof callback !== "function") {
    throw new Error("The second parameter should be a function");
  }

  let outputArray = [];
  for (let i = 0; i < array.length; i++) {
    
    if (!callback(array[i])){
      continue;
    }

    outputArray.push(array[i]);
  }
  return outputArray;
}