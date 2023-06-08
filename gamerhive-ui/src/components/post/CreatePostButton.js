import React, { useState } from "react";
import "./CreatePostButton.scss";
import AutocompleteDropdown from "./AutocompleteDropdown";
import CreatePostForm from "./CreatePostForm";
import { RiArrowGoBackFill } from "react-icons/ri";
import { createPost } from "../../api/post"
import useFormInput from "../../hooks/useFormInput";
import { loadUser } from "../../api/auth";
import { useAuth } from "../../context/AuthContext";
import Popup from "../Popup";

function CreatePostButton() {

  const [selectedOption, setSelectedOption] = useState("add-image");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [surveyOptions, setSurveyOptions] = useState(["", ""]);
  const [selectedCommunity, setSelectedCommunity] = useState("all");
  const [errors, setErrors] = useState({});
  const [isForm, setForm] = useState(false)
  const { isAuthenticated  } = useAuth();

  const handleForm = () => {

    if (isAuthenticated) {
      if (isForm) setForm(false)
      else setForm(true)  
    }

    else {
      
       alert('You must login to create post');

    }


  }

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setImage(null);
    setTitle("");
    setText("");
    setSurveyOptions(["", ""]);
  };

  const handleRemoveOption = () => {
    if (surveyOptions.length > 2) {
      setSurveyOptions((prevOptions) => {
        const options = [...prevOptions];
        options.pop();
        return options;
      });
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSurveyOptionChange = (e, index) => {
    const options = [...surveyOptions];
    options[index] = e.target.value;
    setSurveyOptions(options);
  };

  const handleAddOption = () => {
    setSurveyOptions([...surveyOptions, ""]);
  };

  const postTitle = useFormInput("");
  const postText = useFormInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = loadUser().then(user => {
      const postData = { postTitle: title, postText: text, userId: user.data._id, userName: user.data.username };

      const formData = new FormData();
      formData.append("postTitle", postData.postTitle);
      formData.append("postText", postData.postText);
      formData.append("userId", postData.userId);
      formData.append("userName", postData.userName)
      console.log("username  " , postData.userName)
      formData.append("postImage", image);


      createPost(formData).then(() => {
        window.location.reload();
      }).catch((err) => {
        setErrors({ message: err.response.data.message });
      });
    }).catch((err) => {
      setErrors({ message: err.response.data.message });
    });

    console.log('postImage:', image);
    console.log('postImage.path:', image.path);

  };
  return (
    <> {
      isForm ? <div className="create-post-card">
        <form method="POST" onSubmit={handleSubmit} enctype="multipart/form-data">
          <div className="create-post-community-input">
            <label>Community:</label>
            <AutocompleteDropdown />
            <button className="back-button" onClick={handleForm} type="button"><RiArrowGoBackFill color="#EE3E38" size={25} /></button>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="post-option"
                value="add-image"
                checked={selectedOption === "add-image"}
                onChange={handleOptionChange}
              />
              Create Post
            </label>
            <label>
              <input
                type="radio"
                name="post-option"
                value="create-survey"
                checked={selectedOption === "create-survey"}
                onChange={handleOptionChange}
              />
              Create Survey
            </label>
          </div>

          {selectedOption === "add-image" && (
            <div className="create-post-image-input">
              <label>Title:</label>
              <input {...postTitle} type="text" value={title} onChange={handleTitleChange} />
              <label>Text:</label>
              <textarea {...postText} value={text} onChange={handleTextChange} />
              <label>Upload an image</label>
              <input type="file" name="postImage" onChange={handleImageChange} />
              {image && (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Selected file preview"
                  className="create-post-image-preview"
                />
              )}
            </div>
          )}
          {selectedOption === "create-survey" && (
            <div className="create-post-survey-input create-post-image-input">
              <label>Question:</label>
              <input type="text" value={title} onChange={handleTitleChange} />
              <label>Survey options:</label>
              <div className="create-post-survey-options">
                {surveyOptions.map((option, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      value={option}
                      onChange={(e) => handleSurveyOptionChange(e, index)}
                      className="create-post-survey-option"
                    />
                  </div>
                ))}
              </div>
              <div className="create-post-survey-add">
                <div>
                  <label>Add option</label>
                  <button type="button" onClick={handleAddOption}>
                    +
                  </button>
                </div>
                <div>
                  <label>Remove option</label>
                  <button type="button" onClick={handleRemoveOption}>
                    -
                  </button>
                </div>
              </div>
            </div>
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
        : <CreatePostForm onClick={handleForm} />}


    </>

  );
}
export default CreatePostButton;
