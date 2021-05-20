/*eslint keyword-spacing: ["error", { "before": true }]*/
/*eslint-env es6*/

export const filter = (array, callback) => {
  let outputArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) continue;
    outputArray = [...outputArray, array[i]];
  }

  return outputArray;
}