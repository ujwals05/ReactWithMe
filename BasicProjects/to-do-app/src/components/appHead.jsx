import style from "./appHead.module.css"
import { ContextAPI } from "../store/ContextAPI";
import { useRef,useContext } from "react";

const AppHead = ({AddItem}) => {

  const {handleAddItem} = useContext(ContextAPI)

  const AddTask = useRef();
  const AddDate = useRef();

  let handleClick = () => {
    let tasking =  AddTask.current.value;
    let dating = AddDate.current.value 
    if(tasking != "" &&dating != "")
      handleAddItem(tasking,dating);
    else
      alert("Enter both Task and Date.");
    AddTask.current.value = "";
    AddDate.current.value = "";
  }

  return (
  <div className={`container text-center ${style.mainDiv}`}>
    <div className="row">
      <div className="col-6">
        <input type="text" 
        placeholder="Enter the task"
        ref={AddTask}/>
      </div>
      <div className="col-4">
        <input type="date"
        ref={AddDate}/>
      </div>
      <div className="col-2">
        <button type="button" 
        className="btn btn-success" 
        onClick={handleClick}
        >Add</button>
      </div>
    </div>
  </div>
  )
}

export default AppHead;