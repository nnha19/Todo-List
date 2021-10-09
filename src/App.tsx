import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Route, Switch } from "react-router-dom";
import AddToDo from "./components/AddToDo/AddToDo";
import FinishedTasks from "./components/FinishedTasks/FinishedTasks";
import Tasks from "./components/Tasks/Tasks";

export interface ITasks {
  tasks: {
    task: string;
    finished: boolean;
    id: string;
  }[];
}

function App() {
  const [tasks, setTasks] = useState<ITasks["tasks"]>([]);
  const history = useHistory();
  const [activeHeader, setActiveHeader] = useState("tasks");

  let activeHeaderStyle = `border-b-2 border-black font-bold`;

  const changeActiveHeaderHandler = (header: string): void => {
    setActiveHeader(header);
    history.push(`/${header}`);
  };

  return (
    <div className="wrapper">
      <h1 className="font-medium text-2xl text-center my-6">
        List your tasks and keep track of them to be more productitive.
      </h1>
      <div className="w-96 border-2 mx-auto ">
        <div className="flex border-b-2 px-6 justify-between font-medium">
          <h2
            onClick={() => changeActiveHeaderHandler("tasks")}
            className={`cursor-pointer py-2 ${
              activeHeader === "tasks" && activeHeaderStyle
            } `}
          >
            Your Tasks
          </h2>

          <h2
            onClick={() => changeActiveHeaderHandler("finished tasks")}
            className={`${
              activeHeader === "finished tasks" && activeHeaderStyle
            } cursor-pointer py-2`}
          >
            Finished Tasks
          </h2>
        </div>
        <div className="h-medium">
          <Switch>
            {tasks && tasks.length > 0 && (
              <Route
                path="/tasks"
                render={(props) => <Tasks setTasks={setTasks} tasks={tasks} />}
              />
            )}
            <Route
              path="/finished tasks"
              render={(props) => <FinishedTasks tasks={tasks} />}
            />
          </Switch>
        </div>
        <AddToDo tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;
