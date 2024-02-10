

const TaskCard = ({task}) => {
    const {title, description, deadline, completed, priority} = task;

    let priorityBg = "";

    if(priority === "high"){
        priorityBg = "bg-red-600"
    } else if(priority === "medium"){
        priorityBg = "bg-green-500"
    } else{
        priorityBg = "bg-blue-600"
    }
    console.log();
    return (
        <div className="p-4 flex flex-col gap-2 bg-orange-500 relative">
            <h3 className="font-semibold text-2xl capitalize">{title}</h3>
            <h4>Status: {completed ? "completed" : "Not Completed"}</h4>
            <p className={`capitalize absolute right-4 top-4 p-1 ${priorityBg} rounded text-white text-[12px]`}>{priority}</p>
            <p className="capitalize">{description}</p>
            <p >Deadline: {deadline}</p>
        </div>
    );
};

export default TaskCard;