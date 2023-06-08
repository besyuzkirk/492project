import React, { useEffect, useState, useRef } from "react";
import "./Navbar.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useAuth } from "../context/AuthContext";
import { loadUser } from "../api/auth";
import { AiOutlineQrcode } from "react-icons/ai";
import Popup from "../components/Popup" 

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement(document.getElementById("root"));

function Navbar() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [ddIsOpen, setDdIsOpen] = useState(false);
  const [isSignup, setSignup] = useState(false);
  const [errors, setErrors] = useState({});

  const [loginOrRegister, setLoginReg] = useState(true);

  const dropdownRef = useRef(null);

  const { isAuthenticated, logout } = useAuth();

  const [userData, setUserData] = useState("");

  function handleClickOutside(event) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDdIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    if (isAuthenticated) {
      loadUser()
        .then((data) => setUserData(JSON.stringify(data.data.username)))
        .catch((err) => {
          setErrors({ message: err.response.data.message });
        });
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function toggleMenu() {
    setDdIsOpen(!ddIsOpen);
  }

  function openModal() {
    setIsOpen(true);
    console.log("okey");
  }

  function closeModal() {
    setIsOpen(false);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function isSignupModal() {
    if (isSignup) {
      setSignup(false)
      setLoginReg(true)
    } 
    else  {
      setSignup(true)
      setLoginReg(false)
    } 
  }


  //pop up get APP
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleButtonClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        htmlOpenClassName={"modal"}
      >
        <div className="login-modal">
          {
            loginOrRegister ?  <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Sign In</h2> :
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Sign Up</h2>
          }
          <a onClick={closeModal} style={{ cursor: "pointer" }}>
            <AiOutlineCloseCircle color="black" size={50} />
          </a>
        </div>
        {isSignup ? (
          <SignupPage signupHandler={isSignupModal} />
        ) : (
          <LoginPage signupHandler={isSignupModal} />
        )}
      </Modal>
      <div className="navbar">
        <div className="navbar-wrapper">
          <a href="/">
          <div className="navbar-logo">
            <img src={process.env.PUBLIC_URL + "/logo-no-background.png"} />
          </div>
          </a>
          <div className="navbar-body">
            <form>
              <input type="text" placeholder="search" />
            </form>
            <div className="nav-button-list">
              <button onClick={handleButtonClick} className="nav-button" >
                <AiOutlineQrcode size={15} /> Get App
              </button>
             
              {!isAuthenticated ? (
                <a onClick={openModal} className="nav-button">
                  Login
                </a>
              ) : (
                <>
                  <a className="username">
                    {"Thriver: " + userData}
                  </a>
                  <a onClick={logout} className="nav-button">
                    Logout
                  </a>
                </>
              )}

              <div className="dropdown" ref={dropdownRef}>
                <button className="dropdown__toggle" onClick={toggleMenu}>
                  <BsPerson size={28} color="#EE3E38" />
                  <MdKeyboardArrowDown size={28} color="#EE3E38" />
                </button>
                <ul
                  className={`dropdown__list ${ddIsOpen ? "dropdown__list--open" : ""
                    }`}
                >
                  <li className="dropdown__item">
                    <a href="#">Help Center</a>
                  </li>
                  <li className="dropdown__item">
                    <a href="#">Login / Register</a>
                  </li>
                  <li className="dropdown__item">
                    <a href="#">Terms & Policies </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isPopupVisible && <Popup onClose={handleClosePopup} />}
    </>
  );
}

export default Navbar;
