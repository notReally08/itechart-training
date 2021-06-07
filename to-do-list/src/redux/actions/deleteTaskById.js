import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../db/api";

export const deleteTaskById = createAsyncThunk(
  "taskList/deleteTaskById",
  task => {
    return api().deleteTask(task);
  }
);