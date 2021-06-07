import { configureStore } from "@reduxjs/toolkit";
import taskListReducer from "./tasks/taskListSlice";

export default configureStore({
  reducer: {
    taskList: taskListReducer,
  },
});