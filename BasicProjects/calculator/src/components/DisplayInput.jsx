import style from "./DisplayInput.module.css"

const DisplayInput = ({currentVal}) =>{
  return(
    <>
    <div> 
      <input 
      className={style.displayInput} 
      type="text" 
      readOnly
      value={currentVal}
      > </input>
    </div>
    </>
  )
}

export default DisplayInput;