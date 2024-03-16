import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark" className="footer">
      <Container>
        <Navbar.Brand href="#home">The Generics</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Footer;