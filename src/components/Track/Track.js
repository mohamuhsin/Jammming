import React from "react";

import "./Track.css";
class Track extends React.Component {

  renderAction() {
    if(this.props.isRemoval) {
      return <Button className="Track-action">-</Button>
    } else {
      return <Button className="Track-action">+</Button>
    }
  }


  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>Track Name</h3>
          <p>Track artist | Track album</p>
        </div>
       {this.renderAction()}
      </div>
    );
  }
}
export default Track;
