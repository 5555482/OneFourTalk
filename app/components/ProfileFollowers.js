import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams, Link } from "react-router-dom";

function ProfileFollowers() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const { username } = useParams();

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await Axios.get(`/profile/${username}/followers`);
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
      {posts.map((follower, index) => {
        return (
          <Link
            key={index}
            className="list-group-item list-group-item-action"
            to={`/profile/${follower.username}`}
          >
            <img className="avatar-tiny" src={follower.avatar} />
            {follower.username}
          </Link>
        );
      })}
    </div>
  );
}

export default ProfileFollowers;
