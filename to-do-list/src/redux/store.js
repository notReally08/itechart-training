import { configureStore } from "@reduxjs/toolkit";
import taskListReducer from "./tasks/task-list-slice";

export default configureStore({
  reducer: {
    taskList: taskListReducer,
  },
});