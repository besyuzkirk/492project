import React from "react";
import "./FollowerCard.scss";

function FollowerCard() {
  return (
    <div>
      <div class="follower-card">
        <div class="follower-cover-photo">
          <img
            src="https://i.imgur.com/KykRUCV.jpeg"
            class="follower-profile"
          />
        </div>
        <h4 class="follower-profile-name">James Casdfasdarson</h4>
        <div className="follower-btns">
          <button class="follower-btn">Message</button>
          <button class="follower-btn">Following</button>
        </div>
      </div>
    </div>
  );
}

export default FollowerCard;
