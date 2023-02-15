import React, { useState, useRef, useEffect } from "react";
import useSearchBar from "../hooks/useSearchBar";
import { usePlacesWidget } from "react-google-autocomplete";

const SearchBar = ({ defaultAdresse }) => {
  const { address, navigate, setAddress } = useSearchBar();

  ///////

  const autoCompleteRef = useRef();
  const inputRef = useRef();
  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current
    );
    autoCompleteRef.current.addListener("place_changed", async function () {
      const place = await autoCompleteRef.current.getPlace();
      setAddress(place.formatted_address);
      localStorage.setItem("address", place.formatted_address);
      document.querySelector('#widget-content').innerHTML = ""
    });
  }, []);

  return (
    <div className="search-bar">
      <div className="search-bar-group-input">
        <input
          id="autocomplete"
          type="text"
          ref={inputRef}
          value={address}
          placeholder={defaultAdresse}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
