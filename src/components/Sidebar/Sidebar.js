import React from "react";

import { useStateValue } from "../../reducer/StateProvider";
import SideRow from "./SideRow";

import "./Sidebar.css";
import shopIcon from "../../assets/shop.png";
import flagIcon from "../../assets/flag.png";
import groupIcon from "../../assets/group.png";
import messengerIcon from "../../assets/messenger.png";
import SideBarHeader from "./SideBarHeader";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <ul className="sidebar-top">
        <SideRow src={user.photoURL} title={user.displayName} type="round" />
        <SideRow
          src={shopIcon}
          title="Covid Information Center"
          type="square"
        />
        <SideRow src={flagIcon} title="Pages" type="square" />
        <SideRow src={groupIcon} title="Friends" type="square" />
        <SideRow src={messengerIcon} title="Messenger" type="square" />
        <SideRow src="" title="See more" />
      </ul>
      <div className="sidebar-separator"></div>
      <SideBarHeader title="Your shortcuts">
        <div className="edit">Edit</div>
      </SideBarHeader>
      <ul className="sidebar-bottom">
        <SideRow
          src={"https://loremflickr.com/320/240"}
          title="Learning group"
          type="square"
        />
        <SideRow
          src={"https://loremflickr.com/320/240/dog"}
          title="Singing group"
          type="round"
        />
        <SideRow
          src={"https://loremflickr.com/320/240/cat"}
          title="Traveling group"
          type="square"
        />
        <SideRow
          src={"https://loremflickr.com/320/240/dog"}
          title="Trading group"
          type="square"
        />
        <SideRow src="" title="See more" />
      </ul>
      <ul className="sidebar-footer">
        <li>
          <div href="#">Privacy</div>
        </li>
        <li>
          <div href="#">Policy</div>
        </li>
        <li>
          <div href="#">Advertisement</div>
        </li>
        <li>
          <div href="#">Advertise selection</div>
        </li>
        <li>
          <div href="#">Cookie</div>
        </li>
        <li>
          <div href="#">See more</div>
        </li>
        <li>
          <div href="#">Facebook 2020</div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
