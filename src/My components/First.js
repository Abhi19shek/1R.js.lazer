import React from 'react'
import hero from '../images/hero.png';
export default function first() {
    return (
        <>
            <div className="container-fluid back ">
                <div className="container" >
                    <div class="mb-3">
                        <div class="row g-5">
                            <div class="col-lg-6">
                                <div class="card-body cds">
                                    <h1 class="card-title" style={{fontSize:"45px"}}>Creative Landing Page</h1>
                                    <p class="card-text text-muted my-5">A creative & modern landing page with Lezir template & We love make things amazing.</p>
                                    <p class="card-text mt-5"><span class="font-size-20 me-2">🥳️</span>Nemo enim ipsam voluptatem quia voluptas sit aspernatur that is fugit.</p>
                                    <div className='form_wrap'>
                                        <div className='form_inner_wrap'>
                                        <input type="text" style={{ border: "none", backgroundColor: "#f0f2fa" }} placeholder="Enter  email..." />
                                        <button type="submit" className="abh-box-icon" style={{ backgroundColor: "#6610f2", borderRadius: 3 }}>Subscribe</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <img src={hero} className="hero" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </>
    )
}
