import React from "react";

class GenerateMeme extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.topText}</h1>
        <img src={this.props.randomImageSrc} alt={this.props.randomImageSrc} />
        <h1>{this.props.bottomText}</h1>
      </div>
    );
  }
}

export default GenerateMeme;
