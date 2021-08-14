import React from 'react'

function PlantCards() {
    return (
        <div className="container" id="plants">
        <div className="row">
            <div className="col">
                <h2 className="card-header text-center text-white">
                    Plants and Tank Mates
                </h2>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="card col-md-3">
                <img src="images/anubias-nana.jpg" className="card-img-top img-thumbnail" alt="Anubias nana"/>
                <div className="card-body">
                  <p className="card-text">Anubias nana is a slow-growing rhizome plant that can survive most mistakes that beginners can make.</p>
                </div>
              </div>
              <div className="card col-md-3">
                <img src="images/marimo.jpeg" className="card-img-top img-thumbnail" alt="Marimo moss ball"/>
                <div className="card-body">
                  <p className="card-text">These slow-growing balls of algae require very little maintenance. They can even be kept in tap water!</p>
                </div>
              </div>
              <div className="card col-md-3">
                <img src="images/java-fern.jpeg" className="card-img-top img-thumbnail" alt="Java fern"/>
                <div className="card-body">
                  <p className="card-text">Java fern requires low to moderate lighting and is an easy to care for mid to background plant for beginners.</p>
                </div>
              </div>
        </div>
        <div className="row justify-content-center">
            
              <div className="card col-md-3">
                <img src="images/tiger-nerite.jpeg" className="card-img-top img-thumbnail" alt="Tiger nerite snail"/>
                <div className="card-body">
                  <p className="card-text">Nerite snails make great tankmates for betta fish, as long as they are not harrassed by the betta. Nerite snails make a good cleaning crew. They also only reproduce in brackish water, so they will not overrun a freshwater tank.</p>
                </div>
              </div>
              <div className="card col-md-3">
                <img src="images/cherry-shrimp.jpeg" className="card-img-top mt-3 img-thumbnail" alt="Cherry Shrimp"/>
                <div className="card-body">
                  <p className="card-text">Shrimp, such as cherry or amano shrimp, are good tankmates for medium sized betta setups (around 10 gallons). Provided they have plenty of places to hide among plants and decor they should stay out of the betta's way. </p>
                </div>
              </div>
              <div className="card col-md-3">
                <img src="images/corycatfish.jpg" className="card-img-top img-thumbnail mt-4" alt="Albino cory catfish"/>
                <div className="card-body">
                  <p className="card-text">Corydoras catfish are friendly bottom feeders that make good tankmates for larger betta fish setups (20 gallons or more).</p>
                </div>
              </div>
        </div>
    </div>
    )
}

export default PlantCards
