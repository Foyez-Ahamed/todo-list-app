import { useState } from "react"
import NewTaskForm from "./components/NewTaskForm"
import CompletedTasks from "./components/CompletedTasks";
import NotCompletedTasks from "./components/NotCompletedTasks";

function App() {

  const tasks = [
    {
      title: 'Task 1',
      description: 'Complete project proposal',
      priority: 'high',
      isCompleted: false,
      deadline: '2024-02-15',
    },
    {
      title: 'Task 2',
      description: 'Prepare for presentation',
      priority: 'medium',
      isCompleted: true,
      deadline: '2024-02-20',
    },
    {
      title: 'Task 3',
      description: 'Review code changes',
      priority: 'low',
      isCompleted: false,
      deadline: '2024-02-18',
    },
    {
      title: 'Task 4',
      description: 'Update documentation',
      priority: 'medium',
      isCompleted: false,
      deadline: '2024-02-22',
    },
    {
      title: 'Task 5',
      description: 'Test new features',
      priority: 'high',
      isCompleted: true,
      deadline: '2024-02-17',
    },
    {
      title: 'Task 6',
      description: 'Attend team meeting',
      priority: 'low',
      isCompleted: false,
      deadline: '2024-02-21',
    },
    {
      title: 'Task 7',
      description: 'Resolve customer support tickets',
      priority: 'medium',
      isCompleted: false,
      deadline: '2024-02-25',
    },
    {
      title: 'Task 8',
      description: 'Update website content',
      priority: 'high',
      isCompleted: true,
      deadline: '2024-02-19',
    },
    {
      title: 'Task 9',
      description: 'Conduct code review session',
      priority: 'low',
      isCompleted: false,
      deadline: '2024-02-23',
    },
    {
      title: 'Task 10',
      description: 'Prepare for sprint planning',
      priority: 'medium',
      isCompleted: false,
      deadline: '2024-02-16',
    },
  ];
  

  const [allTasks, setAllTasks] = useState(tasks);

  let completed = allTasks.filter(task => task.isCompleted === true)

  let notCompleted = allTasks.filter(task => task.isCompleted === false)

  return (
    <div className="max-w-screen-xl mx-auto px-2 md:px-6 lg:px-8 lg:py-2 font-roboto">
     <h1 className="text-4xl text-center font-bold mt-10">Todo List</h1>
     <NewTaskForm allTasks={allTasks} setAllTasks={setAllTasks}></NewTaskForm>

     <div className="bg-blue-300 mt-6 p-3 rounded-md">
      <CompletedTasks completed={completed}></CompletedTasks>
     </div>

     <div className="bg-red-300 mt-6 p-3 rounded-md">
      <NotCompletedTasks notCompleted={notCompleted}></NotCompletedTasks>
     </div>
    </div>
   
  )
}

export default App
