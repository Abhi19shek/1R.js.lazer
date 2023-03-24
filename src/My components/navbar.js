import React from 'react'
import logo from '../images/logo.png';
export default function navbar() {
    return (
        <section>
            <div className='one'>
                <nav className="navbar navbar-expand-sm navbar-light">
                    <div className="container">
                        <img src={logo} className="img-fluid rounded-start" alt="..." />
                        <div className="justify-content-center">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Features</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Pricing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <form className=" d-flex" >
                            <ul className="collapse navbar-collapse navbar-nav me-auto mb-2 mb-lg-0 " id="navbarSupportedContent">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Login</a>
                                </li> <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Register</a>
                                </li>
                            </ul>
                        </form>
                    </div>
                </nav></div>
        </section>

    )
}
