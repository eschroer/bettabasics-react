import React from 'react'

function Footer() {
    return (
        <div>
            <footer class="site-footer">
        <div class="container">
            <div class="row">
                <div class="col-4 col-sm-2 offset-1">
                    <h5 class="text-white">Links</h5>
                    <ul class="list-unstyled">
                        <li><a href="#gen-req">General Requirements</a></li>
                        <li><a href="#aquarium">Setting Up Your First Aquarium</a></li>
                        <li><a href="#plants">Plants and Tank Mates</a></li>
                        <li><a href="faq.html">FAQ</a></li>
                        <li><a role="button" data-toggle="modal" data-target="#questionModal">Ask a Betta Care Question</a></li>
                    </ul>
                </div>
                <div class="col-6 col-sm-5 text-center">
                    <h5 class="text-white">Social</h5>
                        <a class="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i class="fa fa-instagram"></i></a>
                        <a class="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i class="fa fa-facebook"></i></a>
                        <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter"></i></a>
                        <a class="btn btn-social-icon btn-google" href="http://youtube.com/"><i class="fa fa-youtube"></i></a>
                    </div>
                    <div class="col-sm-4 text-center">
                        <h5 class="text-white">Contact Us</h5>
                        <a role="button" class="btn text-white btn-link" href="mailto:betta@bettabasics.co"><i class="fa fa-envelope-o"></i> betta@bettabasics.co </a>
                </div>
            </div>
        </div>        
    </footer>
        </div>
    )
}

export default Footer
