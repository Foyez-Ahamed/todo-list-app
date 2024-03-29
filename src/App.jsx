import { useEffect, useState } from "react";
import NewTaskForm from "./components/NewTaskForm";
import CompletedTasks from "./components/CompletedTasks";
import NotCompletedTasks from "./components/NotCompletedTasks";
import { getLocalStorageSaveTasks } from "./localDB";

function App() {
  const [allTasks, setAllTasks] = useState([]);
  let completed = allTasks.filter((task) => task.isCompleted === true);
  let notCompleted = allTasks.filter((task) => task.isCompleted === false);
  useEffect(() => {
    const previousTasks = getLocalStorageSaveTasks();
    setAllTasks(previousTasks);
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-2 md:px-6 lg:px-8 lg:py-2 font-roboto">
      <h1 className=" text-3xl lg:text-4xl text-center font-bold mt-10">
        Todo <span className="text-[#E76F51]">List</span>
      </h1>

      <div className="mt-6">
        <NewTaskForm
          allTasks={allTasks}
          setAllTasks={setAllTasks}
        ></NewTaskForm>
      </div>

      <div className="mt-6 p-3 rounded-md">
        <CompletedTasks
          completed={completed}
          allTasks={allTasks}
          setAllTasks={setAllTasks}
        ></CompletedTasks>
      </div>

      <div className="mt-6 p-3 rounded-md">
        <NotCompletedTasks
          notCompleted={notCompleted}
          allTasks={allTasks}
          setAllTasks={setAllTasks}
        ></NotCompletedTasks>
      </div>
    </div>
  );
}

export default App;
