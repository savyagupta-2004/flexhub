import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
import TextForm from "./components_Text/TextForm";
// import About from "./components_Text/About";

function TextCraft() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#02081b";
      document.title = "TextCraft - Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextCraft - Light mode";
    }
  };

  return (
    <div className="container my-3">
      <TextForm mode={mode} toggleMode={toggleMode} />
    </div>
  );
}

export default TextCraft;
