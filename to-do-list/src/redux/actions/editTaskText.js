import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../db/api";

export const editTaskText = createAsyncThunk(
  "taskList/editTaskText",
  (id, text) => {
    return api().editTaskText(id, text);
  }
);