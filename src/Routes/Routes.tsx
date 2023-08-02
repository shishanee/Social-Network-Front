import { Routes, Route } from "react-router-dom";
import SignUp from "../components/Sign/SignUp";
import SignIn from "../components/Sign/SignIn";
import MainFeed from "../components/MyFeed/MainFeed";

const Routers = () => {
  return (
    <Routes>
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/myFeed" element={<MainFeed />} />
    </Routes>
  );
};

export default Routers;
