import AddContent from "./addContent";

const AddItem = ({data}) =>{
  return(
    <div>
      {data.map((item)=>(
        <AddContent task={item.taskName} date={item.taskDate}/>
      ))}
    </div>
  )
}

export default AddItem;