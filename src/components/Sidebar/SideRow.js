import React from "react";
import PropTypes from "prop-types";

import "./SideRow.css";
import arrowIcon from "../../assets/down-arrow2.svg";
import Avatar from "../Avatar";

function SideRow({ src, title, type }) {
  return (
    <li>
      {title !== "See more" && (
        <div className="sidebar-row">
          {type === "square" && (
            <div className="sidebar-avatar">
              <img alt="" src={src} />
            </div>
          )}
          {type === "round" && <Avatar src={src} width={28} height={28} />}
          <div className="sidebar-title">{title}</div>
        </div>
      )}
      {title === "See more" && (
        <div className="sidebar-row">
          <div className="sidebar-avatar sidebar-arrow">
            <img alt="" src={arrowIcon} />
          </div>
          <div className="sidebar-title">See more</div>
        </div>
      )}
    </li>
  );
}

SideRow.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.oneOf(["square", "round"]),
};
export default SideRow;
