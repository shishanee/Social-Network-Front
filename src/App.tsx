import "./App.css";
import BtnScrollUp from "./components/BtnScrollUp/BtnScrollUp";
import Header from "./components/Header/Header";
import RightSidebar from "./components/rightSidebar/rightSidebar";
import Sidebar from "./components/Sidebar/Sidebar";
import Routers from "./Routes/Routes";

const App: React.FC = (): JSX.Element => {
  return (
    <>
    <RightSidebar/>
      <BtnScrollUp />
      <Header />
      <div className="homePage">
        <Sidebar />
        <Routers />
      </div> 
    </>
  );
};

export default App;
