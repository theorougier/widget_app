import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function useSearchBar() {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");

  return {
    address,
    setAddress,
    navigate,
  };
}
