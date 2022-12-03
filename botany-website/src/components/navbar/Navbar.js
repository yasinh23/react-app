import React from 'react';
import './Navbar.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import 'bootstrap/dist/css/bootstrap.css';
import {LinkContainer} from 'react-router-bootstrap'

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            
            <LinkContainer to="/"><Navbar.Brand>Urban Greening</Navbar.Brand></LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to="/Blueprints"><Nav.Link >Plant Blueprints</Nav.Link></LinkContainer>
                    <LinkContainer to="/Contacts"><Nav.Link >Contact</Nav.Link></LinkContainer>
                    <LinkContainer to="/GardenPhotos"><Nav.Link >Gardens</Nav.Link></LinkContainer>
                    <NavDropdown title="About Us" id="basic-nav-dropdown"> 
                        <NavDropdown.Item href="#action/3.1">Team Member 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Team Member 2</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Team Member 3</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Team Member 4</NavDropdown.Item>
                    </NavDropdown>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
}

export default NavBar;