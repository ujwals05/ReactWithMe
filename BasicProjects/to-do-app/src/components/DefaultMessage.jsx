import style from "./DefaultMessage.module.css";
import { ContextAPI } from "../store/ContextAPI";
import { useContext } from "react";
const DefaultMessage = () => {

  const {taskList} = useContext(ContextAPI)

  return (
    <>
    <div className={style.default} >
      {taskList.length === 0 && <h3>Enjoy your day</h3>}
    </div>
    </>
  )
}

export default DefaultMessage;