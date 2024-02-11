const handleFilter = (e, tasks, setTasks) => {
    e.preventDefault();
    console.log(e.target.value);
    if(e.target.value === "all"){
        setTasks(tasks)
    } else if(e.target.value === "high"){
      const highValue = tasks.filter(task => task.priority === "high")
      setTasks(highValue)
    }  else if(e.target.value === "medium"){
      const mediumValue = tasks.filter(task => task.priority === "medium")
      setTasks(mediumValue)
    } else {
      const lowValue = tasks.filter(task => task.priority === "low")
      setTasks(lowValue)
    }
 };

 export default handleFilter;