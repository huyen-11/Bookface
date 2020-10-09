import React from "react";
import PropTypes from "prop-types";

import Avatar from "../Avatar";
import "./WidgetAds.css";
import moreIcon from "../../assets/more.png";

function WidgetAds({ src, title, website }) {
  return (
    <div className="widget-ads">
      <div className="widget-ads-img">
        <img src={src} alt="" />
      </div>
      <div className="widget-ads-info">
        <div className="widget-ads-title">{title}</div>
        <div className="widget-ads-website">{website}</div>
      </div>
      <Avatar src={moreIcon} width={25} height={25} />
    </div>
  );
}

WidgetAds.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  website: PropTypes.string,
};

export default WidgetAds;
