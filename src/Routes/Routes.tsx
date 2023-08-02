import { Routes, Route } from "react-router-dom";
import SignUp from "../components/Sign/SignUp";
import SignIn from "../components/Sign/SignIn";
import Sidebar from "../components/Sidebar/Sidebar";
import Home from "../components/Home/Home";

const Routers = () => {
  return (
    <Routes>
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/sidebar" element={<Sidebar/>}/>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Routers;
