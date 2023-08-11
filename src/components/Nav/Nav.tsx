import React from 'react';

const Nav = () => {
  return (
    <nav className="flex flex-col col-span-1 bg-amber-500 font-semibold text-stone-50 box-border p-2 gap-2">
      <div><a href="/profile">Profile</a></div>
      <div><a href="/messages">Messages</a></div>
      <div><a href="/news">News</a></div>
      <div><a href="/music">Music</a></div>
      <div><a href="/settings">Settings</a></div>
    </nav>
  );
};

export default Nav;
