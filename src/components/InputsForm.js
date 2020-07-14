import React from "react";

class InputsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: "",
      bottomText: "",
    };
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onInputSubmit(this.state.topText, this.state.bottomText);
    this.props.onRandomImageSelect();
  };

  onInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <label>Enter top text</label>
          <input
            type="text"
            name="topText"
            value={this.state.topText}
            onChange={this.onInputChange}
          />
          <label>Enter bottom text</label>
          <input
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            onChange={this.onInputChange}
          />

          <button onClick={this.onFormSubmit}>Generate</button>
        </form>
      </div>
    );
  }
}

export default InputsForm;
