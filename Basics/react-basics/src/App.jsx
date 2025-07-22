import Title from "./components/Title"
import FoodList from "./components/FoodList";
import DefaultMessage from "./components/DefaultMessage";
import Container from "./components/Container";
import React from "react";

function App() {

  let Title1 = "HealtyFood";
  const healthyFoods = ["Broccoli", "Almonds", "Berries", "Eggs", "Sweet Potatoes"]; //Passing this as "props" for children components

  let Title2 = "JunkFood";
  const junkFoods = ["Pizza", "Burger", "French Fries", "Ice Cream", "Donuts"];

  return (
    <React.Fragment>  {/*Implemented Fragements (This can also be done using simple <> </>) */}

    <Container>
      <Title title = {Title1} />
      <DefaultMessage food={healthyFoods} /> {/*This will show default message(Conditional Rending implemented) */}
      <FoodList 
      food={healthyFoods}   /**"healtyFoods" array is passed as props for "FoodList" component */
      />
    </Container>

    <Container>
      <Title title = {Title2} />
      <DefaultMessage food={junkFoods} /> {/*This will show default message(Conditional Rending implemented) */}
      <FoodList 
      food={junkFoods}   /**"healtyFoods" array is passed as props for "FoodList" component */
      />
    </Container>

    </React.Fragment>
  )
}

export default App
