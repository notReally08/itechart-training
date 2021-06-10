export const api = () => {
  return {
    addTask(data) {
      return new Promise(resolve => {
        setTimeout(() => resolve(data), 4000);
      });
    },
    deleteTask(id) {
      return new Promise(resolve => {
        setTimeout(() => resolve(id), 1000);
      });
    },
    setTaskStatus(id, status) {
      return new Promise(resolve => {
        setTimeout(() => resolve(id, status), 1000);
      });
    },
    editTaskText(id, text) {
      return new Promise(resolve => {
        setTimeout(() => resolve(id, text), 5000);
      });
    }
  };
}