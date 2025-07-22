import EachItem from "./Item";

const FoodList = ({food}) => {

  return(
    <>
    <ul class="list-group">
      <EachItem passFood={food}/> {/* Passing the same props to its child component "EachItem" */}
    </ul>
    </>
  )
}

export default FoodList;