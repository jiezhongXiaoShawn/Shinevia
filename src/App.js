import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import About from "./page/about";
import Product from "./page/product";
import Argos4KMedical from "./page/ARGOS-4K-MEDICAL";
import Argos4KFluorscent from "./page/ARGOS-4KFLUORSCENT";
import Horus3D4K from "./page/HORUS-3D4K";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/home";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="argos-4k-medical" element={<Argos4KMedical />} />
          <Route path="/argos-4k-fluorscent" element={<Argos4KFluorscent />} />
          <Route path="/horus-3d-4k" element={<Horus3D4K />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
