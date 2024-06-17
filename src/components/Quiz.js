import React from "react";
import virat from "./components_Text/virat.webp";

export default function Quiz() {
  const setcolor = () => {
    if (document.body.style.backgroundColor === "black") {
      return "white";
    }
    return "black";
  };
  const setMaincolor = () => {
    if (document.body.style.backgroundColor === "black") {
      return "rgb(129, 133, 137)";
    }
    return "white";
  };
  return (
    <>
      <h1 style={{ textAlign: "center", color: setcolor() }}>
        Welcome to Political Prodigy
      </h1>

      <div
        className="card text-center "
        style={{
          height: "50rem;",
          marginTop: "50px",
          backgroundColor: setMaincolor(),
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            className="progress"
            role="progressbar"
            aria-label="Example 1px high"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ height: "1px" }}
          >
            <div className="progress-bar" style={{ width: "25%" }}></div>
          </div>
          <div
            className="progress"
            role="progressbar"
            aria-label="Example 20px high"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ height: "20px" }}
          >
            <div className="progress-bar" style={{ width: "25%" }}></div>
          </div>
          <img
            src={virat}
            className="card-img-top"
            alt="..."
            style={{ height: "250px", width: "250px", marginTop: "10px" }}
          />
        </div>
        <div className="card-body mb-6">
          <h5 className="card-title" style={{ color: "setcolor()" }}>
            What is the name of the person in the picture shown above?
          </h5>

          <button type="button" className="btn btn-primary mx-1">
            Virat Kohli
          </button>
          <button type="button" className="btn btn-primary mx-1">
            Rohit Sharma
          </button>
          <button type="button" className="btn btn-primary mx-1">
            MS Dhoni
          </button>
        </div>
      </div>
    </>
  );
}
