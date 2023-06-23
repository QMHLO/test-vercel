import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [SignInData, setSignIn] = useState({
    email: "",
    password: "",
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    // signin
    const { email, password } = SignInData;
    if (import.meta.env.VITE_OWNER_MAIL === email && import.meta.env.VITE_OWNER_PASS === password) {
      dispatch({
        type: "SET_ADMINUSER",
        payload: SignInData,
      });
      localStorage.setItem("admin", "1");
      navigate("/adminchat");
      return;
    }
    axios
      .post("http://localhost:1337/api/auth/local", {
        identifier: email,
        password,
      })
      .then((response) => {
        // Handle success.
        // console.log("Well done!");
        // console.log("User profile", response.data.user);
        // console.log("User token", response.data.jwt);
        console.log("User Login Successful");

        dispatch({
          type: "SET_USER",
          payload: SignInData,
        });

        console.log(response);
        localStorage.setItem("jwt-token", response.data.jwt);
        localStorage.setItem("email", email);
        navigate("/chat");
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });

    console.log(SignInData);
  };

  const onChangeHandler = (e) => {
    setSignIn({
      ...SignInData,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(import.meta.env.VITE_OWNER_MAIL);

  return (
    <div className="singin">
      <h1>Sign In form</h1>
      <form onSubmit={submitHandler}>
        <input name="email" value={SignInData.email} type="text" onChange={onChangeHandler} placeholder="enter your email" />
        <input name="password" type="password" value={SignInData.password} onChange={onChangeHandler} placeholder="enter your password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignIn;
