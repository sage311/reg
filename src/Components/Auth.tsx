import React from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>Авторизация</div>
      <div onClick={() => navigate("/")}>Главная</div>
    </div>
  );
};

export default Auth;
