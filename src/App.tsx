import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routers from "./Routes/Routes";
import RightSidebar from "./components/rightSidebar/rightSidebar";

function App() {
  return (
    <>
      <Header />
      <RightSidebar/>
      <Routers />
      <Footer />
    </>
  );
}

export default App;
