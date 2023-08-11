import React from 'react';
import {NavLink} from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex flex-col col-span-1 bg-amber-500 font-semibold text-stone-50 box-border p-2 gap-2">
      <div><NavLink className={({isActive}) => isActive ? "text-stone-300" : ""}
                    to="/profile">Profile</NavLink></div>

      <div><NavLink className={({isActive}) => isActive ? "text-stone-300" : ""}
                    to="/messages">Messages</NavLink></div>

      <div><NavLink className={({isActive}) => isActive ? "text-stone-300" : ""}
                    to="/news">News</NavLink></div>

      <div><NavLink className={({isActive}) => isActive ? "text-stone-300" : ""}
                    to="/music">Music</NavLink></div>

      <div><NavLink className={({isActive}) => isActive ? "text-stone-300" : ""}
                    to="/settings">Settings</NavLink></div>
    </nav>
  );
};

export default Nav;
