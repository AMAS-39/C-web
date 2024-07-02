import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Nav defaultActiveKey="/home" className="flex-column">
        <LinkContainer to="/tutorials/home">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/tutorials/intro">
          <Nav.Link>Introduction</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/tutorials/syntax">
          <Nav.Link>Syntax</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/tutorials/comments">
          <Nav.Link>Comments</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/tutorials/variables">
          <Nav.Link>Variables</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/tutorials/data-types">
          <Nav.Link>Data Types</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/tutorials/user-input">
          <Nav.Link>User Input</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/tutorials/conditions">
          <Nav.Link>Conditions</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/tutorials/switch-case">
          <Nav.Link>Switch Case</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/tutorials/loops">
          <Nav.Link>Loops</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/tutorials/break-continue">
          <Nav.Link>Break/Continue</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/tutorials/arrays">
          <Nav.Link>Arrays</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/tutorials/structures">
          <Nav.Link>Structures</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/tutorials/references">
          <Nav.Link>References</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/tutorials/pointers">
          <Nav.Link>Pointers</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/tutorials/functions">
          <Nav.Link>Functions</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/tutorials/oop">
          <Nav.Link>OOP</Nav.Link>
        </LinkContainer>
      </Nav>
    </div>
  );
};

export default Sidebar;
