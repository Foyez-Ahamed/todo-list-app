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
    let previousTask = getLocalStorageSaveTasks();
    previousTask.push(newTask);
    localStorage.setItem("allTasks", JSON.stringify(previousTask));
}

export { getLocalStorageSaveTasks, addToDB };