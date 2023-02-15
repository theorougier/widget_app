import React from "react";
import SearchBar from "../components/SearchBar";
import Title from "../components/Title";
import WidgetButton from "../components/WidgetButton";
import WidgetContent from "../components/WidgetContent";

const ListRestaurants = ({ restaurants, adresse }) => {
  return (
    <>
      <Title />
      <SearchBar defaultAdresse={adresse} />
      <WidgetButton address={adresse} />
      <WidgetContent />
    </>
  );
};

export default ListRestaurants;
