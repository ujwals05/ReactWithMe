import style from "./DisplayInput.module.css"

const DisplayInput = () =>{
  return(
    <>
    <div>
      <input className={style.displayInput} type="text" readOnly/>
    </div>
    </>
  )
}

export default DisplayInput;