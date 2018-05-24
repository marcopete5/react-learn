import React, {Component} from 'react';
import { Navbar,Nav,NavItem,NavDropdown,MenuItem, } from 'react-bootstrap';

class MyNav extends Component {
  render(){
    return(
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="">Vacations</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="">{this.props.title}</NavItem>
            <NavItem eventKey={2} href="">Progressions</NavItem>
            <NavDropdown eventKey={3} title="Programs" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Manna</MenuItem>
              <MenuItem eventKey={3.2}>Straddle Planche</MenuItem>
              <MenuItem eventKey={3.3}>Rope Climb</MenuItem>
              <MenuItem eventKey={3.4}>Side Lever</MenuItem>
              <MenuItem eventKey={3.5}>Single Leg Squat</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.5}>Handstand One</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="">About</NavItem>
            <NavItem eventKey={2} href="">Your Progress</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default MyNav;
