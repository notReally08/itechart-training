import { createSlice} from "@reduxjs/toolkit";
import uuid from "uuid";
import { initialState } from "../initialState";
import { addNewTask } from "./../actions/addNewTask.js";
import { deleteTaskById } from "./../actions/deleteTaskById";
import { setTaskStatus } from "./../actions/setTaskStatus";
import { editTaskText } from "./../actions/editTaskText";
 
export const taskListSlice = createSlice({
  name: "taskList",
  initialState: { tasks: initialState },
  reducers: {},
  extraReducers: {
    [addNewTask.fulfilled]: (state, action) => {
      action.payload.id = uuid.v4();
      state.tasks.push(action.payload)
    },
    [deleteTaskById.fulfilled]: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id!== action.payload);
    },
    [setTaskStatus.fulfilled]: (state, action) => {
      state.tasks = state.tasks.map(task => {
        if (task.id === action.payload.id) {
          task.status = action.payload.status;
        }

        return task;
      });
    },
    [editTaskText.fulfilled]: (state, action) => {
      state.tasks = state.tasks.map(task => {
        if (task.id === action.payload.id) {
          task.text = action.payload.text;
        }

        return task;
      });
    },
  },
});

export default taskListSlice.reducer;