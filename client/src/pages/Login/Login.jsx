import React, { useState } from "react";
import style from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { Login } from "../../apis/auth";
import LoginForm from "../../components/LoginForm";

function LoginComponent() {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handlelogin(e) {
    e.preventDefault();
    if (user.email === "" || user.password === "") {
      setError(true);
    } else {
      const { email, password } = user;
      Login(email, password);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }

  return (
    <LoginForm
      style={style}
      user={user}
      setUser={setUser}
      error={error}
      handlelogin={handlelogin}
      navigate={navigate}
    />
  );
}

export default LoginComponent;
