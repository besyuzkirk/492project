import React, { useState, useEffect } from "react";
import "./LoginPage.scss";
import GmInput from "../components/account/GmInput";
import GmButton from "../components/account/GmButton";
import CheckBoxLabel from "../components/account/CheckBoxLabel";
import useFormInput from "../hooks/useFormInput";
import { useAuth } from "../context/AuthContext";

function LoginPage(props) {
  
  const username = useFormInput("");
  const password = useFormInput("");
  const [errors, setErrors] = useState({});
  const [isRedirect, setRedirect] = useState(false);
  const { isAuthenticated, login } = useAuth();
  useEffect(() => {
    if (isAuthenticated) {
       window.location.reload();
    }
  }, [isAuthenticated]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { username: username.value, password: password.value };

    login(userData).catch((err) => {
      setErrors({ message: err.response.data.message });
    });
  };

  return (
    <>
      {isAuthenticated ? (
        <h1>Logged In</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="account-input-wrapper">
            <input
              {...username}
              style={{ borderRadius: props.borderRadius }}
              minLength={props.minLength}
              maxLength={props.maxLength}
              type={props.type}
              className="account-input"
              placeholder="Username"
            />
            <span className="focus-account-input"></span>
          </div>
          <div className="account-input-wrapper">
            <input
              {...password}
              style={{ borderRadius: props.borderRadius }}
              minLength={props.minLength}
              maxLength={props.maxLength}
              type="password"
              className="account-input"
              placeholder="Password"
            />
            <span className="focus-account-input"></span>
          </div>
          <CheckBoxLabel
            to="../forgot-password"
            inputId="chb-1"
            label="Remember Me"
            linkTitle="Forgot ?"
          />
          <GmButton btnName="Login" />
          <div className="haveAccount">
            <label className="haveAccountLabel">Dont have an account yet</label>
            <a
              className="haveAccountLink"
              onClick={props.signupHandler}
            >
              &nbsp;Sign Up
            </a>
          </div>
        </form>
      )}
    </>
  );
}

export default LoginPage;
