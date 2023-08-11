import React from 'react';
import Post from "./Post/Post";

const Posts = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-semibold text-lg">My posts</h1>
      <div className="bg-sky-600 p-4 box-border flex flex-row justify-between">
      <textarea
        name="postText"
        id="postText"
        className="h-16 flex-1 mr-2 resize-none bg-white rounded p-2"
        placeholder="Enter your text here..."
      ></textarea>
        <button className="bg-slate-500 hover:bg-slate-600 px-4 py-2 rounded text-white font-semibold">
          Send
        </button>
      </div>
      <div className="flex flex-col gap-4 bg-sky-600 p-4 box-border">
        <Post text={"Lorem ipsum."}/>
        <Post text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, dolore!"}/>
        <Post text={"Lorem ipsumr sit amet, consectetu."}/>
        <Post text={"Lorem ipsuing em."}/>
      </div>
    </div>
  );
};

export default Posts;
