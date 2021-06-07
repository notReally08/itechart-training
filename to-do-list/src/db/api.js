export const api = (data) => {
  return {
    addTask() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(data), 4000);
      })
    }
  }
}