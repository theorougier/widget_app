import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import useWidgetButton from "../hooks/useWidgetButton";
export default function WidgetButton() {
  const { handleCreateMaps, handleWeather } = useWidgetButton();
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Add Widget
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          onClick={handleCreateMaps}
          href=""
        >
          Map
        </Dropdown.Item>
        <Dropdown.Item
          onClick={handleWeather}
          href=""
        >
          Weather
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
