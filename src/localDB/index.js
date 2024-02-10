const getLocalStorageSaveTasks = () => {
   let previousSaved = [];
   const isExist = localStorage.getItem("allTasks");
   if(isExist){
    const saved = JSON.parse(isExist);
    previousSaved = saved;
   }
   return previousSaved;
}

const addToDB = (newTask) => {
    let previousTasks = getLocalStorageSaveTasks();
    previousTasks.push(newTask);
    localStorage.setItem("allTasks", JSON.stringify(previousTasks));
};

const deleteTaskFromDB = (title, description) => {
    let previousTasks = getLocalStorageSaveTasks();
    const tasksAfterRemove = previousTasks.filter(task => !(task.title === title && task.description === description));
    localStorage.setItem("allTasks", JSON.stringify(tasksAfterRemove));
}

export { getLocalStorageSaveTasks, addToDB, deleteTaskFromDB };