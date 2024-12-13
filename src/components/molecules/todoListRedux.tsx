import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { updateTodoList } from "../../store/slices/todoSlice";

export const TodoListRedux = () => {
  const { todoList } = useAppSelector((state) => state.todoList);
  const dispatch = useAppDispatch();

  const [newItem, setNewItem] = useState<string>("");

  const onAddTask = () => {
    dispatch(updateTodoList([...todoList, newItem]));
  };

  return (
    <section>
      <input
        placeholder="nuevo elemento Redux"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      ></input>
      <button onClick={() => onAddTask()}>añadir</button>
      <ul>
        {todoList.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </section>
  );
};
