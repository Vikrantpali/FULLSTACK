import React, { createContext, useContext, useState } from "react";
import "./App.css";

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        style={{
          padding: "200px",
          height: "100vh",
          background: theme === "light" ? "#f0f0f0" : "#2c2c2c",
          color: theme === "light" ? "black" : "white",
        }}
      >
        <h1>Heading</h1>
        <ThemeButton />
      </div>
    </ThemeContext.Provider>
  );
}
function Toolbar() {
  return (
    <div>
      <ThemeButton />
    </div>
  );
}

function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleToggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <button
      onClick={handleToggle}
      style={{
        background: theme === "light" ? "#2c2c2c" : "#f0f0f0",
        color: theme === "light" ? "white" : "black",
      }}
    >
      Toggle Theme
    </button>
  );
}

export default App;
