import React, { useEffect, useState } from "react";
import CreatePostButton from "../components/post/CreatePostButton";
import PostCard from "../components/post/PostCard";
import CreatePostForm from "../components/post/CreatePostForm";
import "./Stream.scss";
import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { getPosts, getPostByUsername } from "../api/post";
import { loadUser, getUserName } from "../api/auth";
import { useLocation } from 'react-router-dom';
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

function Stream(props) {
  const [isCreate, setCreate] = useState(false);
  const [posts, setPosts] = useState([[]]);

  const location = useLocation();





  useEffect(() => {



    if (location.pathname !== "/") {

      console.log(location.pathname)
      if (location.pathname == "/community/valorant") {
          getPostByUsername("ahmetTest1").then((fetchedPost) => {
          setPosts(fetchedPost.data);
        })
      }
      else {
        const username = location.pathname.trim().substring("/profile/".length);
        console.log("TEST 32", username)
        getPostByUsername(username).then((fetchedPost) => {
          setPosts(fetchedPost.data);
          console.log(fetchedPost.data)
        })
      }

    }
    else {
      getPosts().then((fetchedPost) => {
        setPosts(fetchedPost.data);

      })
    }




  }, []);

  const handleCreateForm = () => {
    if (!isCreate) setCreate(true);
    else setCreate(false);
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
    console.log("okey");
  }

  function closeModal() {
    setIsOpen(false);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  return (
    <div className="stream">
      <div className="post-stream">
        <CreatePostButton />
        {
          posts.map((post) => (
            <PostCard
              key={post._id}
              options={[]}
              comments={[]}
              title={post.postTitle || ""}
              text={post.postText}
              createdAt={post.createdDate}
              type={"text"}
              image={"http://localhost:5000" + post.postImageUrl}
              authorName={post.userName}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Stream;
