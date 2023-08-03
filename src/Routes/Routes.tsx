import { Routes, Route } from "react-router-dom";
import SignUp from "../components/Sign/SignUp";
import SignIn from "../components/Sign/SignIn";
import MyFeed from "../components/MyFeed/MyFeed";
import Home from "../components/Home/Home";
import Group from "../components/Group/Group";
import Edit from "../components/EditProfile/Edit";
import React from "react";
import Music from "../components/Music/Music";
import Friends from "../components/Friends/Friends";

const Routers: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/edit" element={<Edit />}/>
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/myFeed" element={<MyFeed />} />
      <Route path="/" element={<Home />} />
      <Route path="/group" element={<Group />} />
      <Route path="/music" element={<Music />} />
      <Route path="/friends" element={<Friends />} />
    </Routes>
  );
};

export default Routers;
