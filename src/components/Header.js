import React from "react";
import { Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="text-center p-4"
      style={{ color: "#fff" }}
    >
      <h1 style={{ textTransform: "uppercase", marginLeft: "38%" }}>
        Meme Generator
      </h1>
    </Navbar>
  );
};

export default Header;
