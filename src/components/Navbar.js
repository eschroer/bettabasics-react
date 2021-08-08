import React from 'react'
import { Jumbotron } from 'reactstrap'


function Navbar() {
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
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#bettaNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="bettaNavbar">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item active"><a className="nav-link" href="#"><i className="fa fa-home fa-lg"></i> Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#aquarium"><i className="fa fa-life-bouy fa-lg"></i> Setting Up Your First Aquarium</a></li>
                            <li className="nav-item"><a className="nav-link" href="#plants"><i className="fa fa-leaf fa-lg"></i> Plants and Tank Mates</a></li>
                            <li className="nav-item"><a className="nav-link" href="faq.html"><i className="fa fa-question-circle fa-lg"></i> FAQ</a></li>
                            <li className="nav-item"><a className="nav-link" role="button" data-toggle="modal" data-target="#questionModal"><i className="fa fa-info fa-lg"></i> Ask a Betta Care Question</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </Jumbotron>  
    </>
    );
}

export default Navbar
