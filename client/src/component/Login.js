import React from "react";
import { useState } from "react";
import { useLogStore } from "../zustand/userStore";
import { useNavigate } from "react-router-dom";
import login from "./img/login.svg";

const Login = () => {
  const navigate = useNavigate();
  const logIn = useLogStore((state) => state.logIn);
  const signUp = useLogStore((state) => state.signUp);
  const isLoading = useLogStore((state) => state.isLoading);

  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });


  const [isLogin, setIsLogIn] = useState(true);
  const handleLogIn = () => setIsLogIn(!isLogin);
  // wag ilagay ang data sa parameter
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 
    if (email.test(data.email)!== true) {
      alert("invalid email");
    } else if (isLogin === false && data.password !== data.confirmPassword) {
      alert("pasword does match");
    } else {
      if (isLogin === true && isLoading === false) {
        logIn(data, navigate);
      } else if (isLogin === false && isLoading === false) {
        signUp(data, navigate);
      }
    }
  };
  const formClass = "w-full font-regular m-auto mt-3 border-grey-400 border p-2 rounded focus:border-2 focus:outline-none text-sm";

  return (
    <div className="flex flex-wrap justify-center align-center pt-10">
      <div className="text-center m-3 p-4 bg-white h-auto max-w-sm rounded-md shadow ">
        <img src={login} alt="login" className="w-24 m-auto my-2 " />
        <h1 className=" font-semibold text-gray-600 text-xl">
          {isLogin ? "Login" : "Signup"}
        </h1>
        <input
          className={formClass}
          name="email"
          type="email"
          placeholder="email@example.com"
          autoComplete="off"
          onChange={handleChange}
        ></input>
        <input
          className={formClass}
          name="password"
          type="password"
          placeholder="password"
          onChange={handleChange}
        ></input>

        {!isLogin && (
          <input
            className={formClass}
            name="confirmPassword"
            type="password"
            placeholder="confirm password"
            onChange={handleChange}
          ></input>
        )}
        {/* index css className*/}
        <button
          className={isLoading ? "btn-submit-disable" : "btn-submit"}
          onClick={handleSubmit}
          disable={isLoading.toString()}
        >
          {isLogin ? "Login" : "Signup"}
        </button>
        <button className="btn-mode" onClick={handleLogIn}>
          {isLogin
            ? "Dont have an Account? Signup"
            : "Already have an Account? Login"}
        </button>
      </div>
    </div>
  );
};

export default Login;
