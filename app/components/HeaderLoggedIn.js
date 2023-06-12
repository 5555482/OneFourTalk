import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";
import ReactTooltip from "react-tooltip";

function HeaderLoggedIn(props) {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  function handleLogout() {
    appDispatch({ type: "logout" });
  }
  function handleSearch(e) {
    e.preventDefault();
    appDispatch({ type: "openSearch" });
  }
  return (
    <div className="flex-row my-3 my-md-0">
      <a
        onClick={handleSearch}
        href="#"
        className="text-white mr-2 ml-2 header-search-icon"
        data-for="search"
        data-tip="Search"
      >
        <i className="fas fa-search"></i>
      </a>
      <ReactTooltip place="bottom" id="search" className="custom-tooltip" />
      <span
        data-for="chat"
        data-tip="Chat"
        className="header-chat-icon text-white mr-2 ml-2"
      >
        <i className="fas fa-comment"></i>
        <span className="chat-count-badge text-white"> </span>
      </span>
      <ReactTooltip place="bottom" id="chat" className="custom-tooltip" />
      <Link
        data-for="profile"
        data-tip="My profile"
        className="mr-2 ml-2"
        to={`/profile/${appState.user.username}`}
      >
        <img className="small-header-avatar" src={appState.user.avatar} />
      </Link>
      <ReactTooltip place="bottom" id="profile" className="custom-tooltip" />
      <Link
        className="bg-transparent hover:bg-blue-500 text-white hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-2 ml-2"
        to="/create-post"
      >
        Create Post
      </Link>
      <Link
        onClick={handleLogout}
        className="bg-transparent hover:bg-blue-500 text-white hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-2 ml-2"
      >
        Sign Out
      </Link>
    </div>
  );
}

export default HeaderLoggedIn;
