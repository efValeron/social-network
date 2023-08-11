import React from 'react'
import './App.css'
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {Messages} from "./components/Messages/Messages";

const App = () => {
  return (
    <div className="box-border p-2 h-full font-hel">
      <Header/>
      <div className="mt-2 grid grid-cols-12 gap-2">
        <Nav/>
        <div className="bg-sky-500 col-span-11 p-2 box-border">
          {/*<Profile/>*/}
          <Messages/>
        </div>
      </div>
    </div>
  );
};

export default App;
