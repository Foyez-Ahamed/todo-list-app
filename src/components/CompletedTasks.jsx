import { useState } from "react";
import TaskCard from "./TaskCard";

const CompletedTasks = ({ completed, allTasks, setAllTasks, x }) => {
 
   const [displayCompleted, setDisplayCompleted] = useState(completed) 

   const handleFilter = (e) => {
      e.preventDefault();
      console.log(e.target.value);
    //   if(e.target.value === "high"){
    //     const highValue = 
    //   }
   }
 

  return (
    <div>
      <div className="flex items-center gap-2 justify-between">
        <h1 className="text-3xl font-medium">Completed Tasks</h1>

        <form className="flex items-center gap-3">
          <label className="font-medium" htmlFor="Filter">
            Filter
          </label>
          <select onChange={handleFilter} className="border border-gray-600 rounded-md p-3" id="Filter">
            <option value="all">All</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </form>
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayCompleted.map((task) => (
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

export default CompletedTasks;
