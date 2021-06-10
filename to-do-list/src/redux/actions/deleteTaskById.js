import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../db/api";

export const deleteTaskById = createAsyncThunk(
  "taskList/deleteTaskById",
  id => {
    return api().deleteTask(id);
  }
);