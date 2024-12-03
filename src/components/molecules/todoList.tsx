import { useState } from "react";
import { useTodoContext } from "../../hooks/useTodoContext";

export const TodoList = () => {
  const { todoList, updateTodoList } = useTodoContext();
  const [newItem, setNewItem] = useState<string>("");

  const onAddTask = () => {
    updateTodoList([...todoList, newItem]);
  };

  return (
    <section>
      <input
        placeholder="nuevo elemento"
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
