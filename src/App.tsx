import { TodoList } from "./components/molecules/todoList";
import { TodoProvider } from "./hooks/useTodoContext";

function App() {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
}

export default App;
