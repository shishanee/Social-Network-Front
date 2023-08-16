import { useEffect } from "react";
import "./App.css";
import BtnScrollUp from "./components/BtnScrollUp/BtnScrollUp";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Routers from "./Routes/Routes";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./app/store";
import { GetUserFavorite, allUsers, getUser, oneUser } from "./features/userSlice";
import { getGroups } from "./features/groupSlice";
import { getDialog } from "./features/dialogSlice";
import { allImages } from "./features/imageSlice";
import Music from "./components/Music/Music";
import { allPosts } from "./features/postsSlice";

const App: React.FC = (): JSX.Element => {
  const token = useSelector((state: RootState) => state.application.token);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(GetUserFavorite())
    dispatch(getUser());
    dispatch(allUsers());
    dispatch(getGroups());
    dispatch(getDialog());
    dispatch(allImages());
    dispatch(allPosts());
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