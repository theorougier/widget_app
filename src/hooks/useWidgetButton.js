import { useEffect, useState } from "react";
import axios from "axios";

export default function useWidgetButton() {
  const [data, setData] = useState();
  useEffect(() => {
    getAddress()
  }) 
  const getAddress = () => {
    axios
      .get("https://weatherapi-com.p.rapidapi.com/current.json?q=", {
        params: { q: localStorage.getItem("address") },
        headers: {
          "X-RapidAPI-Key":
            "4d1a9358cemsh407dc858d87acfdp144eafjsnbfb0df2cef06",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      })
      .then((response) => setData(response.data));
  };

  const handleWeather = () => {
    getAddress()
    console.log(data)
    let currentTemps = data.current.temp_c;
    let currentLocation = data.location.name;
    let temps = document.createElement("div");
    temps.className = "widget-temp";
    temps.innerHTML = `<div class="widget-temp-container"><button class='widget-remove' onclick='this.parentElement.parentElement.remove()'>X</button><h2>Temps</h2><h3>${currentLocation}</h3><h4 class="widget-temps-informations">${currentTemps}°C<h4></div>`;
    document.getElementById("widget-content").appendChild(temps);
  };

  const handleCreateMaps = () => {
    let maps = document.createElement("div");
    maps.className = "widget-carte";
    maps.innerHTML = `<div class="widget-carte-container"><button class='widget-remove' onclick='this.parentElement.parentElement.remove()'>X</button><h2>Carte</h2> <iframe width="600"height="450"style="border:0"loading="lazy"allowfullscreenreferrerpolicy="no-referrer-when-downgrade"src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCk2ucib5qc-uK1braaKGFQ2Bi2HNc4fws&q=${localStorage.getItem(
      "address"
    )}"></iframe> </div>`;
    document.getElementById("widget-content").appendChild(maps);
  };

  return { handleCreateMaps, handleWeather };
}
