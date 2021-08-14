import React from 'react'

function Questions() {
    return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2>Frequently Asked Questions</h2>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h3>Can two betta fish be kept together in the same tank?</h3>
                </div>  
            </div>
            <div className="row">
                <div className="col-12">
                    <p>No they cannot. Betta fish are highly aggressive and will fight any male or female betta fish placed in the tank. </p>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h3>Is it true that betta fish can survive by eating the roots of plants?</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <p>No, this is a myth. Betta fish are insectivores: they need insect-based protein in their diet. The bulk of their diet should be a pellet formulated for betta fish. </p>
                </div>
            </div>
        </div>

    <div className="container">
            <div className="row row-content">
                <div className="col-12">
                    <h2>Send us your Betta Care Questions</h2>
                    <hr />
                </div>
                
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
            </div>
        </div>
    </div>   
        
    )
}

export default Questions
