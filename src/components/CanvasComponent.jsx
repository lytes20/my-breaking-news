import React from 'react';
import { connect } from 'react-redux';

import '../assets/styles/canvascomponent.scss';

function CanvasComponent({headline, storyline }) {

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
            <h1>{headline}</h1>
          </div>
          <div className="Screen-storyline">
            <h2>{storyline}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    headline: state.appReducer.headline,
    storyline: state.appReducer.storyline,
  };
};
export default connect(mapStateToProps)(CanvasComponent);
