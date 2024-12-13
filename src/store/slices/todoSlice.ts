import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TodoSliceProps = {
  todoList: string[];
};

const initialState: TodoSliceProps = {
  todoList: [],
};

const reducers = {
  updateTodoList: (state: TodoSliceProps, action: PayloadAction<string[]>) => {
    state.todoList = action.payload;
  },
};

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers,
});

export const { updateTodoList } = todoSlice.actions;

export default todoSlice.reducer;
