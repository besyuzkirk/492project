import React, { useState, useEffect } from "react";
import Navbar from "../parts/Navbar";
import Sidebar from "../parts/Sidebar";
import Stream from "../parts/Stream";
import Aside from "../parts/Aside";
import "./HomePage.scss";
import Trending from "../components/home/Trending";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import Profilecard from "../components/profile/Profilecard";
import CommunityCard from "../components/community/CommunityCard";
import { useAuth } from "../context/AuthContext";
import MyCommunuties from "../components/aside/MyCommunities";
import ChatPage, { UserList, ChatHeader, ChatWindow, MessageInput } from "../components/chat/ChatPage";
import PostingToValorant from "../components/aside/PostingToValorant";


function HomePage() {


  const { isAuthenticated } = useAuth();


  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
      <div className="home-page">
        <Sidebar />
        <div className="home-page-body">
          {/*<Trending />*/}
          <div>
            <div className="home-page-wrapper">
              <BrowserRouter>
                <Routes>
                  <Route
                    exect
                    path="/"
                    element={
                      <>
                        <Stream />
                        <Aside />
                      </>
                    }
                  />
                  <Route
                    path="/profile/:username"
                    element={
                      <>
                        <div className="profile-section">
                          <Profilecard />
                          <div className="profile-page-wrapper">
                            <Stream />
                            <MyCommunuties />
                          </div>

                        </div>

                      </>
                    }
                  />
                  <Route
                    path="/community/:community"
                    element={
                      <>
                        <Stream />
                        <div>
                          <CommunityCard />
                          <PostingToValorant />
                        </div>
                      </>
                    }
                  />
                  <Route
                    path="/chat/:username"
                    element={
                      <>
                        <ChatPage />

                      </>
                    }
                  />
                </Routes>
              </BrowserRouter>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
