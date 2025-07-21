import style from "./appHead.module.css"

const AppHead = () => {
  return <div className={`container text-center ${style.mainDiv}`}>
    <div className="row">
      <div className="col-6">
        <input type="text" />
      </div>
      <div className="col-4">
        <input type="date"/>
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success">Add</button>
      </div>
    </div>
  </div>
  
}

export default AppHead;