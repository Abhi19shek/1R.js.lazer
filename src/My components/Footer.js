import React from 'react'
import light from '../images/light.png';
function Footer() {
    return (
        <>
            <div className="container-fluid  foot ">
                <div className="container  ">
                    <div className="row justify-content-start  ">
                        <div className="row col-lg-5 col-sm-12 my-5">
                            <img src={light} className="footlogo" alt="..." />
                            <p className="text-muted my-4">Cras ultricies mi eu turpis sit hendrerit fringilla vestibulum ante ipsum primis in faucibus ultrices posuere cubilia.</p>
                            <ul className="footer-icon" >
                                <li><a href="#" className="footer-link"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                </a></li>
                                <li><a href="#" className="footer-link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                                </a></li>
                                <li><a href="#" className="footer-link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                </a></li>
                                <li><a href="#" className="footer-link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </a></li>
                            </ul>
                        </div>
                        <div className=" row col-lg-1 col-sm-12"></div>
                        <div className=" row col-lg-6 col-sm-12  my-5">
                            <div className=" col-2 mx-3">
                                <h6 className="text">ABOUT US</h6>
                                <ul className="list-unstyled footer-sub-menu">
                                    <li><a href="#" className="footer-link">Works</a></li>
                                    <li><a href="#" className="footer-link">Strategy</a></li>
                                    <li><a href="#" className="footer-link">Releases</a></li>
                                    <li><a href="#" className="footer-link">Press</a></li>
                                    <li><a href="#" className="footer-link">Mission</a></li>
                                </ul>
                            </div>
                            <div className="col-2 mx-4">
                                <h6 className="text">CUSTOMERS</h6>
                                <ul className="list-unstyled footer-sub-menu">
                                    <li><a href="#" className="footer-link">Tranding</a></li>
                                    <li><a href="#" className="footer-link">Popular</a></li>
                                    <li><a href="#" className="footer-link">Customers</a></li>
                                    <li><a href="#" className="footer-link">Features</a></li>

                                </ul>
                            </div>
                            <div className="col-2 mx-4">
                                <h6 className="text">SUPPORT</h6>  <ul className="list-unstyled footer-sub-menu">
                                    <li><a href="#" className="footer-link">Developers</a></li>
                                    <li><a href="#" className="footer-link">Support</a></li>
                                    <li><a href="#" className="footer-link">Customer Service</a></li>
                                    <li><a href="#" className="footer-link">Get Started</a></li>
                                    <li><a href="#" className="footer-link">Guide</a></li>
                                </ul>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid lst">
                <p className="text-muted"> 2023 © Lezir. Design By Themesbrand</p>
            </div>
        </>
    )
}

export default Footer