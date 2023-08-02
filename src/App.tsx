import "./App.css";
import BtnScrollUp from "./components/BtnScrollUp/BtnScrollUp";
import Header from "./components/Header/Header";
import RightSidebar from "./components/rightSidebar/rightSidebar";
import Sidebar from "./components/Sidebar/Sidebar";
import Routers from "./Routes/Routes";

function App() {
  return (
    <>
      <BtnScrollUp />
      <Header />
      <div className="homePage">
        <Sidebar />
        <Routers />
        <RightSidebar />
      </div>
    </>
  );
}

export default App;
