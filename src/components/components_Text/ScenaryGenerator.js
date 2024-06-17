import React, { useState } from "react";
import Sunrise from "../components_Text/Sunrise.jpeg";
import Sunset from "../components_Text/Sunset.jpeg";
import Mountains from "../components_Text/Mountains.jpeg";

export default function SceneryGenerator() {
  const [selectedScenery, setScenery] = useState(null);

  const handleSceneryChange = (scenery) => {
    setScenery(scenery);
  };

  return (
    <div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Scenery Generator
        </button>
        <ul className="dropdown-menu">
          <li>
            <button
              type="button"
              className="btn btn-primary my-2"
              onClick={() => handleSceneryChange("sunrise")}
              style={{ marginLeft: "5px" }}
            >
              Sun Rise
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-primary my-2"
              onClick={() => handleSceneryChange("sunset")}
              style={{ marginLeft: "5px" }}
            >
              Sun Set
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-primary my-2"
              onClick={() => handleSceneryChange("mountains")}
              style={{ marginLeft: "5px" }}
            >
              Mountains
            </button>
          </li>
        </ul>
      </div>
      <div className="scenery-display" style={{ marginTop: "20px" }}>
        {selectedScenery === "sunrise" && (
          <img
            src={Sunrise}
            alt="Sunrise"
            style={{ width: "900px", height: "500px" }}
          />
        )}
        {selectedScenery === "sunset" && (
          <img
            src={Sunset}
            alt="Sunset"
            style={{ width: "900px", height: "500px" }}
          />
        )}
        {selectedScenery === "mountains" && (
          <img
            src={Mountains}
            alt="Mountains"
            style={{ width: "900px", height: "500px" }}
          />
        )}
      </div>
    </div>
  );
}
