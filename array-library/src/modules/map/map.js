/*eslint keyword-spacing: ["error", { "before": true }]*/
/*eslint-env es6*/

export const map = (array, callback) => {
  let outputArray = [];
  for (let i = 0; i < array.length; i++) {
    outputArray.push(callback(array[i]));
  }
  return outputArray;
}

