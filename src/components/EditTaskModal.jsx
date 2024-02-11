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

const EditTaskModal = ({isOpen, onOpen, onClose, title, description, deadline, isCompleted, priority, allTasks, setAllTasks}) => {

  const { register, handleSubmit, reset } = useForm();

  const handleEdit = () => {
    const eiditedTask = allTasks.find(task => !(task.title === title && task.description === description));
    console.log(eiditedTask);
    onClose();
    reset();
}

    return (
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
              onSubmit={handleSubmit(handleEdit)}
              className="flex flex-col gap-4 p-6 relative "
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
                    defaultValue={title}
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
                    defaultValue={description}
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
                    defaultValue={priority}
                    {...register("priority", { required: true })}
                  >
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="font-medium" htmlFor="isCompleted">
                    Status
                  </label>
                  <select
                    className="border border-gray-600 rounded-md p-3"
                    id="status"
                    defaultValue={isCompleted ? "completed" : "notCompleted"}
                    {...register("status", { required: true })}
                  >
                    <option value="notCompleted">Not Completed</option>
                    <option value="completed">Completed</option>
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
                    defaultValue={deadline}
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
                  Save
                </button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
    );
};

export default EditTaskModal;