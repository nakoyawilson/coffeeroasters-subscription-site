import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
    </div>
  );
}

export default App;
