import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../components/Auth";

const LoginAndRegister = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const details = JSON.parse(localStorage.getItem("details"));
    if (details) {
      navigate("/");
    }
  }, [navigate]);

  return <Auth />;
};

export default LoginAndRegister;
