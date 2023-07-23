import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search ..." /> <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" /> English
          </div>
          <div className="item">
            <DarkModeIcon className="icon" /> English
          </div>
          <div className="item">
            <FullscreenExitIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsOffIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://i.imgur.com/MK3eW3As.jpg"
              alt="dddd"
              className="avtar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
