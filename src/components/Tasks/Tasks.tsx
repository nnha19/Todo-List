import React from "react";

import { ITasks } from "../../App";

interface IProps {
  tasks: ITasks["tasks"];
  setTasks: React.Dispatch<React.SetStateAction<ITasks["tasks"]>>;
}

const Tasks: React.FC<IProps> = ({ tasks, setTasks }) => {
  const deleteTaskHandler = (id: string): void => {
    const updatedTasks = tasks.filter((task) => id !== task.id);
    setTasks(updatedTasks);
  };

  const finishTaskHandler = (id: string) => {
    const finishedTaskIndex = tasks.findIndex((task) => id === task.id);
    const clonedTasks = [...tasks];
    clonedTasks[finishedTaskIndex].finished = true;
    setTasks(clonedTasks);
  };

  const taskList = tasks
    .filter((task, i) => !task.finished)
    .map((task, i) => {
      return (
        <div className="px-6 py-4 bg-gray-200 mt-2" key={task.id}>
          <h2>{task.task}</h2>
          <div>
            <button className="text-xs mr-2">Edit</button>
            <button
              onClick={() => deleteTaskHandler(task.id)}
              className="text-xs mr-2"
            >
              Delete
            </button>
            <button
              onClick={() => finishTaskHandler(task.id)}
              className="text-xs mr-2"
            >
              Done
            </button>
          </div>
        </div>
      );
    });
  return <div>{taskList}</div>;
};

export default Tasks;
