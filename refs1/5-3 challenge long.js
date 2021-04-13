const tasks = [
    { title: "Meeting with John", taskId: 4621 },
    { title: "Visit gym", taskId: 6821 },
    { title: "Buy new phone" },
    { title: "Clean the room", taskId: 2721 },
    { title: "Plan a trip" }
  ];

const generateTaskIds = tasks => {
    return tasks.map(({...task}) => {
    
      if (!task.hasOwnProperty("taskId")){
        let newTaskId;
        do {
          newTaskId = 1000 + Math.floor(Math.random() * 9000);
        task.taskId = newTaskId;
        } while (tasks.find(task => task.taskId === newTaskId));  
      }
      return task;
    });
};

const tasksSortedByIds = (tasks, tasksWithIds = generateTaskIds(tasks)) => {
  console.log(`Quantity of the missing taskIds is ${tasks.filter(task => !task.hasOwnProperty("taskId")).length}`) 
  return tasksWithIds.sort((a, b) => a.taskId - b.taskId);

}

// console.log());



  console.log(
    "Sorted array of tasks with taskIds:",
    tasksSortedByIds(tasks)
  );

  
  console.log(
    "Original unsorted array of tasks with missing taskIds:",
    tasks
  );