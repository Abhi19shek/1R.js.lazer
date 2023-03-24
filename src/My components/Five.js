import React from 'react'
import Ione from '../images/Ione.jpg';
import Itwo from '../images/Itwo.jpg';
import Ithree from '../images/Ithree.jpg';
function Five() {
    return (
        <>
            <div className="container" >
                <div className=" text-center col-12 mt-5">
                    <div className="card-body my-5">
                        <h1 className="text-card-title mt-5" style={{ fontWeight: "bold" }}>Latest News</h1>
                        <p className="card-text-muted">Et harum quidem rerum facilis est et expedita distinctio nam libero tempore cum soluta nobis eligendi cumque.</p>
                    </div>
                </div>
                <div class="row mx-5">
                    <div class="col-lg-4">
                        <img src={Ione} className="img-fluid-sr" alt="..." />
                        <div class="card-body"><ul class="list-inline text-muted text-uppercase font-size-15 font-weight-medium mt-3 mb-2">
                            <li class="list-inline-item me-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar icon-size-15 icon me-1"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> April 10 2020</li>
                            <li class="list-inline-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user icon-size-15 icon me-1"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                Admin</li>
                        </ul>
                            <h5 class="card-title" style={{ fontWeight: "bold" }}>Best Traveling Place</h5>
                            <p class="card-text">Integer ante arcu accumsan a consectetuer eget posuere mauris praesent adipiscing phasellus ullamcorper ipsum rutrum punc.</p>
                            <a href="#" className='jyant'>Learn More <span class="ms-2 right-icon">→</span></a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <img src={Itwo} className="img-fluid-sr" alt="..." />
                        <div class="card-body"><ul class="list-inline text-muted text-uppercase font-size-15 font-weight-medium mt-3 mb-2">
                            <li class="list-inline-item me-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar icon-size-15 icon me-1"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> April 10 2020</li>
                            <li class="list-inline-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user icon-size-15 icon me-1"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                Admin</li>
                        </ul>
                            <h5 class="card-title" style={{ fontWeight: "bold" }}>Private Meeting Room</h5>
                            <p class="card-text">Integer ante arcu accumsan a consectetuer eget posuere mauris praesent adipiscing phasellus ullamcorper ipsum rutrum punc.</p>
                            <a href="#" className='jyant'>Learn More <span class="ms-2 right-icon">→</span></a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <img src={Ithree} className="img-fluid-sr" alt="..." />
                        <div class="card-body">
                            <ul class="list-inline text-muted text-uppercase font-size-15 font-weight-medium mt-3 mb-2">
                                <li class="list-inline-item me-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar icon-size-15 icon me-1"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> April 10 2020</li>
                                <li class="list-inline-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user icon-size-15 icon me-1"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                    Admin</li>
                            </ul>
                            <h5 class="card-title" style={{ fontWeight: "bold" }}>The Best Business Ideas</h5>
                            <p class="card-text">Integer ante arcu accumsan a consectetuer eget posuere mauris praesent adipiscing phasellus ullamcorper ipsum rutrum punc.</p>
                            <a href="#" className='jyant'>Learn More <span class="ms-2  right-icon">→</span></a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Five