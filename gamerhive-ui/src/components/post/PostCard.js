import React, { useState,  useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import "./PostCard.scss";
import { Link } from "react-router-dom";

function PostCard({
  title,
  authorName,
  authorPicture,
  createdAt,
  comments,
  upvote,
  downvote,
  image,
  options,
  question,
  type,
  text,
  selectedOption,
}) {
  const [optionVotes, setOptionVotes] = useState(
    options.map((option) => option.votes)
  );
  const [selectedOptionIndex, setSelectedOptionIndex] =
    useState(selectedOption);
  const [totalVotes, setTotalVotes] = useState(
    options.reduce((total, current) => total + current.votes, 0)
  );
  const [showComments, setShowComments] = useState(false);
  const [newCommentText, setNewCommentText] = useState("");
    const [ userpicture , setUserpicture ] = useState("");
    const [score , setScore ] = useState(0)
    useEffect(() => {
     if(authorName == "Ahmet") {
      setUserpicture("https://media.licdn.com/dms/image/D4D03AQGXrH7puFFsdg/profile-displayphoto-shrink_800_800/0/1667694317117?e=1691625600&v=beta&t=osKrrzxrQD6sVgMeYqE04wvXocTS23woT6nUMC2NzEY")
     }
     else if(authorName == "ahmetTest1") {
      setUserpicture("https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg")
     }
     else if(authorName == "ahmetTest2") {
      setUserpicture("https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg")
     }
     else if(authorName == "ahmetTest3") {
      setUserpicture("https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg")
     } else {
      setUserpicture("https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg")
     }
     
    
    }, []);
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // do something with newCommentText
    setNewCommentText("");
  };


  const handleOptionSelect = (index) => {
    setSelectedOptionIndex(index);
  };

  const handleVote = () => {
    if (selectedOptionIndex !== null) {
      setOptionVotes((prevVotes) => {
        const newVotes = [...prevVotes];
        newVotes[selectedOptionIndex]++;
        return newVotes;
      });
      setTotalVotes(totalVotes + 1);
      setSelectedOptionIndex(null);
    }
  };

  



  return (
    <div className="post">
      <div className="post-header">
        <Link to={`/profile/${authorName}`}>
          <div className="author-picture">
            <img src={userpicture} alt="Author" />
          </div>
        </Link>
        <div className="post-header-text">
          <h2>{title}</h2>
          <span>
            Posted by {authorName} on {createdAt}
          </span>
        </div>
        <div className="post-votes">
          <button onClick={upvote}>
            <FaArrowUp />
          </button>
          <span>{totalVotes}</span>
          <button onClick={downvote}>
            <FaArrowDown />
          </button>
        </div>
      </div>
      <div className="post-body">
        {type === "text" && <div className="post-text">{text}</div>}
        {image && <img src={image} alt="Post" style={{ width: "100%" }} />}
        {type === "survey" && (
          <div className="post-survey">
            <h3>Survey</h3>
            <ul>
              {options.map((option, index) => (
                <li
                  key={option.id}
                  onClick={() => handleOptionSelect(index)}
                  className={selectedOptionIndex === index ? "selected" : ""}
                >
                  <span>{option.text}</span>
                  {selectedOptionIndex === null && (
                    <button onClick={handleVote}>Vote</button>
                  )}
                  {selectedOptionIndex === index && (
                    <span>{optionVotes[index]} votes</span>
                  )}
                  {selectedOptionIndex !== index && totalVotes > 0 && (
                    <span>
                      {((optionVotes[index] / totalVotes) * 100).toFixed(2)}%
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="post-comments">
        <button onClick={() => setShowComments(!showComments)}>
          {showComments ? "Hide" : "Show"} Comments ({comments.length})
        </button>
        {showComments && (
          <div className="comments-list">
            {comments.map((comment) => (
              <Comment key={comment.id} {...comment} />
            ))}
            <form className="post-new-comment" onSubmit={handleCommentSubmit}>
              <textarea
                placeholder="Write a comment..."
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
              />
              <button type="submit">Post Comment</button>
            </form>
          </div>

        )}
      </div>
    </div>
  );
}



function Comment({ author, authorPicture, date, text, replies }) {
  return (
    <div className="comment">
      <div className="comment-header">
        <div className="author-picture">
          <img src={authorPicture} alt="Author" />
        </div>
        <div className="comment-header-text">
          <span>{author} on {date}</span>
        </div>
      </div>
      <div className="comment-body">
        <p>{text}</p>
      </div>
      <div className="comment-replies">
        {replies && (
          <div className="replies-list">
            {replies.map((reply) => (
              <Comment key={reply.id} {...reply} />
            ))}
          </div>
        )}
        <div className="reply-form">
          <textarea placeholder="Write a reply..." />
          <button type="submit">Post Reply</button>
        </div>
      </div>
    </div>
  );
}

export default PostCard;



