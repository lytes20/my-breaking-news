import React from "react";
import "../assets/styles/canvascomponent.scss";

function CanvasComponent() {
  return (
    <div className="CanvasComponentContainer">
      <div className="Screen">
        <div className="Screen-live">
          <h1>LIVE</h1>
        </div>
        <div>
          <div className="Screen-breaking-news">
            <h1>BREAKING NEWS</h1>
          </div>
          <div className="Screen-headline">
            <h1>HEADLINE</h1>
          </div>
          <div className="Screen-storyline">
            <h2>Story line</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CanvasComponent;
