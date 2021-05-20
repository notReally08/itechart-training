/*eslint keyword-spacing: ["error", { "before": true }]*/
/*eslint-env es6*/

export const take = (array, n) => {
  let outputArray = [];
  for (let i = 0; i < n; i++) {
    outputArray = [...outputArray, array[i]];
  }
  return outputArray;
}