import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import { actionTypes } from "./reducer";
import { useStatevalue } from "./StateProvider";

function Login() {
    const[{},dispatch]=useStatevalue();
  const signIn = () => {
    auth
    .signInWithPopup(provider)
    .then((result)=>{
        dispatch({
            type:actionTypes.SET_USER,
            user:result.user,
        })
    })
    .catch((error)=>alert(error.message))

      
    
  };
  return (
    <div className="Login">
      <div className="Login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/766px-WhatsApp.svg.png"
          alt=""
        />

        <div className="Login__text">
          <h1>Sign to WhatsApp</h1>
        </div>
        <div className="btn">
          <Button onClick={signIn}>Sign in with Google</Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
