import "./App.css";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import { useSelector } from "react-redux";

function App() {
  const background = useSelector((state) => state.pyramid.backFont);
  const index = useSelector((state) => state.pyramid.colors);

  return (
    <div
      style={{ backgroundImage: `url(${background[index]})` }}
      className='main'
    >
      <div className='header-top'>
        <Header />
      </div>
      <div className='footer-top'>
        <Footer />
      </div>
      <Body />
      <div className='footer-bottom'>
        <Footer />
      </div>
      <div className='header-bottom'>
        <Header />
      </div>
    </div>
  );
}

export default App;
