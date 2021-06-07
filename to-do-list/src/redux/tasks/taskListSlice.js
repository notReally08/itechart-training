import { createSlice} from "@reduxjs/toolkit";
import uuid from "uuid";
import { initialState } from "../initialState";
import { addNewTask } from "./../actions/addNewTask.js";
 
export const taskListSlice = createSlice({
  name: "taskList",
  initialState: { tasks: initialState },
  reducers: {},
  extraReducers: {
    [addNewTask.fulfilled]: (state, action) => {
      action.payload.id = uuid.v4();
      state.tasks.push(action.payload)
    },
  },
});

export default taskListSlice.reducer;