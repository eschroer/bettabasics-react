import React from 'react'

function Instructions() {
    return (
        <div>
            <div className="container mt-5">
        <div className="row">
            <div className="col-md-6">
            <h4>Tank Placement</h4>
                <p>Make sure to place your tank on a stable surface away from direct sunlight. This will prevent unwanted algae and temperature fluctuations. Make sure that you have a heater, filter, thermometer and well-fitting tank lid or hood for your aquarium. Betta fish tend to jump out of tanks without lids!  </p>
            </div>
            <div className="col-md-6">
                <h4>Tank decoration</h4>
                    <p>This is where you can get creative! Use sand or gravel as substrate (avoid large stones as waste can get trapped underneath) and integrate live or silk plants.</p>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
            <h4>Tank cycling</h4>
            <blockquote>    
            <p>To start your cycle, add about a drop of ammonia per gallon of aquarium water. Your ammonia test should now show visible levels of this compound; keep testing a few times a week. Once the ammonia levels have dropped back to zero, dose again and continue testing. If all goes well, nitrites should start popping up soon as well: a sign things are heading in the right direction. Keep dosing whenever needed until both your ammonia and nitrites drop down to zero and you’re getting a visible nitrate reading. Congrats, you’ve got a cycled tank! Remember to keep adding a little bit of ammonia now and then to keep your beneficial bacteria alive until you’re ready to introduce your Betta. Do a large water change before the introduction to get the nitrates down to an acceptable level (ideally &lt; 10).</p>
            <footer className="blockquote-footer">Aquariadise.com</footer>
        </blockquote>    
        </div>
            <div className="col-md-6">
                <h4>Tank maintenance</h4>
                    <p>Perform water changes every week, around 10-25% of the tank's total volume. Siphon the gravel in order to remove any waste trapped underneath. Remember when replacing the water to use either a water conditioner or spring water and be sure that the temperature of the water you are adding back to the tank matches (or is very close to) the temperature of the water inside the tank. </p>
            </div>
        </div>
    </div>
            
        </div>
    )
}

export default Instructions
