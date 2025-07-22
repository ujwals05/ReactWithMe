import Title from "./components/Title"
import FoodList from "./components/FoodList";
import DefaultMessage from "./components/DefaultMessage";
import React from "react";

function App() {

  let Title1 = "HealtyFood"
  const healthyFoods = ["Broccoli", "Almonds", "Berries", "Eggs", "Sweet Potatoes"]; //Passing this as "props" for children components

  return (
    <React.Fragment>  {/*Implemented Fragements (This can also be done using simple <> </>) */}
      <Title title = {Title1} />
      <DefaultMessage food={healthyFoods} /> {/*This will show default message(Conditional Rending implemented) */}
      <FoodList 
      food={healthyFoods}   /**"healtyFoods" array is passed as props for "FoodList" component */
      />
    </React.Fragment>
  )
}

export default App
