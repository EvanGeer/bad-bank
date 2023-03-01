import { Dropdown, Nav, Navbar, NavItem, NavLink } from "react-bootstrap";
import { HashRouter, Link } from "react-router-dom";
import Login from "./Login";
import { LinkContainer } from "react-router-bootstrap";

export default function TopNav() {
  return (
    <Navbar
      className="main-header bg-dark text-light"
      expand={true}
      variant="dark"
    >

      <Navbar.Brand
        title="React-Bootstrap"
        href="https://github.com/react-bootstrap/react-bootstrap"
        className="d-block text-light"
      >
        <span className="react-bootstrap-img" />
      </Navbar.Brand>

      <Nav className="me-auto">
        <LinkContainer to={"/"}>
          <NavLink>Home</NavLink>
        </LinkContainer>
        <LinkContainer to={"/deposit"}>
          <Nav.Link>Deposit</Nav.Link>
        </LinkContainer>
        <LinkContainer to={"/withdrawal"}>
          <Nav.Link>Withdrawal</Nav.Link>
        </LinkContainer>
        <LinkContainer to={"/statement"}>
          <Nav.Link>All Data</Nav.Link>
        </LinkContainer>
        {/* <LinkContainer to={"/deposit"}>
          <Nav.Link>ATM</Nav.Link>
        </LinkContainer>
        <LinkContainer to={"/deposit"}>
          <Nav.Link>New Account</Nav.Link>
        </LinkContainer> */}
      </Nav>


      <Nav className="d-flex">
        <Login />
      </Nav>
    </Navbar>
  );
}
