import React from "react";
import InputsForm from "./InputsForm";
import GenerateMeme from "./GenerateMeme";

class DisplayMeme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: "",
      bottomText: "",
      randomImageSrc: "https://i.imgflip.com/345v97.jpg",
    };
  }

  onInputSubmit = (top, bottomText) => {
    this.setState({
      topText: top,
      bottomText: bottomText,
    });
  };

  onRandomImageSelect = () => {
    const randomNum = Math.floor(
      Math.random() * this.props.allMemeImages.length
    );
    const randomImageSrc = this.props.allMemeImages[randomNum].url;
    this.setState({ randomImageSrc: randomImageSrc });
  };

  render() {
    return (
      <div>
        <InputsForm
          onInputSubmit={this.onInputSubmit}
          onRandomImageSelect={this.onRandomImageSelect}
          randomImageSrc={this.randomImageSrc}
        />
        <GenerateMeme
          topText={this.state.topText}
          randomImageSrc={this.state.randomImageSrc}
          bottomText={this.state.bottomText}
        />
      </div>
    );
  }
}

export default DisplayMeme;
