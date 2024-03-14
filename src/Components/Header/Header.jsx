import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="gap-2 flex">
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending ? "bg-red-500" : isActive ? "bg-blue-500 p-2 text-white rounded-md":""
        }
      >
        Contact
      </NavLink>
      <NavLink    className={({ isActive, isPending }) =>
          isPending ? "bg-red-500" : isActive ? "bg-blue-500 p-2 text-white rounded-md":""
        } to="/about">About</NavLink>
      <NavLink    className={({ isActive, isPending }) =>
          isPending ? "bg-red-500" : isActive ? "bg-blue-500 p-2 text-white rounded-md":""
        } to="/users">Users</NavLink>
      <NavLink    className={({ isActive, isPending }) =>
          isPending ? "bg-red-500" : isActive ? "bg-blue-500 p-2 text-white rounded-md":""
        } to="posts">Posts</NavLink>
    </div>
  );
};

export default Header;
