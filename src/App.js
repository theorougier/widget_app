import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import useRestaurantInformations from "./hooks/useRestaurantInformations";

function App() {
  const { searchParams, restaurants } = useRestaurantInformations();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            restaurants={restaurants}
          />
        }
      />
    </Routes>
  );
}

export default App;
