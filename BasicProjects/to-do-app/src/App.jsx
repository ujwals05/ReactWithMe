import AppHead from "./components/appHead"
import style from "./App.module.css"
import AddItem from "./components/addItem";
import DefaultMessage from "./components/DefaultMessage";
import { ContextAPI } from "./store/ContextAPI";
import { useState } from "react";


function App() {

  //Sample output:
  let data = [
  {
    taskName:"ReactJS",
    taskDate:"21-07-2025"
  },
  {
    taskName:"Java",
    taskDate:"22-07-2025"
  },
  {
    taskName:"Cloud",
    taskDate:"23-07-2025"
  },
]

const [taskList,addTask] = useState([]);

const handleAddItem = (task,date) => {
  const newArr = [...taskList,{taskName:task,taskDate:date}];
  addTask(newArr);
}

const handleDeleteItem = (task) => {
  const newArr = taskList.filter((item)=>item.taskName!=task);
  addTask(newArr);
}

  return (
    <>
    <h1 className={style.appTitle}>ToDo App</h1>
    <ContextAPI
    value={
      {
        taskList,
        handleAddItem,
        handleDeleteItem,
      }
    }
    >
      <AppHead />
      <DefaultMessage/>
      <AddItem data={taskList} DeleteItem={handleDeleteItem} />
    </ContextAPI>
    </>
  )
}

export default App
