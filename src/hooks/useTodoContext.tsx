import { createContext, useContext, useMemo, useState } from "react";

export type ContextProps = {
  todoList: string[];
  updateTodoList: (list: string[]) => void;
};

export const Context = createContext<ContextProps>({} as ContextProps);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todoList, setTodoList] = useState<string[]>([]);

  const updateTodoList = (list: string[]) => {
    setTodoList(list);
  };

  const value = useMemo(
    () => ({
      todoList,
      updateTodoList,
    }),
    [todoList, updateTodoList]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useTodoContext = () => useContext(Context);
