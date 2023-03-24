import React from 'react'
import True from '../images/True.png';
export default function Third() {
    return (
        <div className="container" >
            <div className="mb-3 my-5">
                <div className="row g-5">
                    <div className="col-lg-6">
                        <div className="text-align-center dsc">
                            <h5 className="text-muted card-title mt-5"> CREATIVE FEATURES</h5>
                            <h2 className="card-text mt-3">We do the work you stay focused on your customers.</h2>
                            <p className="text-muted mt-5">Temporibus autem quibusdam et aut officiis debitis aut rerum a necessitatibus saepe eveniet ut et voluptates repudiandae sint molestiae non recusandae itaque..</p>
                            <p class="text-muted mb-2 mt-5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-server icon-xs me-1"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg> Donec pede justo
                                fringilla vel nec.</p>
                            <p class="text-muted mt-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-rss icon-xs me-1"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg> Cras ultricies mi eu turpis
                                hendrerit fringilla.</p>
                        </div>
                        <div class="btn-toolbar " role="toolbar" aria-label="Toolbar with button groups">
                            <button type="submit" className='read'>Read More</button>
                            <button type="submit" className='read-on'>Buy Now</button>
                        </div>
                    </div>
                    <div className="col-lg-6 iphone ">
                        <div className="back">
                            <img src={True} className="hero" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
