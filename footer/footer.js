import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <div className='FooterParent container-fluid bg-dark text-light'>
            {/* Footer Start */}
            <div className='container-fluid me-2'>
                {/* <div className='row d-flex p-md-5'>
                    <div className='col-lg-10'>
                        <h2>Teach the world online</h2>
                        <p>Create an online video course, reach students across the globe, and earn money</p>
                    </div>

                    <div className='col-lg-2 text-center mt-md-4 fs-md-2'>
                        <button type="button" className="FooterTopButton btn btn-outline-light text-light">
                            <h5 className='ButtonTitle p-1 mt-1'>Teach on Udemy</h5>
                        </button>
                    </div>
                </div> */}
                <hr/>
            </div>

            {/* Footer Center */}
            <div className='FooterCenter row p-3 ms-3'>
                <div className='col-lg-7'>
                    <h3>Top companies choose <span className="text-primary">Udemy Business</span> to build in-demand career skills.</h3>
                </div>

                <div className='col-lg-5'>
                <img src='https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg' className='me-3 img-fluid' alt='logo'></img>
                         <img src='https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg' className='me-3 img-fluid' alt='logo'></img>
                         <img src='https://s.udemycdn.com/partner-logos/v4/box-light.svg' className='me-3 img-fluid' alt='logo'></img>
                         <img src='https://s.udemycdn.com/partner-logos/v4/netapp-light.svg' className='me-3 img-fluid' alt='logo'></img>
                         <img src='https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg' className='me-3 img-fluid' alt='logo'></img>
                </div>
                <hr/>
            </div>

            {/* Footer End */}
            <div className='FooterEnd container-fluid d-flex'>
                <div className='col-lg-2 p-3'>
                <p><a href='' className='footerA2 text-light'>Udemy Business</a></p>
                            <p><a href='' className='footerA1 text-light'>Teach on Udemy</a></p>
                            <p><a href='' className='footerA3 text-light'>Get the app</a></p>
                            <p><a href='' className='footerA4 text-light'>About us</a></p>
                            <p><a href='' className='footerA5 text-light'>Contact us</a></p> 
                         </div>

                         <div className='col-lg-2 p-3'> 
                            <p><a href='' className='footerA6 text-light'>Careers</a></p>
                            <p><a href='' className='footerA7 text-light'>Blog</a></p>
                            <p><a href='' className='footerA8 text-light'>Help and Support</a></p>
                            <p><a href='' className='footerA9 text-light'>Affilate</a></p>
                            <p><a href='' className='footerA10 text-light'>Investors</a></p> 
                         </div>
                <div className='col-lg-2 p-3'>
                <p><a href='' className='footerA11 text-light'>Terms</a></p>
                            <p><a href='' className='footerA12 text-light'>Privacy policy</a></p>
                            <p><a href='' className='footerA13 text-light'>Cookies settings</a></p>
                            <p><a href='' className='footerA14 text-light'>Sitemap</a></p>
                         <p><a href='' className='footerA15 text-light'>Accessibility statement</a></p>
                </div>

                <div className='FooterButton2 container-fluid col-lg-2 text-center mt-4 fs-md-2'>
                <button type="button" class="FooterTopButton btn btn-outline-light text-light"><FontAwesomeIcon icon={faGlobe} style={{color: "#ffffff",}} /><h5 className='ButtonTitle fs-6 ms-2 p-1'>English</h5></button>
                </div>
            </div>

            {/* Footer BottomLast */}
            <div className='container-fluid'>
                <div className='col-lg-2 p-3 ms-3'>
                    <a href=''><img src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg' className='FooterbottomImg'></img></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
