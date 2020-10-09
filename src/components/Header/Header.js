import React from "react";
import PropTypes from "prop-types";

import { useStateValue } from "../../reducer/StateProvider";
import Avatar from "../Avatar";
import "./Header.css";
import logo from "../../assets/fb-logo.png";
import searchIcon from "../../assets/loupe.png";
import homeIcon from "../../assets/home.png";
import flagIcon from "../../assets/flag.png";
import youtubeIcon from "../../assets/youtube.png";
import shopIcon from "../../assets/shop.png";
import groupIcon from "../../assets/group.png";
import plusIcon from "../../assets/plus.png";
import messengerIcon from "../../assets/messenger.png";
import bellIcon from "../../assets/bell.png";
import downIcon from "../../assets/down-arrow.png";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header-left">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="header-input">
          <img src={searchIcon} alt="search" />
          <input placeholder="Type to search" />
        </div>
      </div>
      <div className="header-middle">
        <ul className="header-nav">
          <li>
            <a className="header-page active" href="#">
              <img src={homeIcon} alt="home" />
            </a>
          </li>
          <li>
            <a className="header-page" href="#">
              <img src={flagIcon} alt="flag" />
            </a>
          </li>
          <li>
            <a className="header-page" href="#">
              <img src={youtubeIcon} alt="youtube" />
            </a>
          </li>
          <li>
            <a className="header-page" href="#">
              <img src={shopIcon} alt="shop" />
            </a>
          </li>
          <li>
            <a className="header-page" href="#">
              <img src={groupIcon} alt="group" />
            </a>
          </li>
        </ul>
      </div>
      <div className="header-right">
        <div className="header-profile">
          <Avatar width={28} height={28} src={user.photoURL} />
          <span>{user.displayName}</span>
        </div>
        <div className="header-option">
          <img src={plusIcon} alt="plus" />
        </div>
        <div className="header-option">
          <img src={messengerIcon} alt="messenger" />
        </div>
        <div className="header-option">
          <img src={bellIcon} alt="bell" />
        </div>
        <div className="header-option">
          <img src={downIcon} alt="down" />
        </div>
      </div>
    </div>
  );
}

export default Header;
