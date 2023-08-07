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
import Sidebar from "../components/Sidebar/Sidebar";
import Favorite from "../components/Favorite/Favorite";

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
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/myFeed" element={<MyFeed />} />
          <Route path="/" element={<Home />} />
          <Route path="/group" element={<Group />} />
          <Route path="/music" element={<Music />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      )}
    </>
  );
};

export default Routers;
