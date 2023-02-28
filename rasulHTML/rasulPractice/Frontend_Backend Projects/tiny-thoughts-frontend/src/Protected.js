import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Protected({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("status") != "true") {
      navigate("/login");
    }
  }, []);

  return children;
}
