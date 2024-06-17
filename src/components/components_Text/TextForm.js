import React, { useState } from "react";
import PalindromeChecker from "./PalindromeChecker";
import AnagramGenerator from "./AnagramGenerator";
import ScenaryGenerator from "./ScenaryGenerator";
// import LovePercentageCalculator from "./LovePercentageCalculator";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text here");
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleDuplicateClick = () => {
    let newText = text + text;
    setText(newText);
  };

  const handleReverseClick = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const setcolor = () => {
    if (document.body.style.backgroundColor === "black") {
      return "white";
    }
    return "black";
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case "PalindromeChecker":
        return <PalindromeChecker />;
      case "AnagramGenerator":
        return <AnagramGenerator />;
      case "ScenaryGenerator":
        return <ScenaryGenerator />;
      // case "LovePercentageCalculator":
      //   return <LovePercentageCalculator />;
      default:
        return null;
    }
  };

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          color: setcolor(),
        }}
      >
        TextCraft
      </h1>
      <div>
        <div className="container">
          <h1 style={{ color: setcolor() }}>Enter Text to analyze</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="mybox"
              rows="8"
              value={text}
              onChange={handleOnChange}
              style={{
                backgroundColor: props.mode === "dark" ? "#02081b" : "white",
                color: props.mode === "dark" ? "white" : "#02081b",
              }}
            ></textarea>
          </div>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-primary mx-1 my-1"
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-primary mx-1 my-1"
            onClick={handleDownClick}
          >
            Convert to Lowercase
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-primary mx-1 my-1"
            onClick={handleClearClick}
          >
            Clear
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-primary mx-1 my-1"
            onClick={handleDuplicateClick}
          >
            Duplicate Text
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-primary mx-1 my-1"
            onClick={handleReverseClick}
          >
            Reverse Text
          </button>
          <div
            className="btn-group-vertical"
            role="group"
            aria-label="Vertical button group"
          >
            <div className="btn-group" role="group">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Play with Words
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => setSelectedComponent("PalindromeChecker")}
                  >
                    Palindrome Checker
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => setSelectedComponent("AnagramGenerator")}
                  >
                    Anagram Generator
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => setSelectedComponent("ScenaryGenerator")}
                  >
                    Scenary Generator
                  </button>
                  {/* <button
                    className="dropdown-item"
                    onClick={() =>
                      setSelectedComponent("LovePercentageCalculator")
                    }
                  >
                    Love Percantage Calculator
                  </button> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container my-3" style={{ color: setcolor() }}>
          <h2>Your Text Summary</h2>
          <p>
            {text.split(/\s+/).filter((element) => element.length !== 0).length}{" "}
            words and {text.length} characters
          </p>
          <p>
            {0.08 *
              text.split(" ").filter((element) => element.length !== 0)
                .length}{" "}
            minutes to read
          </p>
          <h2>Preview</h2>
          <p>{text.length === 0 ? "Enter something to preview" : text}</p>
        </div>
        <div className="container my-3" style={{ color: setcolor() }}>
          {renderComponent()}
        </div>
      </div>
    </>
  );
}
