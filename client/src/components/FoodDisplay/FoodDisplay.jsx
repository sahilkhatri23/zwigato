import React from "react";
import "./FoodDisplay.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext.jsx";
import FoodItem from "../FoodItem/FoodItem.jsx";
const FoodDisplay = ({ category }) => {
  const food_list = useContext(StoreContext).food_list;
  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((food, index) => {
          return <FoodItem key={index} {...food} />;
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
