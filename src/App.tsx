import "./App.css";
import BtnScrollUp from "./components/BtnScrollUp/BtnScrollUp";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Routers from "./Routes/Routes";

const App: React.FC = (): JSX.Element => {
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
