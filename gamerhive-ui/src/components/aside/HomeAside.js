import React from "react";
import "./HomeAside.scss";

function HomeAside() {
  return (
    <div className="home-aside-card">
      <div className="home-aside-card-header">
        <img src={process.env.PUBLIC_URL + "/logo-no-background.svg"} />
      </div>
      <div className="home-aside-card-body">
        <p>Home</p>
        <p>
          Your personal GamerHive frontpage. Come here to check in with your
          favorite communities.
        </p>
        <hr />
        <div className="home-aside-buttons">
          <button className="home-aside-button">Create Post</button>
          <button className="home-aside-button">Create Community</button>
        </div>
      </div>
    </div>
  );
}

export default HomeAside;
