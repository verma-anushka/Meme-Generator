import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

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
      <Container>
        <Form className="mt-4">
          <Row>
            <Col s={12} md={6} lg={6}>
              <Form.Group controlId="formTopText">
                <Form.Label>Enter top text:</Form.Label>
                <Form.Control
                  type="text"
                  name="topText"
                  value={this.state.topText}
                  onChange={this.onInputChange}
                />
              </Form.Group>
            </Col>
            <Col s={12} md={6} lg={6}>
              <Form.Group controlId="formBottomText">
                <Form.Label>Enter bottom text:</Form.Label>
                <Form.Control
                  type="text"
                  name="bottomText"
                  value={this.state.bottomText}
                  onChange={this.onInputChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="text-center">
            <Button variant="primary" type="submit" onClick={this.onFormSubmit}>
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    );
  }
}

export default InputsForm;
