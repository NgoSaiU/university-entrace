import React, { useState } from "react";
import { BrowserRouter, Link, Outlet } from "react-router-dom";
import UserLogin from "./UserLogin";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    toggle ? setToggle(false) : setToggle(true);
    // setToggle({ toggle: !toggle });
  };
  return (
    <>
      <nav>
        <div>
          <Link to="/">
            <img src="https://res.cloudinary.com/ds8i6jriz/image/upload/v1691315156/MyImages/logofull_nobg_f8oome.png" />
          </Link>
        </div>

        <div>
          <ul id="navbar" className={toggle ? "#navbar active" : "#navbar"}>
            <li>
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/admissions">Admissions</Link>
            </li>
            <li>
              <Link to="/programs">Programs</Link>
            </li>
            <li>
              <Link to="/departments">Departments</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <UserLogin />
            </li>
          </ul>
        </div>

        <div id="toggle" onClick={handleClick}>
          <i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
