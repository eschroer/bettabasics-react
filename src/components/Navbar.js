import React, {useState} from 'react'
import { Jumbotron, Button, NavbarToggler, Nav, NavItem, Collapse, Modal, ModalHeader, ModalBody } from 'reactstrap'
import {NavLink} from 'react-router-dom'


function Navbar() {
const [isOpen, setIsOpen] = useState(false);
const [modal, setModal] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleModal = () => setModal(!modal);

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
                            <NavItem><Button onClick={toggleModal} className="nav-link"><i className="fa fa-info fa-lg"></i> Ask a Betta Care Question</Button></NavItem>
                        </ul>
                        </Nav>
                    </Collapse>
                
            </nav>
        </div>
        
    </Jumbotron>  
    <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Ask a Betta Care Question</ModalHeader>
        <ModalBody>
        <form class="ml-2">
                    <div className="row form-group">
                        <label htmlFor="firstName" className="col-md-2 col-form-label">First Name</label> 
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="firstName" name="firstName" placeholder="First Name"/>
                        </div>
                    </div>
                    <div className="row form-group">    
                        <label htmlFor="lastName" className="col-md-2 col-form-label">Last Name</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Last Name"/>
                        </div>
                    </div>
                
                    <div className="row form-group">
                        <label for="email" className="col-md-2 col-form-label">Email</label>
                        <div className="col-md-10"> 
                            <input type="email" className="form-control" id="email" name="email" placeholder="Email"/>
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col offset-md-2">    
                            <p>May we email you directly?</p>
                            <div className="form-check form-check-inline">
                                <input type="radio" className="form-check-input" id="contactYes" name="contactRadios" value="yes"/> 
                                <label for="contactYes">Yes</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input type="radio" className="form-check-input" id="contactNo" name="contactRadios" value="no"/> 
                                <label for="contactNo">No</label>
                            </div>
                        </div>
                    </div>
                    <div className="row form-group">   
                        <label htmlFor="feedback" className="col-md-2 col-form-label">Your Question</label> 
                        <div className="col-md-10">
                            <textarea name="feedback" className="form-control" id="feedback" rows="8"></textarea>
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="offset-md-2 col-md-10">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>       
                </form>
        </ModalBody>
     </Modal>   
    </>
    );
}

export default Navbar
