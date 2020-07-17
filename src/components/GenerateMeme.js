import React from "react";
import { Container } from "react-bootstrap";

class GenerateMeme extends React.Component {
  render() {
    return (
      <Container className="text-center">
        <h1>{this.props.topText}</h1>
        <img
          src={this.props.randomImageSrc}
          alt={this.props.randomImageSrc}
          style={{ height: "400px" }}
        />
        <h1>{this.props.bottomText}</h1>
      </Container>
    );
  }
}

export default GenerateMeme;
