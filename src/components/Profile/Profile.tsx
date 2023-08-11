import React from 'react';
import Posts from "./Posts/Posts";

export const Profile = () => {
  return (
    <div className="flex flex-col gap-4">
      <img
        src="https://img.freepik.com/free-photo/view-new-york-city-usa_53876-153448.jpg?w=1380&t=st=1690973433~exp=1690974033~hmac=64bece425098fe687e4f4b8dc699cac9335c4a1b28827857976744f78946261c"
        alt="img"
        className="mx-auto h-64 object-none w-full"
      />
      <div className="flex flex-row gap-4">
        <div className="w-8 h-8 bg-fuchsia-500"></div>
        <div>
          about
        </div>
      </div>
      <Posts />
    </div>
  );
};
