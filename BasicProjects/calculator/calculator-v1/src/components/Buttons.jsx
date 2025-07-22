import style from "./Buttons.module.css"

const Buttons = () =>{
  const buttonName = ['1','2','3','DEL','C','4','5','6','+','-','7','8','9','*','/','.','0','=','R','RAN']
  return(
    <>
    <div className={style.buttonContainer}>
      {buttonName.map((eachButton)=>(
        <button className={style.button}>{eachButton}</button>
      ))}
    </div>
    </>
  )
}
export default Buttons;