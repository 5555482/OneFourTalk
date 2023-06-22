import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import DispatchContext from "../DispatchContext";

function HeaderLoggedOut(props) {
  const appDispatch = useContext(DispatchContext);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await Axios.post("/login", { username, password });
      if (response.data) {
        appDispatch({ type: "login", data: response.data });
        appDispatch({
          type: "flashMessage",
          value: "You have successfully logged in."
        });
      } else {
        console.log("Incorrect username / password.");
        appDispatch({
          type: "flashMessage",
          value: "Invalid username or password."
        });
      }
    } catch (e) {
      console.log("There was a problem.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-0 pt-2 pt-md-0">
      <div className="row align-items-center">
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input
            onChange={e => setUsername(e.target.value)}
            name="username"
            className="form-control input-light"
            type="text"
            placeholder="Username"
            autoComplete="off"
          />
        </div>
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input
            onChange={e => setPassword(e.target.value)}
            name="password"
            className="form-control input-light"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="col-md-auto">
          <button className="bg-transparent text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
            Sign In
          </button>
        </div>
      </div>
    </form>
  );
}

export default HeaderLoggedOut;
