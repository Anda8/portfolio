import "./App.css";
import Navbar from "./components/js/Navbar";
import Home from "./components/js/Home";
import Skills from "./components/js/Skills";
import Services from "./components/js/Services";
import Portifolio from "./components/js/Portifolio";
import Contact from "./components/js/Contact";
import Footer from "./components/js/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* All Sections */}
      <div className="container">
      <div className="row g-0">
        <div className="col-md-2"></div>
        <div className="col-md-10">
      <Skills />
      <Services />
      <Portifolio />
      <Contact />
      </div>
      </div>
      </div>
       {/* End All Sections */}
       <Footer />
    </div>
  );
}

export default App;
