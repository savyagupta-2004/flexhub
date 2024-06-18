import "./App.css";
import Navbar from "./components/Navbar";
// import TextCraft from "./components/TextCraft";
import Home from "./components/Home";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AlertsCricket from "./components/AlertsCricket";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  // const [matchalert, setMatchAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // const show2Alert = (message, type) => {
  //   setMatchAlert({ message, type });
  //   // setTimeout(() => {
  //   //   setAlert(null);
  //   // }, 2000);
  // };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  // const styles = {
  //   color: mode === "dark" ? "white" : "#02081b",
  //   textAlign: "center",
  // };
  const setcolor = () => {
    if (document.body.style.backgroundColor === "white") {
      return "white";
    }
    return "black";
  };
  // const senewcolor = () => {
  //   if (document.body.style.backgroundColor === "black") {
  //     return "grey";
  //   }
  //   return "black";
  // };
  const verybadalert = () => {
    toast(<b style={{ color: setcolor() }}>Select a Bowler</b>);
  };
  const verybadalert2 = () => {
    toast(<b style={{ color: setcolor() }}>Select a type of Match!</b>);
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <AlertsCricket alert={alert} />
      <AlertsCricket />
      <Home
        mode={mode}
        verybadalert={verybadalert}
        verybadalert2={verybadalert2}
      />
      <ToastContainer />
    </>
  );
}

export default App;
