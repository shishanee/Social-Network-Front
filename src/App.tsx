import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Home/Home";
import Routers from "./Routes/Routes";

function App() {
  return (
    <>
      <Header />
      <Routers />
    </>
  );
}

export default App;
