export const api = () => {
  return {
    addTask(data) {
      return new Promise(resolve => {
        setTimeout(() => resolve(data), 4000);
      });
    }
  }
}