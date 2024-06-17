import React from "react";

export default function NoOvers(props) {
  return (
    <>
      <div className="btn-group dropup btn-group mx-1">
        <button type="button" className="btn btn-secondary">
          select Match Type
        </button>
        <button
          type="button"
          className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="visually-hidden">select Match Type</span>
        </button>
        <ul className="dropdown-menu">
          <button
            type="button"
            className="btn btn-primary my-1"
            onClick={() => props.setmatchoverlimit(2)}
            disabled={props.disabled(2)}
          >
            2 overs match
          </button>
          <button
            type="button"
            className="btn btn-primary my-1"
            onClick={() => props.setmatchoverlimit(5)}
            disabled={props.disabled(5)}
          >
            5 overs match
          </button>
          <button
            type="button"
            className="btn btn-primary my-1"
            onClick={() => props.setmatchoverlimit(20)}
            disabled={props.disabled(20)}
          >
            20 overs match
          </button>
          <button
            type="button"
            className="btn btn-primary my-1"
            onClick={() => props.setmatchoverlimit(50)}
            disabled={props.disabled(50)}
          >
            50 overs match
          </button>
        </ul>
      </div>
      <div className="dropup-center dropup btn-group">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select ON-Strike Batsman
        </button>
        <ul className="dropdown-menu">
          <li>
            <button
              type="button"
              className="btn btn-primary my-1"
              onClick={() => {
                props.setBatsman("Virat");
              }}
              disabled={props.checkbatout("Virat")}
            >
              Virat kohli
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-primary my-1"
              onClick={() => {
                props.setBatsman("Rohit");
              }}
              disabled={props.checkbatout("Rohit")}
            >
              Rohit Sharma
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-primary my-1"
              onClick={() => {
                props.setBatsman("Hardik");
              }}
              disabled={props.checkbatout("Hardik")}
            >
              Hardik Pandaya
            </button>
          </li>
        </ul>
      </div>
      <div className="dropup-center dropup btn-group mx-1">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select Non-Strike Batsman
        </button>
        <ul className="dropdown-menu">
          <li>
            <button
              type="button"
              className="btn btn-primary my-1"
              onClick={() => {
                props.setNonBatsman("Virat");
              }}
            >
              Virat kohli
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-primary my-1"
              onClick={() => {
                props.setNonBatsman("Rohit");
              }}
            >
              Rohit Sharma
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-primary my-1"
              onClick={() => {
                props.setNonBatsman("Hardik");
              }}
            >
              Hardik Pandaya
            </button>
          </li>
        </ul>
      </div>
      <div className="dropup-center dropup btn-group mx-1">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select Bowler
        </button>
        <ul className="dropdown-menu">
          <li>
            <button
              type="button"
              className="btn btn-primary my-1"
              onClick={() => {
                props.setBowler("Jasprith Bumrah");
              }}
            >
              Jasprith Bumrah
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-primary my-1"
              onClick={() => {
                props.setBowler("Mohammed Siraj");
              }}
            >
              Mohammed Siraj
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-primary my-1"
              onClick={() => {
                props.setBowler("Yuzvendra Chahal");
              }}
            >
              Yuzevendar Cahal
            </button>
          </li>
        </ul>
        <button
          type="button"
          className="btn btn-secondary mx-1"
          onClick={() => {
            props.startmatch("false");
          }}
        >
          Start Match
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-1"
          onClick={() => {
            props.restartmatch("false");
          }}
        >
          Restart Match
        </button>
      </div>
    </>
  );
}
