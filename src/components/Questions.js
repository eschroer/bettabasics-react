import React from 'react'

function Questions() {
    return (
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>Frequently Asked Questions</h2>
                    <hr/>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <h3>Can two betta fish be kept together in the same tank?</h3>
                </div>  
            </div>
            <div class="row">
                <div class="col-12">
                    <p>No they cannot. Betta fish are highly aggressive and will fight any male or female betta fish placed in the tank. </p>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <h3>Is it true that betta fish can survive by eating the roots of plants?</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <p>No, this is a myth. Betta fish are insectivores: they need insect-based protein in their diet. The bulk of their diet should be a pellet formulated for betta fish. </p>
                </div>
            </div>
        </div>

    <div class="container">
            <div class="row row-content">
                <div class="col-12">
                    <h2>Send us your Betta Care Questions</h2>
                    <hr />
                </div>
                
                <form class="ml-2">
                    <div class="row form-group">
                        <label for="firstName" class="col-md-2 col-form-label">First Name</label> 
                        <div class="col-md-10">
                            <input type="text" class="form-control" id="firstName" name="firstName" placeholder="First Name"/>
                        </div>
                    </div>
                    <div class="row form-group">    
                        <label for="lastName" class="col-md-2 col-form-label">Last Name</label>
                        <div class="col-md-10">
                            <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Last Name"/>
                        </div>
                    </div>
                
                    <div class="row form-group">
                        <label for="email" class="col-md-2 col-form-label">Email</label>
                        <div class="col-md-10"> 
                            <input type="email" class="form-control" id="email" name="email" placeholder="Email"/>
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col offset-md-2">    
                            <p>May we email you directly?</p>
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input" id="contactYes" name="contactRadios" value="yes"/> 
                                <label for="contactYes">Yes</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input" id="contactNo" name="contactRadios" value="no"/> 
                                <label for="contactNo">No</label>
                            </div>
                        </div>
                    </div>
                    <div class="row form-group">   
                        <label for="feedback" class="col-md-2 col-form-label">Your Question</label> 
                        <div class="col-md-10">
                            <textarea name="feedback" class="form-control" id="feedback" rows="8"></textarea>
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="offset-md-2 col-md-10">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>       
                </form>
            </div>
        </div>
    </div>   
        
    )
}

export default Questions
