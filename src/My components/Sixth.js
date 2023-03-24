import React from 'react'

export default function Sixth() {
    return (

        <>
            <div className="container" >
                <div className=" text-center col-12 mt-5">
                    <div className="card-body my-5">
                        <h1 className="text-card-title mt-5" style={{fontWeight:"bold"}}>Contact Us</h1>
                        <p className="card-text-muted">Et harum quidem rerum
                         facilis est et expedita distinctio nam libero tempore cum soluta nobis eligendi cumque.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-start   ">
                    <div className=" col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                *Please enter a Name*
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className=" col-6">
                                <div className="text-align-left"> Name</div>
                                <div className="card">
                                    <div className="card-body">
                                        Your name
                                    </div>
                                </div>
                            </div>
                            <div className=" col-6 ">
                                <div className="text-align-left"> Email Address</div>
                                <div className="card">
                                    <div className="card-body">
                                        Your email
                                    </div>
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="text-align-left"> Message</div>
                                <div className="card mx-3">
                                    <div className="card-body">
                                    Your Message
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 row my-3 mx-1">
                            <button type="button" className="mmis abh-box-icon">Send Message <i class="fa-sharp fa-regular fa-paper-plane"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className=" text-muted col-lg-4 my-5">
                        <p className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail icon-xs icon me-1"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> :
                            <span>support@website.com</span>
                        </p>
                        <p className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-link icon-xs icon me-1"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> : <span>www.website.com</span>
                        </p>
                        <p className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-phone-call icon-xs icon me-1"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> : <span>(+001) 123 456
                                7890</span></p>
                        <p className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock icon-xs icon me-1"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> : <span>9:00 AM - 6:00
                                PM</span></p>
                        <p className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-map-pin icon-xs icon me-1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> : <span>1644 Deer Ridge
                                Drive Rochelle Park, NJ 07662</span></p>
                    </div>  
                </div>
            </div>
        </>
    )
}
