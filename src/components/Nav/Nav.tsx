import React from 'react';
import {NavLink} from "react-router-dom";

const Nav = () => {
  const NavLinkStyles = "box-border py-2 px-4 rounded-lg duration-100"
  const ActiveLinkStyles = "bg-slate-500 text-slate-50"
  const UnActiveLinkStyles = "hover:bg-slate-200"

  return (
    <nav className="flex flex-col col-span-1 font-semibold mt-2 box-border gap-2">
      <NavLink className={({isActive}) => `${isActive ? ActiveLinkStyles : UnActiveLinkStyles} ${NavLinkStyles}`}
                    to="/profile">Profile</NavLink>

      <NavLink className={({isActive}) => `${isActive ? ActiveLinkStyles : UnActiveLinkStyles} ${NavLinkStyles}`}
                    to="/messages">Messages</NavLink>

      <NavLink className={({isActive}) => `${isActive ? ActiveLinkStyles : UnActiveLinkStyles} ${NavLinkStyles}`}
                    to="/news">News</NavLink>

      <NavLink className={({isActive}) => `${isActive ? ActiveLinkStyles : UnActiveLinkStyles} ${NavLinkStyles}`}
                    to="/music">Music</NavLink>

      <NavLink className={({isActive}) => `${isActive ? ActiveLinkStyles : UnActiveLinkStyles} ${NavLinkStyles}`}
                    to="/settings">Settings</NavLink>
    </nav>
  );
};

export default Nav;
