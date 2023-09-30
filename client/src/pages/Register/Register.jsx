import React, { useState } from "react";
import style from "./Register.module.css";
import { useNavigate } from "react-router-dom";
import { Register } from "../../apis/auth";
import RegisterForm from "../../components/RegisterForm";

function RegisterComponent() {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [newuser, setNewuser] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    checkbox: "",
  });

  function handlesubmit(e) {
    e.preventDefault();
    if (
      newuser.name === "" ||
      newuser.email === "" ||
      newuser.password === "" ||
      newuser.mobile === "" ||
      newuser.checkbox === ""
    ) {
      setError(true);
    } else {
      const { name, email, password, mobile, checkbox } = newuser;
      Register(name, email, password, mobile, checkbox);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }

  return (
    <RegisterForm
      style={style}
      newuser={newuser}
      setNewuser={setNewuser}
      error={error}
      handlesubmit={handlesubmit}
      navigate={navigate}
    />
  );
}

export default RegisterComponent;
