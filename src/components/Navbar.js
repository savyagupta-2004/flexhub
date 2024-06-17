import React from "react";

export default function Navbar(props) {
  return (
    <>
      <div>
        <nav
          className={`navbar navbar-expand-lg bg-${props.mode}`}
          style={{ color: props.mode === "dark" ? "white" : "#02081b" }}
        >
          <div className="container-fluid">
            <a
              className="navbar-brand"
              href="#"
              style={{ color: props.mode === "dark" ? "white" : "#02081b" }}
            >
              Flexhub
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <h1
                className="text-center mx-auto"
                style={{
                  color: props.mode === "dark" ? "white" : "#02081b",
                  margin: "0px",
                  position: "relative",
                  left: "35px",
                }}
              >
                Welcome to Flexhub!
              </h1>
            </div>
          </div>

          <div className="form-check form-switch" onClick={props.toggleMode}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable dark mode
            </label>
          </div>
        </nav>
      </div>
    </>
  );
}
