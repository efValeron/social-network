import React from 'react';
import Posts from "./Posts/Posts";
import profileBGImage from "../../images/profileBGImage.jpg";
import profileImage from "../../images/profileImage.jpg";

export const Profile = () => {
  return (

    <div className="flex flex-col gap-4 px-4 box-border rounded-t-3xl">
      <div className="h-96 w-full overflow-hidden  rounded-b-md realtive">
        <img
          src={profileBGImage}
          alt="img"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-row gap-4">
        <div className="rounded-full bg-blue-200 h-48 w-48 overflow-hidden">
          <img
            src={profileImage}
            alt="img"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="box-border p-2">
          <h1 className="text-3xl font-semibold">Saleh Ahmed</h1>
          <p className="mt-2 text-lg font-medium opacity-60">UI Designer</p>
        </div>
        <button className="bg-slate-100 hover:bg-slate-200 duration-100 rounded-lg min-h-8 p-4">Edit profile</button>
      </div>
      <div className="flex flex-row gap-4">
        <div className="w-8 h-8 bg-fuchsia-500"></div>
        <div>
          about
        </div>
      </div>
      <Posts/>
    </div>
  );
};
