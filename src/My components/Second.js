import React from 'react'
import Features from '../images/features.png';
function Second() {
    return (
        <>
            <div className="container-fluid back">
                <div className="container" >
                    <div className=" text-center col-12 mt-5">
                        <div className="card-body my-5">
                            <h1 className="text-muted card-title mt-5" style={{ fontWeight: "bold" }}  >Awesome Features</h1>
                            <p className="card-text-muted">Et harum quidem rerum facilis est et expedita distinctio nam libero tempore cum soluta nobis eligendi cumque.</p>
                        </div>
                    </div>
                    <div className="mb-3 my-5">
                        <div className="row g-5">
                            <div className="col-lg-6 ">
                                <img src={Features} className="hero" alt="..." />
                            </div>
                            <div className="col-lg-6">
                                <div className="card-body dsc">
                                    <h5 className="text-muted card-title"> CREATIVE FEATURES</h5>
                                    <h2 className="card-text mt-3">Build community & conversion with our suite of social tool</h2>
                                    <p className="text-muted mt-5">Temporibus autem quibusdam et aut officiis debitis aut rerum a necessitatibus saepe eveniet ut et voluptates repudiandae sint molestiae non recusandae itaque..</p>
                                    <p class="text-muted mt-5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layout icon-xs me-1"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg> Donec pede justo
                                        fringilla vel nec.</p>
                                    <p class="text-muted my-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-life-buoy icon-xs me-1"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line></svg> Cras ultricies mi eu
                                        turpis hendrerit fringilla.</p>
                                </div>
                                <div class="btn-toolbar " role="toolbar" aria-label="Toolbar with button groups">
                                    <button type="submit" className='read'>Read More</button>
                                    <button type="submit" className='read-on'>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Second