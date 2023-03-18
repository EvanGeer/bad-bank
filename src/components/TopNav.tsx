import { Nav, Navbar, OverlayTrigger, Tooltip } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useFirestore } from "../firebase/useFirestore";
import Login from "./Login";

export default function TopNav() {
  const { user, setUser } = useFirestore();

  function TopNavLink({
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
        <TopNavLink to="/" id="Home" text="Home" tooltip="Main Menu Page" />
        {user ? (
          <>
            <TopNavLink
              to="/deposit"
              id="Deposit"
              text="Deposit"
              tooltip="Deposit Cash"
            />
            <TopNavLink
              to="/withdrawal"
              id="Withdrawal"
              text="Withdraw"
              tooltip="Withdrawal Cash"
            />
            <TopNavLink
              to="/statement"
              id="Statement"
              text="All Data"
              tooltip="View Ledger"
            />
          </>
        ) : null}
      </Nav>

      <Nav className="d-flex">
        <Login />
      </Nav>
    </Navbar>
  );
}
