import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routers from "./Routes/Routes";

function App() {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  );
}

export default App;
