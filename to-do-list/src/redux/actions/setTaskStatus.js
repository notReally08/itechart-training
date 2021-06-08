import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../db/api";

export const setTaskStatus = createAsyncThunk(
  "taskList/setTaskStatus",
  (id, status) => {
    return api().setTaskStatus(id, status);
  }
);