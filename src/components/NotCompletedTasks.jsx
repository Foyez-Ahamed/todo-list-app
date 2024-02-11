import TaskCard from "./TaskCard";

const NotCompletedTasks = ({ notCompleted, allTasks, setAllTasks }) => {
  return (
    <div>

      <div className="flex items-center gap-2 justify-between">
        <h1 className="text-3xl font-medium">Not Completed Tasks</h1>

        <div className="flex items-center gap-3">
          <label className="font-medium" htmlFor="priority">
            Priority
          </label>
          <select
            className="border border-gray-600 rounded-md p-3"
            id="priority"
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notCompleted.map((task) => (
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
