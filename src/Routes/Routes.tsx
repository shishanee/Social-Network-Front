import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "../components/Sign/SignUp";
import SignIn from "../components/Sign/SignIn";
import MyFeed from "../components/MyFeed/MyFeed";
import Home from "../components/Home/Home";
import Group from "../components/Group/Group";
import Edit from "../components/EditProfile/Edit";
import React from "react";
import Music from "../components/Music/Music";
import Friends from "../components/Friends/Friends";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import Favorite from "../components/Favorite/Favorite";
import Messages from "../components/Messages/Messages";
import OneChat from "../components/Messages/OneChat";
import GroupMore from "../components/Group/GroupMore";
import OnePeople from "../components/OnePeople/OnePeople";
import Image from "../components/Image/Image";
import AllVideos from "../components/Video/AllVideos";

const Routers: React.FC = (): JSX.Element => {
  const token = useSelector((state: RootState) => state.application.token);
  return (
    <>
      {!token && (
        <Routes>
          <Route path="/edit" element={<Navigate to={"/login"} />} />
          <Route path="/myFeed" element={<Navigate to={"/login"} />} />
          <Route path="/" element={<Home />} />
          <Route path="/group" element={<Navigate to={"/login"} />} />
          <Route path="/music" element={<Navigate to={"/login"} />} />
          <Route path="/friends" element={<Navigate to={"/login"} />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      )}
      {token && (
        <Routes>
          <Route path="/login" element={<Navigate to="/" />} />; 
          <Route path="/edit" element={<Edit />} />
          <Route path="/videos" element={<AllVideos />} />
          <Route path="/image" element={<Image />} />
          <Route path="/messages/:id" element={<OneChat />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/myFeed" element={<MyFeed />} />
          <Route path="/" element={<Home />} />
          <Route path="/group" element={<Group />} />
          <Route path="/group/:id" element={<GroupMore />} />
          <Route path="/music" element={<Music />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/people/:id" element={<OnePeople />} />
        </Routes>
      )}
    </>
  );
};

export default Routers;
