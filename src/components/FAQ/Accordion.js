import React, { useState } from "react";
import "./roadmap.css";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="row">
      <div className="col-md-12 p-5 bg-gray">
        <div className="accordion-item bg-gray ">
          <div
            className="accordion-title "
            onClick={() => setIsActive(!isActive)}
          >
            <div className="inlineLeft title-color">{title}</div>
            <div className="inlineRight">{isActive ? "-" : "+"}</div>
            <div>
              <hr
                style={{
                  color: "white ",
                  height: 3,
                  margin:5,
                }}
                className="Line"
              />
            </div>
          </div>
          {isActive && (
            <div className="accordion-content accContent">
              {content} <br />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
