import React from 'react'
import './App.css'
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {Messages} from "./components/Messages/Messages";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="box-border p-2 h-full font-hel">
        <Header/>
        <div className="mt-2 grid grid-cols-12 gap-2">
          <Nav/>
          <div className="bg-sky-500 col-span-11 p-2 box-border">
            <Routes>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/messages" element={<Messages/>}/>
              <Route path="/news" element={<News/>}/>
              <Route path="/music" element={<Music/>}/>
              <Route path="/settings" element={<Settings/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
