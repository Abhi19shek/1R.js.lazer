import React from 'react'
import Bottom from '../images/Bottom.png';
function Forth() {
    return (
        <>

            <div className="container-fluid bg-light zero"  >
                <div className="container " >
                    <div className=" text-center col-12 mt-5">
                        <div className="card-body ">
                            <h1 className="text-card-title mt-5" style={{fontWeight:"bold"}}>Choose Your Plan</h1>
                            <p className="card-text-muted">Et harum quidem rerum facilis est et expedita distinctio nam libero tempore cum soluta nobis eligendi cumque.</p>
                        </div>
                    </div>
                    <div className="row my-5 mx-5">
    
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <div className=" card-body icon-size">
                                        <i className="fa-solid fa-user-large"></i>
                                    </div>
                                    <h1 className="card-title ">Simple</h1>
                                    <p className="card-text-muted my-4 ">User / Month</p>
                                    <p className="card-text-muted ">Bandwidth: 1GB</p>
                                    <p className="card-text-muted">Onlinespace: 500MB</p>
                                    <p className="card-text-muted">Support:Yes</p>
                                    <button type="submit" className=' my-3 read-on'>Buy Now</button>
                                </div>
                                <img src={Bottom} />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <div className=" card-body icon-size">
                                        <i className="fa-solid fa-user-group"></i>
                                    </div>
                                    <h1 className="card-title ">Basic</h1>
                                    <p className="card-text-muted my-4">User / Month</p>
                                    <p className="card-text-muted">Bandwidth: 2GB</p>
                                    <p className="card-text-muted">Onlinespace: 1GB</p>
                                    <p className="card-text-muted">Support:Yes</p>
                                    <button type="submit" className=' my-3 read'>Buy Now</button>
                                </div>   <img src={Bottom}/>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <div className="card-body icon-size">
                                        <i className="fa-solid fa-users"></i>
                                    </div>
                                    <h1 className="card-title ">Pro</h1>
                                    <p className="card-text-muted my-4">User / Month</p>
                                    <p className="card-text-muted">Bandwidth: 3GB</p>
                                    <p className="card-text-muted">Onlinespace: 1.5GB</p>
                                    <p className="card-text-muted">Support:Yes</p>
                                    <button type="submit" className=' my-3 read-on'>Buy Now</button>
                                </div>   <img src={Bottom}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Forth

