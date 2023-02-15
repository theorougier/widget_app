import React from "react";
import RestaurantDetails from "./RestaurantDetails";

export default function RestaurantList({restaurants}) {
  return (
    <div className="restaurant-list">
      {restaurants?.map((element) => (
        <RestaurantDetails key={element} restaurant={element} />
      ))}
    </div>
  );
}
