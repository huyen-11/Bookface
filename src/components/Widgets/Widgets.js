import React from "react";

import "./Widgets.css";
import SideBarHeader from "../Sidebar/SideBarHeader";
import WidgetAds from "./WidgetAds";
import SideRow from "../Sidebar/SideRow";

function Widgets() {
  return (
    <div className="widgets">
      <SideBarHeader title="Advertisement">
        <div></div>
      </SideBarHeader>
      <WidgetAds
        src="https://loremflickr.com/240/240"
        title="Call Quitline 137848"
        website="quit.org.au"
      ></WidgetAds>
      <WidgetAds
        src="https://loremflickr.com/240/240"
        title="Call Quitline 137848"
        website="quit.org.au"
      ></WidgetAds>
      <div className="sidebar-separator"></div>
      <SideBarHeader title="Your page">
        <div></div>
      </SideBarHeader>
      <ul className="sidebar-bottom">
        <SideRow
          src={"https://loremflickr.com/320/240"}
          title="Learning group"
          type="round"
        />
        <SideRow
          src={"https://loremflickr.com/320/240/dog"}
          title="Singing group"
          type="round"
        />
      </ul>
      <div className="sidebar-separator"></div>
      <SideBarHeader title="Active">
        <div></div>
      </SideBarHeader>
      <ul className="sidebar-bottom">
        <SideRow
          src={"https://loremflickr.com/320/240"}
          title="Learning group"
          type="round"
        />
        <SideRow
          src={"https://loremflickr.com/320/240/dog"}
          title="Singing group"
          type="round"
        />
        <SideRow
          src={"https://loremflickr.com/320/240/dog"}
          title="Singing group"
          type="round"
        />
        <SideRow
          src={"https://loremflickr.com/320/240/dog"}
          title="Singing group"
          type="round"
        />
        <SideRow
          src={"https://loremflickr.com/320/240/dog"}
          title="Singing group"
          type="round"
        />
      </ul>
    </div>
  );
}

export default Widgets;
