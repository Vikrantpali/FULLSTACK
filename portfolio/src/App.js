import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import Homepage from "./pages/homepage";
import AboutPage from "./pages/aboutpage";
import ContactPage from "./pages/contactpage";
import Projectpage from "./pages/projectpage";
import Altitude from "./pages/Altitude"
import TailwindProject from "./pages/tailwindproject";
import Portfolio from "./pages/Portfolio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/themeContext";

function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          exact
          path={"/"}
          element={
            <>
              <Homepage/>
            </>
          }
        />
        <Route
          exact
          path={"/about"}
          element={
            <>
              <AboutPage/>
            </>
          }
        />
        <Route
          exact
          path={"/contact"}
          element={
            <>
              <ContactPage/>
            </>
          }
        />
        <Route
          exact
          path={"/project"}
          element={
            <>
              <Projectpage/>
            </>
          }
        />
        <Route
          exact
          path={"/project/tailwind-project"}
          element={
            <>
              <TailwindProject/>
            </>
          }
        />
        <Route
          exact
          path={"/project/altitude-project"}
          element={
            <>
              <Altitude/>
            </>
          }
        />
        <Route
          exact
          path={"/project/portfolio-project"}
          element={
            <>
              <Portfolio/>
            </>
          }
        />
      </Routes>
      <Sidebar />
      <Footer />
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
