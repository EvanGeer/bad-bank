import { Dropdown, Nav, Navbar, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Login from "./Login";

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
        <Nav.Link as={NavLink} to="/" data-testid="Nav-Home"> 
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to="/deposit" data-testid="Nav-Deposit">
          Deposit
        </Nav.Link>
        <Nav.Link as={NavLink} to="/withdrawal" data-testid="Nav-Withdrawal">
          Withdrawal
        </Nav.Link>
        <Nav.Link as={NavLink} to="/statement" data-testid="Nav-Statement">
          All Data
        </Nav.Link>
      </Nav>

      <Nav className="d-flex">
        <Login />
      </Nav>
    </Navbar>
  );
}
