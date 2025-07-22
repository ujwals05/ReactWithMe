const DefaultMessage = ({food}) => {
  /*Conditional rendering implemented*/
  return (
    <>
    {food.length === 0 ? <h3>I am hungry</h3> : null }  
    </>
  )
}

export default DefaultMessage;