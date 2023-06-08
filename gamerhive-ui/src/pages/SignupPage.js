import GmButton from "../components/account/GmButton";
import GmInput from "../components/account/GmInput";
import useFormInput from "../hooks/useFormInput";
import "./SignupPage.scss";
import CheckBoxLabel from "../components/account/CheckBoxLabel";
import { useAuth } from "../context/AuthContext";
import React, { useState, useEffect } from "react";
function SignupPage(props) {

  const firstname = useFormInput("");
  const lastname = useFormInput("");
  const email = useFormInput("");
  const username = useFormInput("");
  const password = useFormInput("");

  const [errors, setErrors] = useState({});
  const [isRedirect, setRedirect] = useState(false);
  const { isAuthenticated, register } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { firstname: firstname.value, lastname: lastname.value, username: username.value, email: email.value, password: password.value };

    register(userData).then(() => {
      // Redirect to the homepage after successful registration
      props.history.push("/homepage"); // Replace '/homepage' with the actual URL of your homepage
    }).catch((err) => {
      setErrors({ message: err.response.data.message });
    });
  };

  return (
    <form onSubmit={handleSubmit} pageTitle="Sign Up" width="590px">
      <div className="flbox">
        <div className="account-input-wrapper"><input className="account-input" {...firstname} placeholder="First Name" /></div>
        <div className="account-input-wrapper"><input className="account-input" {...lastname} placeholder="Last  Name" /></div>
      </div>
      <div className="account-input-wrapper"><input className="account-input" {...username} placeholder="Username" /></div>
      <div className="account-input-wrapper"><input className="account-input" {...email} type="email" placeholder="E mail" /></div>
      <div className="account-input-wrapper"><input className="account-input"  {...password} type="password" placeholder="Password" /></div>

      <CheckBoxLabel
        inputId="agreeFormCheck"
        label="I Agree to the "
        linkTitle="terms of use"
        link="/"
        justifyContent="flex-start"
      />
      <GmButton btnName="Sign Up" />
      <div className="haveAccount">
        <label className="haveAccountLabel">Have an account with us?</label>
        <a
          onClick={props.signupHandler}
          className="haveAccountLink"
        >
          &nbsp;Login Here
        </a>
      </div>
    </form>
  );
}

export default SignupPage;
