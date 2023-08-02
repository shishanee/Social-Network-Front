import { Routes, Route } from "react-router-dom";
import SignUp from "../components/Sign/SignUp";
import SignIn from "../components/Sign/SignIn";
import Home from "../components/Home/Home";
import Group from "../components/Group/Group";

const Routers = () => {
  return (
    <Routes>
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/" element={<Home />} />
      <Route path="/group" element={<Group />} />
    </Routes>
  );
};

export default Routers;
