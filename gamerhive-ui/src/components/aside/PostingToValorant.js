import React from "react";
import "./PostingToHive.scss";

function PostingToValorant() {
  return (
    <div className="rule-card">
      <div className="rule-card-header">
        <img src={process.env.PUBLIC_URL + "/logo-no-background.svg"} />
        <div>Posting to Valorant</div>
      </div>
      <div className="rule-card-body">
        <ul>
          <li>1. Remember the human</li>
          <hr />
          <li>2. Behave like you would in real life</li>
          <hr />
          <li>3. Look for the original source of content</li>
          <hr />
          <li>4. Search for duplicates before posting</li>
          <hr />
          <li>5. Read the community’s rules</li>
        </ul>
      </div>
    </div>
  );
}

export default PostingToValorant;