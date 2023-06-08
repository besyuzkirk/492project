import React, { useState, useRef, useEffect } from 'react';
import './Profilecard.scss'
import { getPostByUsername } from "../../api/post";
import { useLocation } from 'react-router-dom';
import { BiLocationPlus } from "react-icons/bi";

const ProfileCard = () => {
  const [coverPhoto, setCoverPhoto] = useState('https://media.licdn.com/dms/image/C4D16AQFXQWE-WU2t5Q/profile-displaybackgroundimage-shrink_350_1400/0/1668291651625?e=1691020800&v=beta&t=nJbLUQo0kAr_RsuBN3nypXmACmdH2etuOkjaBR35dOA');
  const [profilePicture, setProfilePicture] = useState('https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg');
  const coverPhotoInputRef = useRef(null);
  const profilePictureInputRef = useRef(null);

  const location = useLocation();
  const username = location.pathname.trim().substring("/profile/".length);;

  console.log("test 52", username)
  useEffect(() => {


  }, []);

  const handleCoverPhotoClick = () => {
    coverPhotoInputRef.current.click();
  };

  const handleCoverPhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCoverPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfilePictureClick = () => {
    profilePictureInputRef.current.click();
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-card">
      <div className="cover-photo" onClick={handleCoverPhotoClick}>
        <img src={coverPhoto} alt="Cover" />
      </div>
      <input
        type="file"
        accept="image/*"
        ref={coverPhotoInputRef}
        onChange={handleCoverPhotoChange}
        style={{ display: 'none' }}
      />
      <div className='prof-info'>
        <div className="profile-info">
          <div className="profile-picture" onClick={handleProfilePictureClick}>
            <img src={profilePicture} alt="Profile" />
          </div>
          <input
            type="file"
            accept="image/*"
            ref={profilePictureInputRef}
            onChange={handleProfilePictureChange}
            style={{ display: 'none' }}
          />
          <div className="profile-details">
            <h2 className="name">ahmetTest2</h2>
            <p className="city"> <BiLocationPlus /> Istanbul</p>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
