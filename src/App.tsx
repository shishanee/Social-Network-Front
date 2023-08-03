import { useEffect } from "react";
import "./App.css";
import BtnScrollUp from "./components/BtnScrollUp/BtnScrollUp";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Routers from "./Routes/Routes";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./app/store";
import { getUser } from "./features/userSlice";

const App: React.FC = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <>
        <BtnScrollUp />
      <Header />
      <div className="home">
        <div className="homePage">
          <Sidebar />
          <Routers />
        </div>
      </div> 
    </>
  );
};

export default App;
