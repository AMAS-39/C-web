import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>C++ Learning Platform</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/tutorials">
            <Nav.Link>Tutorials</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/quizzes">
            <Nav.Link>Quizzes</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/code-editor">
            <Nav.Link>Code Editor</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/ai-assistant">
            <Nav.Link>AI Assistant</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
