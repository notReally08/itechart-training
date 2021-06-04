import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import uuid from "uuid";
import { API } from "./../../db/queries";
import { defaultTasks } from "./../initial-state";

export const addNewTask = createAsyncThunk(
  "taskList/addNewTask",
  (task) => {
    return API(task);
  }
);

export const taskListSlice = createSlice({
  name: "taskList",
  initialState: {tasks: defaultTasks},
  reducers: {},
  extraReducers: {
    [addNewTask.fulfilled]: (state, action) => {
      action.payload.id = uuid.v4();
      state.tasks.push(action.payload)
    },
  },
});

export default taskListSlice.reducer;