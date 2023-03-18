import {
  Dropdown,
  Nav,
  Navbar,
  NavItem,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Login from "./Login";

export default function TopNav() {
  function TopNaLink({
    id,
    text,
    to,
    tooltip,
  }: {
    id: string;
    text: string;
    to: string;
    tooltip: string;
  }) {
    return (
      <OverlayTrigger
        overlay={<Tooltip id={`ToolTip-${id}`}>{tooltip}</Tooltip>}
        placement="bottom"
      >
        <Nav.Link as={NavLink} to={to} data-testid={`Nav-${id}`}>
          {text}
        </Nav.Link>
      </OverlayTrigger>
    );
  }

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
        <TopNaLink to="/" id="Home" text="Home" tooltip="Main Menu Page" />
        <TopNaLink
          to="/deposit"
          id="Deposit"
          text="Deposit"
          tooltip="Deposit Cash"
        />
        <TopNaLink
          to="/withdrawal"
          id="Withdrawal"
          text="Withdrawal"
          tooltip="Withdrawal Cash"
        />
        <TopNaLink
          to="/statement"
          id="Statement"
          text="All Data"
          tooltip="View Ledger"
        />
      </Nav>

      <Nav className="d-flex">
        <Login />
      </Nav>
    </Navbar>
  );
}
