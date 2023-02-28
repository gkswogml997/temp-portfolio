import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    return (
    <Navbar variant="light" bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand as={Link} to="/">메인</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
                <Nav>
                <NavDropdown
                    id="nav-dropdown-dark-example"
                    title="게임"
                    //menuVariant="dark"
                >
                    <NavDropdown.Item as={Link} to="/game1">게임1</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/game2">게임2</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                    id="nav-dropdown-dark-example"
                    title="웹"
                    //menuVariant="dark"
                >
                    <NavDropdown.Item as={Link} to="/board">게시판</NavDropdown.Item>
                    <NavDropdown.Item href="http://localhost:3100">Popal</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/POPALsignup">Popal sign up</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                    id="nav-dropdown-dark-example"
                    title="부록"
                    //menuVariant="dark"
                >
                    <NavDropdown.Item href="https://github.com/gkswogml997">Github</NavDropdown.Item>
                    <NavDropdown.Item href="http://itch.io/">Itch.io</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/HTMLtag"> HTML 태그표 </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/HTMLcolor"> HTML 색상표 </NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default NavBar;