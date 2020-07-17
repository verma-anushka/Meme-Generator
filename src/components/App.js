import React from "react";
import axios from "axios";
import Header from "./Header";
import DisplayMeme from "./DisplayMeme";

class App extends React.Component {
  state = {
    randomImageSrc: "https://i.imgflip.com/345v97.jpg",
    allMemeImages: [],
  };

  componentDidMount() {
    this.getRandomImages();
  }

  getRandomImages = async () => {
    const response = await axios.get("https://api.imgflip.com/get_memes");
    this.setState({
      allMemeImages: response.data.data.memes,
      randomImageSrc: response.data.data.memes[0],
    });
  };

  render() {
    return (
      <div>
        <Header />
        <DisplayMeme allMemeImages={this.state.allMemeImages} />
      </div>
    );
  }
}

export default App;
