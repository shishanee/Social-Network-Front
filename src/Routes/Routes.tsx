import { Routes, Route } from "react-router-dom";
import SignUp from "../components/Sign/SignUp";
import SignIn from "../components/Sign/SignIn";
import MyFeed from "../components/MyFeed/MyFeed";

const Routers = () => {
  return (
    <Routes>
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/myFeed" element={<MyFeed />} />
    </Routes>
  );
};

export default Routers;
