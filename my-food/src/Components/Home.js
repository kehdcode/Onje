import React, { Component } from "react";
import { FaHome, FaEnvelopeOpen, FaPhone, FaFax, FaFacebookF, FaInstagram, FaTwitter, FaGooglePlusG, FaLinkedin} from "react-icons/fa";
import AbsoluteWrapper from './AbsoluteWrapper'

import './Home.css'



class Home extends Component {

    render(){
        return(
            <React.Fragment>
                <AbsoluteWrapper>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 main-body">
                        <h3 className="text-center mt-4">Fresh, Delicious & Healthy Meal Always</h3>
                        <p className="text-center">Don't just health, You are what You Eat, Eat Right and Stay healthy</p>
                        <button type="button" className="btn btn-primary btn-lg center">Check Out Our Menu <span className="arrow">&#x2192;</span> </button>
                    </div>
                    
                </div>
            </div>
            <div className="container ">
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-center mt-4">Why Choose Us</h3>
                        <hr className="under" />
                    </div>
                </div>
            </div>
            <div className="container ">
                <div className="row">
                    <div className="col-6 reason one">
                        <p className="">Why Choose Us</p>
                        <p>This is just a demo</p>
                    </div>
                    <div className="col-6 reason two">
                        <p className="">Why Choose Us</p>
                        <p>This is just a demo</p>
                    </div>
                    <div className="col-6  reason">
                        <p className="">Your Health Is Our Priority</p>
                        <p>This is just a demo dolor in hendrerit in vulputate velit esse molestie consequat
                        dolor in hendrerit in vulputate velit esse molestie consequat
                        </p>
                    </div> 
                    <div className="col-6 reason">
                        <p className="">Track Your Order</p>
                        <p>This is just a demo dolor in hendrerit in vulputate velit esse molestie consequat
                        dolor in hendrerit in vulputate velit esse molestie consequat
                        </p>
                    </div> 
                </div>
            </div>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-3">
                        <h1>1000+</h1>
                        <p>That's the number of our happy, health customers cross the state</p>
                    </div>
                    <div className="col-6">
                        <h5> Words from ou MD </h5>
                        <p>You are what you EAT, At Onnje, We care about your health and well being
                            That's why we prepare our meals with outmost care and hygiene also taking 
                            into consideration, your health.
                        </p>
                    </div>
                    <div className="col-3">
                        <img src="../Food 6.jpg" className="img-thumbnail" />
                    </div>
                </div>

            </div>
            </AbsoluteWrapper>
            </React.Fragment>

        )
    }

}

export default Home