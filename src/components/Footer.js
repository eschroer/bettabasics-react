import React from 'react'
import { NavItem } from 'reactstrap';
import {NavLink } from 'react-router-dom'

function Footer(props) {
    return (
    <>
    <footer className="site-footer">
        <div className="container">
            <div className="row">
                <div className="col-4 col-sm-2 offset-1">
                    <h5 className="text-white">Links</h5>
                    <ul className="list-unstyled">
                    <NavItem>
                        <NavLink className="nav-link" to="/home"><i className="fa fa-home fa-lg"></i> Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/aquarium"><i className="fa fa-life-bouy fa-lg"></i> Setting Up Your First Aquarium</NavLink>
                    </NavItem>
                    <NavItem >
                        <NavLink className="nav-link" to="/plants"><i className="fa fa-leaf fa-lg"></i> Plants and Tank Mates</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/faq"><i className="fa fa-question-circle fa-lg"></i> FAQ</NavLink>
                    </NavItem>
                    </ul>
                </div>
                <div className="col-6 col-sm-5 text-center">
                    <h5 className="text-white">Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i class="fa fa-instagram"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i class="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i class="fa fa-youtube"></i></a>
                    </div>
                    <div className="col-sm-4 text-center">
                        <h5 className="text-white">Contact Us</h5>
                        <a role="button" class="btn text-white btn-link" href="mailto:betta@bettabasics.co"><i class="fa fa-envelope-o"></i> betta@bettabasics.co </a>
                </div>
            </div>
        </div>        
    </footer>
</>
    )
}

export default Footer
