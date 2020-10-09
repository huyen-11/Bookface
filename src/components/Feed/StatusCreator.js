import React, { useState } from "react";

import { useStateValue } from "../../reducer/StateProvider";
import db from "../../firebase";

import "./StatusCreator.css";
import Avatar from "../Avatar";
import SideRow from "../Sidebar/SideRow";
import livestreamIcon from "../../assets/livestream.png";
import photoIcon from "../../assets/photo.png";
import happyIcon from "../../assets/happy.png";

function StatusCreator() {
  const [{ user }] = useStateValue();
  const [value, setValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // db things
    db.collection("posts").add({
      content: value,
      timestamp: new Date().toISOString(),
      profilePic: user.photoURL,
      username: user.displayName,
      likeNumber: 0,
      likePerson: [],
    });
    setValue("");
  }
  function handleChange(event) {
    setValue(event.target.value);
  }
  return (
    <div className="status-creator">
      <div className="status-header">
        <Avatar src={user.photoURL} alt="" />
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={value}
            className="status-input"
            placeholder={`What's in your mind, ${user.displayName} `}
          />
        </form>
      </div>
      <ul className="status-options">
        <SideRow src={livestreamIcon} title="Livestream" type="square" />

        <SideRow src={photoIcon} title="Photo/Video" type="square" />
        <SideRow src={happyIcon} title="Emotion/Activity" type="square" />
      </ul>
    </div>
  );
}

export default StatusCreator;
