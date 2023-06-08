import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/LoginPage";
import PostCard from "../post/PostCard";
import "./ProfileCard.scss";

function ProfileCard() {
  return (
    <div class="card-container">
      <img
        class="round"
        src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg"
        alt="user"
      />
      <input type={"file"} />

      <h3>ahmetTest2</h3>
      <h6>New York</h6>
      <p>
        User interface designer and <br /> front-end developer User interface
        designer and <br /> front-end developer User interface designer and{" "}
        <br /> front-end developer
      </p>
      {/* <p>
          User interface designer and <br /> front-end developer
        </p> */}

      {/* <p>
          User interface designer and <br /> front-end developer
        </p> 
        <div class="skills">
          <h6>Skills</h6>
          <ul>
            <li>UI / UX</li>
            <li>Front End Development</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node</li>
          </ul>
        </div>
        <div class="skills">
          <h6>Skills</h6>
          <ul>
            <li>UI / UX</li>
            <li>Front End Development</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node</li>
          </ul>
        </div>
      </div>*/}
    </div>
  );
}

export default ProfileCard;
