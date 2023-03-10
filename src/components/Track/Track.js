import React from "react";

import "./Track.css";
class Track extends React.Component {
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>coding</h3>
          <p>coding for life</p>
        </div>
        <button className="Track-action">{renderAction()}</button>
      </div>
    );
  }
}
export default Track;
