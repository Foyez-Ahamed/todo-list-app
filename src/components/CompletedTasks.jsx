import TaskCard from "./TaskCard";


const CompletedTasks = ({completed}) => {
    return (
        <div>
            <h1 className="text-3xl font-medium">Completed Tasks</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    completed.map(task => <TaskCard key={task.title} task={task}></TaskCard> )
                }
            </div>
        </div>
    );
};

export default CompletedTasks;