export const vallidateTaskText = (value) => {
  let error;
  if (!value.trim()) {
    error = "Required";
  }
  return error;
}