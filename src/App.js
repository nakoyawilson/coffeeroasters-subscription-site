import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Attribution from "./components/Attribution";
import "./App.css";

function App() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <Header />
      <Outlet context={scrollToTop} />
      <Footer scrollToTop={scrollToTop} />
      <Attribution />
    </div>
  );
}

export default App;
