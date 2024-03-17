import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import About from "./page/about";
import Product from "./page/product";
import Solutions from "./page/solutions";
import Support from "./page/support";
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
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/support" element={<Support />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
