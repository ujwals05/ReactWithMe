import style from "./addContent.module.css";
import { ContextAPI } from "../store/ContextAPI";
import { useContext } from "react";

const AddContent = ({task,date}) => {

  const{handleDeleteItem} = useContext(ContextAPI)

  const handleD = () =>{
    handleDeleteItem(task)
  }

  return (
    <>
    <div className={`container ${style.contentDiv} `}>
      <div className="row">
        <div className="col-6"> 
          {task}
        </div>
        <div className="col-4 text-center">
          {date}
        </div>
        <div className="col-2 text-center">
          <button type="button" 
          className="btn btn-outline-danger"
          onClick={handleD}
          >Delete</button>
        </div>
      </div>
</div>
    </>
  )
}

export default AddContent;