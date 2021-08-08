import React from 'react'

function PlantCards() {
    return (
        <div class="container" id="plants">
        <div class="row">
            <div class="col">
                <h2 class="card-header text-center text-white">
                    Plants and Tank Mates
                </h2>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="card col-md-3">
                <img src="images/anubias-nana.jpg" class="card-img-top img-thumbnail" alt="Anubias nana"/>
                <div class="card-body">
                  <p class="card-text">Anubias nana is a slow-growing rhizome plant that can survive most mistakes that beginners can make.</p>
                </div>
              </div>
              <div class="card col-md-3">
                <img src="images/marimo.jpeg" class="card-img-top img-thumbnail" alt="Marimo moss ball"/>
                <div class="card-body">
                  <p class="card-text">These slow-growing balls of algae require very little maintenance. They can even be kept in tap water!</p>
                </div>
              </div>
              <div class="card col-md-3">
                <img src="images/java-fern.jpeg" class="card-img-top img-thumbnail" alt="Java fern"/>
                <div class="card-body">
                  <p class="card-text">Java fern requires low to moderate lighting and is an easy to care for mid to background plant for beginners.</p>
                </div>
              </div>
        </div>
        <div class="row justify-content-center">
            
              <div class="card col-md-3">
                <img src="images/tiger-nerite.jpeg" class="card-img-top img-thumbnail" alt="Tiger nerite snail"/>
                <div class="card-body">
                  <p class="card-text">Nerite snails make great tankmates for betta fish, as long as they are not harrassed by the betta. Nerite snails make a good cleaning crew. They also only reproduce in brackish water, so they will not overrun a freshwater tank.</p>
                </div>
              </div>
              <div class="card col-md-3">
                <img src="images/cherry-shrimp.jpeg" class="card-img-top mt-3 img-thumbnail" alt="Cherry Shrimp"/>
                <div class="card-body">
                  <p class="card-text">Shrimp, such as cherry or amano shrimp, are good tankmates for medium sized betta setups (around 10 gallons). Provided they have plenty of places to hide among plants and decor they should stay out of the betta's way. </p>
                </div>
              </div>
              <div class="card col-md-3">
                <img src="images/corycatfish.jpg" class="card-img-top img-thumbnail mt-4" alt="Albino cory catfish"/>
                <div class="card-body">
                  <p class="card-text">Corydoras catfish are friendly bottom feeders that make good tankmates for larger betta fish setups (20 gallons or more).</p>
                </div>
              </div>
        </div>
    </div>
    )
}

export default PlantCards
