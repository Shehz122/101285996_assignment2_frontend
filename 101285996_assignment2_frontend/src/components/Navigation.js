import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navigation.css';

const  NavigationBar =()=> {
    
 
        return (
        
               <Navbar collapseOnSelect fixed='top' id="navbg">
            <Container>
            <Navbar.Brand> Employee Management App</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className="navbar-nav mx-auto">
                        <Nav.Link href='/'id="navDeco">Home</Nav.Link>
                        <Nav.Link href='/addEmployee' id="navDeco">Add Employee</Nav.Link>
                        <Nav.Link href='/employees' id="navDeco">Employee List</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>

// <nav class="navbar navbar-inverse">
// <div class="container-fluid">
//   <div class="navbar-header">
//     <a class="navbar-brand" href="#">Employee Management</a>
//   </div>
//   <ul class="nav navbar-nav">
//     <li class="active"><a href="#">Home</a></li>
//     <li><a href="/">Home</a></li>
//     <li><a href="/">Add Employees</a></li>
//     <li><a href="/">Employee List</a></li>
//   </ul>
// </div>
// </nav>
        )
    
}

export default NavigationBar;