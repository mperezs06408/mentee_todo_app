import { useState } from "react";

export const useTasks = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>();

  const addTasks = (task: string) => {
    if (!!task) {
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const removeTask = (index: number) => {};

  return {
    addTasks,
  };
};
