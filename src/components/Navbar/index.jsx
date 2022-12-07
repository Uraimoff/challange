import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const Navbar = () => {
  const navTitle = [
    {
      id: "1",
      link: "/home",
      title: "Home",
    },
    {
      id: "2",
      link: "/quest",
      title: "Question",
    },
    {
      id: "3",
      link: "/all",
      title: "AllRate",
    },
  ];
  const logOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <nav>
      <div className="nav GlobaWrapper">
        <div className="nav-title">
          {navTitle.map((item) => (
            <Link to={item.link}>
              <p key={item.id} tabIndex={1}>
                {item.title}
              </p>
            </Link>
          ))}
        </div>
        <div className="nav-icon">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
            alt=""
            width={40}
          />
          <p>Ne'matov Xurshid</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/483/483343.png"
            alt=""
            width={20}
            style={{ cursor: "pointer" }}
            onClick={logOut}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
