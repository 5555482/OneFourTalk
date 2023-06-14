import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import { useParams, Link } from "react-router-dom";
import StateContext from "../StateContext";
import Post from "./Post";

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
        return <Post noAuthor={true} post={post} key={post._id} />;
      })}
    </div>
  );
}

export default ProfilePosts;
