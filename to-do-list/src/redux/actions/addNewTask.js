import { createAsyncThunk } from "@reduxjs/toolkit";
import { api} from "../../db/api";

export const addNewTask = createAsyncThunk(
  "taskList/addNewTask",
  task => {
    return api(task).addTask();
  }
);