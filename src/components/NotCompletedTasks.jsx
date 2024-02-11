import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import handleFilter from "../utility/priorityFilter";

const NotCompletedTasks = ({ notCompleted, allTasks, setAllTasks }) => {

    const [displayNotCompleted, setDisplayNotCompleted] = useState([]) 

   useEffect(()=> {
    setDisplayNotCompleted(notCompleted);
   },[notCompleted])

  return (
    <div>

      <div className="flex items-center gap-2 justify-between">
        <h1 className=" text-medium lg:text-3xl font-medium">Incomplete Tasks: {notCompleted.length}</h1>

        <form className="flex items-center gap-3">
          <label className="font-medium" htmlFor="Filter">
            Filter
          </label>
          <select
            onChange={(e) => handleFilter(e, notCompleted, setDisplayNotCompleted)}
            className="border border-gray-600 rounded-md p-3"
            id="Filter"
          >
            <option value="all">All</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayNotCompleted.map((task) => (
          <TaskCard
            key={task.title}
            task={task}
            allTasks={allTasks}
            setAllTasks={setAllTasks}
          ></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default NotCompletedTasks;
