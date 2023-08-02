import "./App.css";
import Header from "./components/Header/Header";
import RightSidebar from "./components/rightSidebar/rightSidebar";
import Sidebar from "./components/Sidebar/Sidebar";
import Routers from "./Routes/Routes";

function App() {
  return (
    <>
    <RightSidebar/>
      {/* <Header />
      <div className="homePage">
        <Sidebar />
        <Routers />
      </div> */}
    </>
  );
}

export default App;
