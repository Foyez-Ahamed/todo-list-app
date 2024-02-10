import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { addToDB } from "../localDB";

const NewTaskForm = ({allTasks, setAllTasks}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { register, handleSubmit, reset } = useForm();

  const handleAddNewTask = (data) => {

    const newTask = {
        ...data,
        isCompleted : false
        
    };
    setAllTasks([...allTasks, newTask])
    addToDB(newTask);

    onClose();
    reset();
  };

  return (
    <div>
      <>
        <div className="mt-6">
        <Button onClick={onOpen}>Add New Task +</Button>
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
              className="flex flex-col gap-4 p-6 relative "
            >
              <ModalHeader>
                <h4 className="text-3xl  font-semibold">
                  Please add your task
                </h4>
              </ModalHeader>
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
                  className="w-full py-2 font-medium text-xl text-white bg-[#A93159] rounded-md"
                  type="submit"
                >
                  Add
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
