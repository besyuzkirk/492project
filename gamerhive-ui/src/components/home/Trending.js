import React from "react";
import "./Trending.scss";

function Trending() {
  const trendData = {
    imageUrl: "https://dummyimage.com/600x400/000/fff",
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut est magna. Sed auctor malesuada ipsum, vitae scelerisque diam tincidunt id.",
  };

  return (
    <div className="trending">
      <div className="trending-now-card">
        <img src={trendData.imageUrl} alt="Trending now" />
        <div className="overlay">
          <h3 className="title">{trendData.title}</h3>
          <p className="text">{trendData.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Trending;
