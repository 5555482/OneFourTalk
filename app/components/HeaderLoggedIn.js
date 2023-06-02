import React from "react";
import { Link } from "react-router-dom";

function HeaderLoggedIn(props) {
  function handleLogout() {
    props.setLoggedIn(false);
    localStorage.removeItem("onefourtalkToken");
    localStorage.removeItem("onefourtalkUsername");
    localStorage.removeItem("onefourtalkAvatar");
  }
  return (
    <div className="flex-row my-3 my-md-0">
      <a href="#" className="text-white mr-2 header-search-icon">
        <i className="fas fa-search"></i>
      </a>
      <span className="mr-2 header-chat-icon text-white">
        <i className="fas fa-comment"></i>
        <span className="chat-count-badge text-white"> </span>
      </span>
      <a href="#" className="mr-2">
        <img
          className="small-header-avatar"
          src={localStorage.getItem("onefourtalkAvatar")}
        />
      </a>
      <Link to="/create-post" className="btn btn-sm btn-success mr-2">
        Create Post
      </Link>
      <button onClick={handleLogout} className="btn btn-sm btn-secondary">
        Sign Out
      </button>
    </div>
  );
}

export default HeaderLoggedIn;
