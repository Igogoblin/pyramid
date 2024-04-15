import "./App.css";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
