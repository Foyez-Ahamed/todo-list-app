
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { deleteTaskFromDB, editTaskFromDB } from "../localDB";
import EditTaskModal from "./EditTaskModal";
import { useDisclosure } from "@chakra-ui/react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
const TaskCard = ({task, allTasks, setAllTasks}) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const {title, description, deadline, isCompleted, priority, id} = task;

    let priorityBg = "";

    if(priority === "high"){
        priorityBg = "bg-[#963831]"
    } else if(priority === "medium"){
        priorityBg = "bg-[#073b4c]"
    } else{
        priorityBg = "bg-[#4c1e4f]"
    }
    
    const handleDelete = () => {

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
                const tasksAfterRemove = allTasks.filter(task => !(task.id === id));
                setAllTasks(tasksAfterRemove);
                deleteTaskFromDB(id);
                toast.success("Task deleted Successfully")
            }
          });
    }

    const handleOpenModal = () => {
        onOpen();
    }

    const handleEdit = (data) => {
        // const eiditedTask = allTasks.find(task => (task.id === id));
        console.log(data);
        console.log(data.isCompleted);
        const status = data.isCompleted === "completed" ? true : false
        const dataWithId = { ...data, id, isCompleted : status };
        console.log(dataWithId);
    
        let editedTaskPosition = 0;
    
        for(let i = 0; i < allTasks.length; i++){
          if(id === allTasks[i].id){
            editedTaskPosition = i
          }
        }
        console.log(editedTaskPosition, "edited position");
        let newAllTasks = [...allTasks];
        newAllTasks[editedTaskPosition] = dataWithId;
        console.log(newAllTasks, "varrible");
        setAllTasks(newAllTasks);
        console.log(allTasks, "state value");
        editTaskFromDB(id, dataWithId)
        onClose();
    }


    return (
       
        <div>
             <div className="p-4 flex flex-col gap-2 bg-gray-200 shadow-lg rounded mt-6 relative">
            <h3 className="font-semibold text-medium lg:text-xl capitalize">{title}</h3>
            <h4 className="text-medium font-bold">Status: <span style={{ color: isCompleted ? 'green' : 'inherit' }}>{isCompleted ? "completed" : "incomplete"}</span></h4>
            <p className={`capitalize absolute right-4 top-4 p-1 px-3 ${priorityBg} rounded text-white text-[16px] font-bold`}>{priority}</p>
            <p className="capitalize">{description}</p>
            <p >Deadline: {deadline}</p>
            <div className="flex gap-4 items-center">
               <div>
               <FaRegEdit onClick={handleOpenModal}/>
               </div>
                <div>
                <AiOutlineDelete onClick={handleDelete}/>
                </div>
                </div>

        </div>

         <EditTaskModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} {...task} handleEdit={handleEdit}></EditTaskModal>
        </div>
    );
};

export default TaskCard;