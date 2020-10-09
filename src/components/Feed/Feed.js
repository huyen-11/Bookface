import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import db from "../../firebase";
import StoryReel from "./StoryReel";
import StatusCreator from "./StatusCreator";
import Post from "./Post";
import "./Feed.css";

function Feed({ uid }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);
  return (
    <div className="feed">
      <StoryReel />
      <StatusCreator />
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          profilePic={post.data.profilePic}
          timestamp={post.data.timestamp}
          username={post.data.username}
          content={post.data.content}
          imageUrl={post.data.imageUrl}
          likeNumber={post.data.likeNumber}
          likePerson={post.data.likePerson}
          uid={uid}
        />
      ))}
    </div>
  );
}

Feed.propTypes = {
  uid: PropTypes.string,
};
export default Feed;
