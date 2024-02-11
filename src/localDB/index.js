const getLocalStorageSaveTasks = () => {
  let previousSaved = [];
  const isExist = localStorage.getItem("allTasks");
  if (isExist) {
    const saved = JSON.parse(isExist);
    previousSaved = saved;
  } else {
    previousSaved = [
      {
        id: 0,
        title: "Task 1",
        description: "Complete project proposal",
        priority: "high",
        isCompleted: false,
        deadline: "2024-02-15",
      },
      {
        id: 1,
        title: "Task 2",
        description: "Prepare for presentation",
        priority: "medium",
        isCompleted: true,
        deadline: "2024-02-20",
      },
      {
        id: 2,
        title: "Task 3",
        description: "Review code changes",
        priority: "medium",
        isCompleted: false,
        deadline: "2024-02-18",
      },

      {
        id: 3,
        title: "Task 3",
        description: "Test new features",
        priority: "high",
        isCompleted: true,
        deadline: "2024-02-17",
      },
      {
        id: 4,
        title: "Task 4",
        description: "Attend team meeting",
        priority: "low",
        isCompleted: false,
        deadline: "2024-02-21",
      },

      {
        id: 5,
        title: "Task 5",
        description: "Attend team meeting",
        priority: "low",
        isCompleted: true,
        deadline: "2024-02-21",
      },
    ];
  }
  return previousSaved;
};

const addToDB = (newTask) => {
  let previousTasks = getLocalStorageSaveTasks();
  previousTasks.push(newTask);
  localStorage.setItem("allTasks", JSON.stringify(previousTasks));
};

const deleteTaskFromDB = (id) => {
  let previousTasks = getLocalStorageSaveTasks();
  const tasksAfterRemove = previousTasks.filter((task) => !(task.id === id));
  localStorage.setItem("allTasks", JSON.stringify(tasksAfterRemove));
};

const editTaskFromDB = (id, task) => {
  const previousTasks = getLocalStorageSaveTasks();

  let editedTaskPosition = 0;

  for (let i = 0; i < previousTasks.length; i++) {
    if (id === previousTasks[i].id) {
      editedTaskPosition = i;
    }
  }

  let newAllTasks = [...previousTasks];
  newAllTasks[editedTaskPosition] = task;
  localStorage.setItem("allTasks", JSON.stringify(newAllTasks));
};

export { getLocalStorageSaveTasks, addToDB, deleteTaskFromDB, editTaskFromDB };
