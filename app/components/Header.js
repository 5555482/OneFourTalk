import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import HeaderLoggedOut from "./HeaderLoggedOut";
import HeaderLoggedIn from "./HeaderLoggedIn";
import StateContext from "../StateContext";

function Header(props) {
  const appState = useContext(StateContext);
  const headerContent = appState.loggedIn ? (
    <HeaderLoggedIn />
  ) : (
    <HeaderLoggedOut />
  );
  return (
    <header className="header-bar header mb-3 flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <Link
            to="/"
            className="flex items-center flex-shrink-0 text-white mr-6"
          >
            OneFourTalk
          </Link>
        </h4>
        {!props.staticEmpty ? headerContent : ""}
      </div>
    </header>
  );
}

export default Header;
