import { useEffect } from "react";
import "./App.css";
import BtnScrollUp from "./components/BtnScrollUp/BtnScrollUp";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Routers from "./Routes/Routes";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./app/store";
import { allUsers, getUser, oneUser } from "./features/userSlice";
import { getGroups } from "./features/groupSlice";
import { getDialog } from "./features/dialogSlice";
import { allImages } from "./features/imageSlice";

const App: React.FC = (): JSX.Element => {
  const token = useSelector((state: RootState) => state.application.token);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUser());
    dispatch(allUsers());
    dispatch(getGroups());
    dispatch(getDialog());
    dispatch(allImages());
  }, []);
  return (
    <>
      <BtnScrollUp />
      {token && <Header />}
      <div className="home">
        <div className="homePage">
          {token && <Sidebar />}
          <Routers />
        </div>
      </div>
    </>
  );
};

export default App;
