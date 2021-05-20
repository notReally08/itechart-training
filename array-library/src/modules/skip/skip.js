/*eslint keyword-spacing: ["error", { "before": true }]*/
/*eslint-env es6*/

export const skip = (array, n) => {
  let outputArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i === n - 1) continue;
    outputArray = [...outputArray, array[i]];
  }
  return outputArray;
}