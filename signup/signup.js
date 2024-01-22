import React from "react";
import './signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faApple } from "@fortawesome/free-brands-svg-icons";

function Signup() {
    return (
        <>
            <div className="container-fluid mt-5 pt-5">
                <div className="row  text-center">
                    <div className="col-lg-3"> </div>
                    <div className="col-lg-5 ms-3">
                        <h6 className="mb-3 fw-bold">Sign up and start learning</h6>
                    </div>
                    <div className="col-lg-3"> </div>
                </div>
                <div className="row text-center mb-2">
                    <div className="col-lg-4"> </div>
                    <div className="col-lg-4">
                        <input className="p-3 col-lg-8 signup border border-dark" type="text" placeholder="Full name" />
                    </div>
                    <div className="col-lg-4"> </div>
                </div>
                <div className="row text-center mb-2">
                    <div className="col-lg-4"> </div>
                    <div className="col-lg-4">
                        <input className="p-3 col-lg-8 signup border border-dark" type="text" placeholder=" Email" /> 
                    </div>
                    <div className="col-lg-4"> </div>
                </div>
                <div className="row text-center mb-2">
                    <div className="col-lg-4"> </div>
                    <div className="col-lg-4">
                        <input className="p-3 col-lg-8 signup border border-dark" type="text" placeholder="Password" />
                    </div>
                    <div className="col-lg-4"> </div>
                </div>
                <div className="row text-center mb-2">
                    <div className="col-lg-4"> </div>
                    <div className="col-lg-4">
                    <input className="form-check-input border border-dark me-2" type="checkbox" id="offer" name="odder" value="offer" />
                                    <label for="offer">Send me special offers, personalized <br/>recommendations, and learning tips </label>
                    </div>
                    <div className="col-lg-4"> </div>
                </div>
                <div className="row text-center mb-2">
                    <div className="col-lg-4"> </div>
                    <div className="col-lg-4">
                    <input className="signup-btn text-center p-2 col-lg-8 border-0" type="button" id="signup" name="signup" value="Sign up" />
                    </div>
                    <div className="col-lg-4"> </div>
                </div>
                <div className="row text-center mb-2">
                    <div className="col-lg-4"> </div>
                    <div className="col-lg-4">
                    <span className="fontsize">By signing up, you agree to our <a className="text-dark" href="#">Terms of Use</a> and <a className="text-dark" href="#">Privacy Policy.</a></span>
                    </div>
                    <div className="col-lg-4"> </div>
                </div>
                <div className="row text-center mb-2">
                    <div className="col-lg-4"> </div>
                    <div className="col-lg-4">
                    <hr/>
                    <p>Already have an account?<a href="" className="Signup"><span className="clr fw-bold p-1">Log in</span></a></p>
                    </div>
                    <div className="col-lg-4"> </div>
                </div>
            </div>
        </>
    );
}
export default Signup;
