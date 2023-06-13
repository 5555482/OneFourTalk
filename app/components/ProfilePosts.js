import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import { useParams, Link } from "react-router-dom";
import StateContext from "../StateContext";

function ProfilePosts() {
  const appState = useContext(StateContext);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const { username } = useParams();

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await Axios.get(`/profile/${username}/posts`);
        setPosts(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log("There was a problem.");
      }
    }
    fetchPosts();
  }, [username]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="list-group">
      {posts.map(post => {
        const date = new Date(post.createdDate);
        const dateFormatted = `${
          date.getMonth() + 1
        }/${date.getDate()}/${date.getFullYear()}`;
        return (
          <Link
            key={post._id}
            className="list-group-item list-group-item-action"
            to={`/post/${post._id}`}
          >
            <img className="avatar-tiny" src={appState.user.avatar} />{" "}
            <strong>{post.title}</strong>{" "}
            <span className="text-muted small">on {dateFormatted} </span>
          </Link>
        );
      })}
    </div>
  );
}

export default ProfilePosts;
