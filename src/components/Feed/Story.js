import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./Story.css";

function Story({ firstStory, bgrSrc, avatarSrc, storyName }) {
  return (
    <div className="story">
      <div
        className={classNames("story-bgr", {
          "first-story-bgr": firstStory,
        })}
      >
        <img src={bgrSrc} alt="" />
      </div>
      <div
        className={classNames("story-name", {
          " first-story-name": firstStory,
        })}
      >
        {storyName}
      </div>
      <div
        className={classNames("story-avatar", {
          " first-story-avatar": firstStory,
        })}
      >
        <img src={avatarSrc} alt="" className="unread" />
      </div>
    </div>
  );
}

Story.propTypes = {
  firstStory: PropTypes.string,
  bgrSrc: PropTypes.string,
  avatarSrc: PropTypes.string,
  storyName: PropTypes.string,
};
export default Story;
