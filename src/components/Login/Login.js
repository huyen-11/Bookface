import React from "react";

import { actionTypes } from "../../reducer/reducer";
import { useStateValue } from "../../reducer/StateProvider";
import { auth, provider } from "../../firebase.js";
import "./Login.css";
import logo from "../../assets/fb-logo.png";

function Login() {
  const [state, dispatch] = useStateValue();
  function signIn() {
    // sign in
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({ type: actionTypes.SET_USER, user: result.user });
      })
      .catch((error) => console.log(error.message));
  }
  return (
    <div className="login">
      <div className="login-logo">
        <img src={logo} alt="" />
      </div>
      <div className="login-button" onClick={signIn}>
        Login
      </div>
    </div>
  );
}

export default Login;
