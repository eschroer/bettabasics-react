import React, {useState} from 'react'
import { Jumbotron, Button, NavbarToggler, Nav, NavItem, Collapse } from 'reactstrap'
import {NavLink} from 'react-router-dom'


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    return (
        <>
        <Jumbotron className="jumbotron-fluid bg-info">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-3 col-md-6 text-white">
                    <img src="images/betta_flare.jpg" className="betta-1" alt="Betta fish flaring"/>
                        <h1>Betta Basics</h1>
                    </div>
                </div>
            <nav className="navbar navbar-expand-md navbar-dark py-3">
                
                <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav navbar>
                        <ul className="navbar-nav mx-auto">
                            <NavItem>
                                <NavLink className="nav-link" to="/home"><i className="fa fa-home fa-lg"></i> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aquarium"><i className="fa fa-life-bouy fa-lg"></i> Setting Up Your First Aquarium</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink className="nav-link" to="/plants"><i className="fa fa-leaf fa-lg"></i> Plants and Tank Mates</NavLink>
                            </NavItem>
                            <NavItem><NavLink className="nav-link" to="/faq"><i className="fa fa-question-circle fa-lg"></i> FAQ</NavLink></NavItem>
                            <NavItem><Button className="nav-link"><i className="fa fa-info fa-lg"></i> Ask a Betta Care Question</Button></NavItem>
                        </ul>
                        </Nav>
                    </Collapse>
                
            </nav>
        </div>
        
    </Jumbotron>  
    </>
    );
}

export default Navbar
