import { createSlice} from "@reduxjs/toolkit";
import uuid from "uuid";
import { defaultTasks } from "../initial-state";
import { addNewTask } from "./../actions/addNewTask.js";
 
export const taskListSlice = createSlice({
  name: "taskList",
  initialState: { tasks: defaultTasks },
  reducers: {},
  extraReducers: {
    [addNewTask.fulfilled]: (state, action) => {
      action.payload.id = uuid.v4();
      state.tasks.push(action.payload)
    },
  },
});

export default taskListSlice.reducer;