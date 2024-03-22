import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import About from "./page/about";
import Product from "./page/product";
import Argos4KMedical from "./page/ARGOS-4K-MEDICAL";
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
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
