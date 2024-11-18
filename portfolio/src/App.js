import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import Homepage from "./pages/homepage";
import AboutPage from "./pages/aboutpage";
import ContactPage from "./pages/contactpage";
import Projectpage from "./pages/projectpage";
import TailwindProject from "./pages/tailwindproject";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
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
      </Routes>
      <Sidebar />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
