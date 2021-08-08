import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function AccordionComponent() {
    return (
        <>
        <div className="container">
         <div className="row">
            <div className="card-header col-12 text-center">     
               <h2 className="text-white" id="gen-req">General Requirements</h2>
            </div>
           </div> 
        </div>
        <img src="images/betta-relax.jpg" className="img-thumbnail mx-auto d-block" id="betta-2" alt="A relaxed dragonscale betta"/>
        <Accordion className="accordion">
                <Accordion.Header>
                        Tank Size
                </Accordion.Header>
                <Accordion.Body>
                    <div className="col-md-6">
                        <p>Betta fish require a tank of at least 2.5 gallons at the very minimum. A tank size of at least 5 gallons is preferred, and the bigger the better!</p>
                    </div>
                </Accordion.Body>
           </Accordion> 
        </>
    )
}

export default AccordionComponent
