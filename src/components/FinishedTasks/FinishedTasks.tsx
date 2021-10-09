import React from "react";

import { ITasks } from "../../App";
interface IProps {
  tasks: ITasks["tasks"];
}

const FinishedTasks: React.FC<IProps> = ({ tasks }) => {
  const taskList = tasks
    .filter((task) => task.finished)
    .map((task, i) => {
      return (
        <div className="px-6 py-4 my-2 flex justify-between border-b-2" key={i}>
          <p>{task.task}</p>
          <span className="text-xs px-4 bg-red-500 text-white rounded-lg self-center">
            Done
          </span>
        </div>
      );
    });
  return <div>{taskList}</div>;
};

export default FinishedTasks;
