export const API = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 4000);
  })
}