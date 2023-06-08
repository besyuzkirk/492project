import React, { useState } from "react";
import "./CommunityCard.scss";
import PostingToValorant from "../aside/PostingToValorant";

function CommunityCard() {
  const [profileImage, setProfileImage] = useState(
    "https://www.yorumla.net/wp-content/uploads/2023/03/valorant-listing-800x450-1.jpg"
  );

  const [isReadOnly, setIsReadOnly] = useState(true); // new state variable

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setProfileImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleEdit = () => {
    setIsReadOnly(!isReadOnly); // toggle the isReadOnly state
  };

  return (
    <div className="community-card">
      <div className="community-image">
        <img src={profileImage} alt="Profile" />
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>

      <h1>Valorant</h1>
      <div class="community">
        <table>
          <tr>
            <th>Users</th>
            <th>Points</th>
          </tr>
          <tr>
            <td>User 1</td>
            <td>100</td>
          </tr>
          <tr>
            <td>User 2</td>
            <td>90</td>
          </tr>
          <tr>
            <td>User 3</td>
            <td>80</td>
          </tr>
          <tr>
            <td>User 4</td>
            <td>60</td>
          </tr>
        </table>
      </div>
      
    </div>
  );
}

export default CommunityCard;
