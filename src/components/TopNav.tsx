import { Dropdown, Nav, Navbar, NavItem, NavLink } from "react-bootstrap";
import Login from "./Login";

export default function TopNav() {
  return (
    <Navbar
      className="main-header bg-dark text-light"
      expand={true}
      variant="dark"
    >
      {/* <Container className="p-0 d-flex"> */}

      <Navbar.Brand
        title="React-Bootstrap"
        href="https://github.com/react-bootstrap/react-bootstrap"
        className="d-block text-light"
      >
        <span className="react-bootstrap-img" />
      </Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
      {/* <Navbar.Collapse
          className={classNames("justify-content-end","text-light")}
        > */}
      <Nav className="me-auto" variant="pills">
          <NavLink>Home</NavLink>
        {/* <Dropdown as={NavItem}>
          <Dropdown.Toggle as={NavLink}>Accounts</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Hello there!</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
        <Nav.Link>Deposit</Nav.Link>
        <Nav.Link>Withdrawal</Nav.Link>
        <Nav.Link>All Data</Nav.Link>
        <Nav.Link>ATM</Nav.Link>
        <Nav.Link>New Account</Nav.Link>
        {/* <Nav.Link>Log Out</Nav.Link> */}
      </Nav>

      {/* <Navbar.Collapse id="user"> */}
      <Nav className="d-flex">
        <Login />
      </Nav>
      {/* </Navbar.Collapse> */}

      {/* </Container> */}
      <span></span>
      {/* </Navbar.Collapse> */}
    </Navbar>
  );
}
