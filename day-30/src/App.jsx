import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import {ThemeProvider} from "./context/ThemeContext";
import About from "./pages/About";
import Innerpage from "./pages/innerPage";
import Services from "./pages/service";
import Navbar from "./components/homepage/navbar";
import Footer from "./components/homepage/footer";
import Contact from "./components/homepage/contact";


function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/about/inner-page" element={<Innerpage />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
