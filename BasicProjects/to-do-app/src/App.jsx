import AppHead from "./components/appHead"
import style from "./App.module.css"
import AddItem from "./components/addItem";

function App() {

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
  return (
    <>
    <h1 className={style.appTitle}>ToDo App</h1>
    <AppHead/>
    <AddItem data={data} />
    </>
  )
}

export default App
