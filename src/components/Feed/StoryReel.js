import React from "react";

import Story from "./Story";
import "./StoryReel.css";
import rightIcon from "../../assets/right-arrow.svg";
import plusIcon from "../../assets/plus.png";

function StoryReel() {
  return (
    <div className="story-reel">
      <Story
        firstStory={true}
        bgrSrc="https://loremflickr.com/320/240/cat"
        storyName="Your story"
        avatarSrc={plusIcon}
      />
      <Story
        bgrSrc="https://loremflickr.com/320/240/dog"
        storyName="Huyen Ho"
        avatarSrc="https://loremflickr.com/320/240/dog"
      />
      <Story
        bgrSrc="https://loremflickr.com/320/240/cat"
        storyName="Huyen Ho"
        avatarSrc="https://loremflickr.com/320/240/dog"
      />
      <Story
        bgrSrc="https://loremflickr.com/320/240/dog"
        storyName="Huyen Ho"
        avatarSrc="https://loremflickr.com/320/240/dog"
      />
      <Story
        bgrSrc="https://loremflickr.com/320/240/cat"
        storyName="Huyen Ho"
        avatarSrc="https://loremflickr.com/320/240/dog"
      />
      <div>
        <div className="story-arrow">
          <img src={rightIcon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default StoryReel;
