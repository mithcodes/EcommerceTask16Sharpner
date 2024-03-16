import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";
import { AppState } from "../context/Context";
import { Link } from "react-router-dom";
import AuthCxt from "../context/AuthContext";

const NavbarList = ({ cart }) => {
  const { state } = AppState();
  let items = state.cart.length;
  function handleClick() {
    cart((prev) => !prev);
  }

  const { isLoggedIn } = AuthCxt();

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Link className="link lm" to={"/"}>
              HOME
            </Link>
            <Link className="link" to={"/store"}>
              STORE
            </Link>
            <Link className="link" to={"/about"}>
              ABOUT
            </Link>
           
            <Link className="link" to={"/contact"}>
            
              CONTACT
            </Link>
            <Link className="link" to={"/login"}>
              {isLoggedIn ? "LOGOUT" : "LOGIN"}
            </Link>
          </Nav>
        </Container>
        <button
          className="cart_btn"
          onClick={handleClick}
        >{`Cart ${items}`}</button>
      </Navbar>
    </>
  );
};
export default NavbarList;