
import  style from './App.module.css'
import DisplayInput from './components/DisplayInput'
import Buttons from './components/Buttons'

function App() {
  return (
    <>
      <div className={style.page}>
        <div className={style.mainContent}>
          <DisplayInput/> 
          <Buttons/>
        </div>
      </div>
    </>
  )
}

export default App
