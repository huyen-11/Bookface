import React, { useState } from "react";
import moment from "moment";
import PropTypes from "prop-types";

import db from "../../firebase";
import "./Post.css";
import Avatar from "../Avatar";
import likeIcon from "../../assets/like.png";
import likedIcon from "../../assets/liked.png";
import commentIcon from "../../assets/comment.png";

function Post({
  id,
  profilePic,
  timestamp,
  username,
  content,
  imageUrl,
  likeNumber,
  likePerson,
  uid,
}) {
  const [likeStatus, setLikeStatus] = useState(
    likePerson.length > 0 && uid.indexOf(likePerson) >= 0
  );
  let likeNumberVar = likeNumber;
  function handleLikeClick() {
    setLikeStatus(!likeStatus);
    if (!likeStatus) {
      likeNumberVar++;
      db.collection("posts")
        .doc(id)
        .update({
          likeNumber: likeNumberVar,
          likePerson: [...likePerson, uid],
        });
    } else {
      likeNumberVar--;
      db.collection("posts")
        .doc(id)
        .update({
          likeNumber: likeNumberVar,
          likePerson: likePerson.slice(0, likePerson.length - 1),
        });
    }
  }
  return (
    <div className="post">
      <div className="post-header">
        <Avatar src={profilePic} />
        <div className="post-header-info">
          <div className="post-header-username">{username}</div>
          <div className="post-header-timestamp">
            {moment(timestamp).from(new Date())}
          </div>
        </div>
      </div>
      <div className="post-content">{content}</div>
      {imageUrl && (
        <div className="post-image">
          <img src={imageUrl} alt="" />
        </div>
      )}
      {likeNumberVar > 0 && (
        <div className="post-likeCount">
          <Avatar width={20} height={20} src={likedIcon}></Avatar>
          <span>{likeNumberVar}</span>
        </div>
      )}
      <div className="post-actions">
        <div className="post-action" onClick={handleLikeClick}>
          {!likeStatus && <img src={likeIcon} alt="" />}
          {likeStatus && <img src={likedIcon} alt="" />}
          <div>Like</div>
        </div>
        <div className="post-action">
          <img src={commentIcon} alt="" />
          <div>Comment</div>
        </div>
      </div>
    </div>
  );
}
Post.propTypes = {
  id: PropTypes.string,
  profilePic: PropTypes.string,
  timestamp: PropTypes.string,
  username: PropTypes.string,
  content: PropTypes.string,
  imageUrl: PropTypes.string,
  likeNumber: PropTypes.number,
  likePerson: PropTypes.arrayOf(PropTypes.string),
  uid: PropTypes.string,
};
export default Post;
