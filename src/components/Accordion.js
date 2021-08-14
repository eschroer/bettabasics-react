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
                    <div className="col">
                        <p>Betta fish require a tank of at least 2.5 gallons at the very minimum. A tank size of at least 5 gallons is preferred, and the bigger the better!</p>
                    </div>
                </Accordion.Body>
                <Accordion.Header>
                        Filter and Heater
                </Accordion.Header>
                <Accordion.Body>
                    <div className="col">
                        <p>Betta fish tanks require an appropriately sized filter and heater. The heater keeps the water at a consistent temperature and the filter harbors beneficial bacteria that allows the aquarium to cycle.</p>
                    </div>
                </Accordion.Body>
                <Accordion.Header>
                        Temperature
                </Accordion.Header>
                <Accordion.Body>
                    <div className="col">
                        <p>Water temperature matters! Betta fish should be kept at temperatures between 77-82 degrees.</p>
                    </div>
                </Accordion.Body>
                <Accordion.Header>
                Water Conditioner
                </Accordion.Header>
                <Accordion.Body>
                    <div className="col">
                        <p>Use a water conditioner to dechlorinate your tap water or use bottled spring water.</p>
                    </div>
                </Accordion.Body>
                <Accordion.Header>
                Feeding
                </Accordion.Header>
                <Accordion.Body>
                    <div className="col">
                        <p>Feed your betta 5-6 pellets of betta-specific food every day.</p>
                    </div>
                </Accordion.Body>
           </Accordion> 
        </>
    )
}

export default AccordionComponent
