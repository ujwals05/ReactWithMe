const EachItem = ({passFood}) => {
  return( 
    <>
    {/*Using Map Method for mapping each element in passFood array */}
    {passFood.map((item)=>(
      <li class="list-group-item">{item}</li>  
    ))}
    </>
  )
}

export default EachItem;