
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { deleteTaskFromDB } from "../localDB";
import EditTaskModal from "./EditTaskModal";
import { useDisclosure } from "@chakra-ui/react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
const TaskCard = ({task, allTasks, setAllTasks}) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const {title, description, deadline, isCompleted, priority} = task;

    let priorityBg = "";

    if(priority === "high"){
        priorityBg = "bg-red-600"
    } else if(priority === "medium"){
        priorityBg = "bg-green-500"
    } else{
        priorityBg = "bg-blue-600"
    }
    
    const handleDelete = (tit, descrip) => {

        Swal.fire({
            title: "Are you sure?",
            text: "Want to delete this task!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                const tasksAfterRemove = allTasks.filter(task => !(task.title === tit && task.description === descrip));
                setAllTasks(tasksAfterRemove);
                deleteTaskFromDB(tit, descrip);  
                toast.success("Task deleted Successfully")
            }
          });
    }

    return (
       

        <div>
             <div className="p-4 flex flex-col gap-2 bg-orange-500 relative">
            <h3 className="font-semibold text-2xl capitalize">{title}</h3>
            <h4>Status: {isCompleted ? "completed" : "Not Completed"}</h4>
            <p className={`capitalize absolute right-4 top-4 p-1 ${priorityBg} rounded text-white text-[12px]`}>{priority}</p>
            <p className="capitalize">{description}</p>
            <p >Deadline: {deadline}</p>
            <div className="flex gap-4 items-center">
               <div>
               <FaRegEdit onClick={onOpen}/>
               </div>
                <div>
                <AiOutlineDelete onClick={() => handleDelete(title, description)} />
                </div>
                </div>

        </div>

         <EditTaskModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} {...task} allTasks={allTasks} setAllTasks={setAllTasks}></EditTaskModal>
        </div>
    );
};

export default TaskCard;