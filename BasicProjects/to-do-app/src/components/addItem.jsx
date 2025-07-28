import AddContent from "./addContent";
import { ContextAPI } from "../store/ContextAPI";
import { useContext } from "react";

const AddItem = () =>{

  const {taskList} = useContext(ContextAPI)
  return(
    <div>
      {taskList.map((item)=>(
        <AddContent task={item.taskName} date={item.taskDate} key={taskList.indexOf(item)}/>
      ))}
    </div>
  )
}

export default AddItem;