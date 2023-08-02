import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Routers from "./Routes/Routes";

function App() {
  return (
    <>
      <Header />
      <div className="homePage">
        <Sidebar />
        <Routers />
      </div>
    </>
  );
}

export default App;
