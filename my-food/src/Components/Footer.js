import React, { Component } from 'react'
import { FaHome, FaEnvelopeOpen, FaPhone, FaFax, FaFacebookF, FaInstagram, FaTwitter, FaGooglePlusG, FaLinkedin} from "react-icons/fa";


function Footer (props) {
  
        return(
            <React.Fragment>
    
            <div>
                <div className="page-footer font-small unique-color-dark">
                <div className="container text-center text-md-left mt-5">
                    <div className="row mt-3">

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Company name</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" /> 
                        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                        consectetur
                        adipisicing elit.</p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                        
                            <h6 className="text-uppercase font-weight-bold">Products</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                            <p>
                            <a href="#!">MDBootstrap</a>
                            </p>
                            <p>
                            <a href="#!">MDWordPress</a>
                            </p>
                            <p>
                            <a href="#!">BrandFlow</a>
                            </p>
                            <p>
                            <a href="#!">Bootstrap Angular</a>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                       
                        <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                        <p>
                        <a href="#!">Your Account</a>
                        </p>
                        <p>
                        <a href="#!">Become an Affiliate</a>
                        </p>
                        <p>
                        <a href="#!">Shipping Rates</a>
                        </p>
                        <p>
                        <a href="#!">Help</a>
                        </p>

                    </div>

                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                      
                        <h6 class="text-uppercase font-weight-bold">Contact</h6>
                        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"  />
                        <p>
                        < FaHome /> New York, NY 10012, US</p>
                        <p>
                        <FaEnvelopeOpen /> info@example.com</p>
                        <p>
                        <FaPhone />+ 01 234 567 88</p>
                        <p>
                        <FaFax />+ 01 234 567 89</p>

                    </div>

                    </div>

                </div>

                <div className="subfooter">
                <div class="container">


<div class="row py-4 d-flex align-items-center">

 
  <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
    <h6 class="mb-0">Get connected with us on social networks!</h6>
  </div>



  <div className="col-md-6 col-lg-7 text-center text-md-right">

    
    <a className="fb-ic m-2">
      <FaFacebookF />
    </a>
  
    <a className="tw-ic mr-2">
      < FaTwitter />
    </a>
  
    <a className="gplus-ic mr-2">
     < FaGooglePlusG />
    </a>
    
    <a className="li-ic mr-2">
    < FaLinkedin />
     
    </a>
 
   

  </div>


</div>


</div>
</div>
                </div>
                </div>

           
            </React.Fragment>

        )
        
    
}
export default Footer;