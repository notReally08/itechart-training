export const foreach = (array, callback) => {
  let copyArray = [...array];
  for (let i = 0; i < copyArray.length; i++) {
    callback(copyArray[i])
  }
}