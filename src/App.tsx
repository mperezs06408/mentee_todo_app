import { TodoList } from "./components/molecules/todoList";
import { TodoListRedux } from "./components/molecules/todoListRedux";
import { TodoProvider } from "./hooks/useTodoContext";

function App() {
  return (
    <TodoProvider>
      <TodoList />
      <TodoListRedux />
    </TodoProvider>
  );
}

export default App;
