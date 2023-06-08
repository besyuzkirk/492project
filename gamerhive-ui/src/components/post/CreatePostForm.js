import React from 'react';
import './CreatePostForm.scss'

const CreatePostForm = (props) => {
  return (
    <button onClick={props.onClick} className="create-post-form">Fire Anything!</button>
  );
};

export default CreatePostForm;