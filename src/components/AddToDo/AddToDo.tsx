import React, { useState } from "react";
import BackDrop from "../../share/BackDrop";
import { v4 as uuidv4 } from "uuid";
import { ITasks } from "../../App";
interface IProps {
  tasks: ITasks["tasks"];
  setTasks: React.Dispatch<React.SetStateAction<ITasks["tasks"]>>;
}

const AddToDo: React.FC<IProps> = ({ setTasks, tasks }) => {
  const [showModal, setShowModal] = useState(false);
  const [taskVal, setTaskVal] = useState("");

  const addTaskHandler = (e: any) => {
    e.preventDefault();
    setTasks([...tasks, { task: taskVal, finished: false, id: uuidv4() }]);
    setShowModal(false);
    setTaskVal("");
  };

  return (
    <>
      <div className="border-t-2 py-2 px-6">
        <button
          onClick={() => setShowModal(true)}
          className="w-full bg-red-500 py-2 text-white"
        >
          Add New Task
        </button>
      </div>
      {showModal && (
        <>
          <BackDrop testId="backdrop" clicked={() => setShowModal(false)} />
          <div className="bg-white h-80 w-80 z-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 className="px-6 py-4 border-b-2">Add New Task</h2>
            <div className="px-6">
              <form data-testid="add-task-form" onSubmit={addTaskHandler}>
                <textarea
                  data-testid="add-task-input"
                  onChange={(e) => setTaskVal(e.target.value)}
                  className=" mt-4 px-6 w-full  border-2 block"
                  value={taskVal}
                  placeholder="Add Your Task"
                ></textarea>
                <button className="my-4 w-full px-6 bg-red-500 py-2 text-white">
                  Add
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AddToDo;
