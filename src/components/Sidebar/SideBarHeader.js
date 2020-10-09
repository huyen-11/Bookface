import React from "react";
import PropTypes from "prop-types";

import "./SideBarHeader.css";

function SideBarHeader({ title, children }) {
  return (
    <div className="sidebar-header">
      <div>{title}</div>
      {children}
    </div>
  );
}
SideBarHeader.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
};
export default SideBarHeader;
