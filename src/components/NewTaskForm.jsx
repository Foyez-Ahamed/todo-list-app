import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { addToDB } from "../localDB";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa";

const NewTaskForm = ({ allTasks, setAllTasks }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { register, handleSubmit, reset } = useForm();

  const handleAddNewTask = (data) => {
    const newTask = {
      ...data,
      isCompleted: false,
      id: allTasks.length,
    };
    setAllTasks([...allTasks, newTask]);
    addToDB(newTask);

    onClose();
    reset();
    toast.success("Task added successfully");
  };

  return (
    <div>
      <>
        <div className="ml-3 mt-6 flex items-center gap-6">
          <button
            className=" text-medium font-bold shadow-md px-4 py-1 lg:py-2 rounded bg-[#E76F51] text-white hover:bg-gray-500 transition-all duration-300 flex justify-center items-center gap-2"
            onClick={onOpen}
          >
            Add New Task <FaPlus />
          </button>
          <h2 className="text-medium font-bold shadow-md px-4 py-1 lg:py-2 rounded bg-gray-100">
            Total Task: {allTasks.length}
          </h2>
        </div>
        <Modal
          onClose={onClose}
          isOpen={isOpen}
          size="xl"
          scrollBehavior="outside"
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <form
              onSubmit={handleSubmit(handleAddNewTask)}
              className="flex flex-col gap-4 py-3 relative "
            >
              <ModalCloseButton />
              <ModalBody>
                <div className="flex flex-col gap-3">
                  <label className="font-medium" htmlFor="title">
                    Title
                  </label>
                  <input
                    className="border border-gray-600 rounded-md p-3"
                    placeholder="Task title"
                    type="text"
                    id="title"
                    {...register("title", { required: true })}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="font-medium" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    className="border border-gray-600 rounded-md p-3 h-[80px]"
                    placeholder="Task description"
                    type="text"
                    id="description"
                    {...register("description", { required: true })}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="font-medium" htmlFor="priority">
                    Priority
                  </label>
                  <select
                    className="border border-gray-600 rounded-md p-3"
                    id="priority"
                    {...register("priority", { required: true })}
                  >
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
                <div className="flex flex-col gap-3">
                  <label className="font-medium" htmlFor="deadline">
                    Deadline
                  </label>
                  <input
                    className="border border-gray-600 rounded-md p-3"
                    placeholder="Task deadline"
                    type="date"
                    id="deadline"
                    {...register("deadline", { required: true })}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <button
                  className="w-full py-2 font-medium text-medium hover:bg-gray-400 text-white bg-[#E76F51] rounded-md"
                  type="submit"
                >
                  Add Task
                </button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};

export default NewTaskForm;
