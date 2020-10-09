import React from "react";
import PropTypes from "prop-types";

import "./Avatar.css";

function Avatar({ width = 40, height = 40, src }) {
  return (
    <div className="avatar">
      <img src={src} width={width} height={height} alt="" />
    </div>
  );
}

Avatar.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.string,
};
export default Avatar;
