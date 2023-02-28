import classNames from "classnames";
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  NavItem,
} from "react-bootstrap";
import { Bank, CreditCard, PiggyBank } from "react-bootstrap-icons";
import SidebarMenu from "react-bootstrap-sidebar-menu";
import Login from "./Login";
// import Login from "Login";

export function SidebarNav() {
  return (
    <>
      <SidebarMenu
        className="text-muted"
        exclusiveExpand={false}
        collapseOnSelect={false}
        // onSelect={onSelect}
        variant="dark"
        bg="dark"
        rtl={false}
        expand={false}
        defaultExpanded={false}
        // hide="false"
      >
        <SidebarMenu.Collapse>
          <SidebarMenu.Header>
            <SidebarMenu.Brand
              title="React-Bootstrap"
              href="https://github.com/react-bootstrap/react-bootstrap"
            >
              {/* <span className="react-bootstrap-img" /> */}
              Accounts
            </SidebarMenu.Brand>
            <SidebarMenu.Toggle />
          </SidebarMenu.Header>
          <SidebarMenu.Body>
            <SidebarMenu.Nav>
              <SidebarMenu.Nav.Link eventKey="setup">
                <SidebarMenu.Nav.Icon>
                    <PiggyBank/>
                </SidebarMenu.Nav.Icon>
                <SidebarMenu.Nav.Title>Savings</SidebarMenu.Nav.Title>
              </SidebarMenu.Nav.Link>
              <SidebarMenu.Nav.Link eventKey="usage">
                <SidebarMenu.Nav.Icon><CreditCard/></SidebarMenu.Nav.Icon>
                <SidebarMenu.Nav.Title>Credit Card</SidebarMenu.Nav.Title>
              </SidebarMenu.Nav.Link>
              <SidebarMenu.Nav.Link eventKey="overview">
                <SidebarMenu.Nav.Icon><Bank/></SidebarMenu.Nav.Icon>
                <SidebarMenu.Nav.Title>Checking</SidebarMenu.Nav.Title>
              </SidebarMenu.Nav.Link>
            </SidebarMenu.Nav>
          </SidebarMenu.Body>
          <SidebarMenu.Footer></SidebarMenu.Footer>
        </SidebarMenu.Collapse>
      </SidebarMenu>
    </>
  );
}
