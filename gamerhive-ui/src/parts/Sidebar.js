import React from "react";
import "./Sidebar.scss";
import { HiHome } from "react-icons/hi";
import { BsFillPlusCircleFill, BsRocketTakeoff } from "react-icons/bs";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import SidebarFooter from "../components/sidebar/SidebarFooter";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <p className="sidebar-title">Favorites</p>
      <ul>
        <li>
          <a href={`/community/valorant`}>
            <p>Valorant</p>
          </a>
        </li>
        <li>
          <a>
            <p>Minecraft</p>
          </a>
        </li>
      </ul>
      <p className="sidebar-title">Your Communities</p>
      <ul>
        <li>
          <a>
            <p>Valorant</p>
          </a>{" "}
        </li>
        <li>
          <a>
            <p>Minecraft</p>
          </a>
        </li>
        <li>
          <a>
            <p>Pubg</p>
          </a>
        </li>
        <li>
          <a>
            <p>LoL</p>
          </a>
        </li>
      </ul>
      <p className="sidebar-title">Feeds</p>
      <ul>
        <li>
          <a>
            <HiHome /> <p>Home</p>
          </a>{" "}
        </li>
        <li>
          <a>
            <BsRocketTakeoff /> <p>Populer</p>
          </a>
        </li>
        <li>
          <a>
            <MdOutlineIncompleteCircle /> <p>All</p>
          </a>
        </li>
      </ul>
      <p className="sidebar-title">Other</p>
      <ul>
        <li>
          <a>
            <FiUser /> <p>User Settings</p>
          </a>
        </li>
        <li>
          <a>
            <BsFillPlusCircleFill /> <p>Create Post</p>
          </a>{" "}
        </li>
        <li>
          <a>
            <IoIosNotificationsOutline /> <p>Notifications</p>
          </a>
        </li>
      </ul>
      <SidebarFooter />
    </div>
  );
}

export default Sidebar;
