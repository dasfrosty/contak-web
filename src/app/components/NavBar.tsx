import * as React from "react";
import { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Link, NavLink as RRNavLink, useRouteMatch } from "react-router-dom";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleNav = () => setIsOpen(!isOpen);

  let match = useRouteMatch();

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Contak</NavbarBrand>
        <NavbarToggler onClick={toggleNav} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to={`${match.url}/contacts`} activeClassName="active" tag={RRNavLink}>
                Contacts
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
