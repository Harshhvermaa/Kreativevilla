import React from 'react'
import '../css/header.css'

export const Header = () => {
    return (
        <div className='container'>
            <nav class="navbar navbar-expand-lg">
                {/* <div class="container-fluid"> */}
                <div className='Header'>
                    <div className='logo'>
                        <a class="navbar-brand" href="#"><img className='header-logo' src='./images/2.png' /></a>
                    </div>

                    <div className='navigate'>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                                <a class="nav-link" href="#">Our Services</a>
                                <a class="nav-link" href="#">Our Team</a>
                                <a class="nav-link" href="#">Our Work</a>
                                <a class="nav-link" href="#">Blog</a>
                            </div>
                            <div className='header_btn'>
                                <a href=''>Request a Free Quote</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </nav>
        </div>
    )
}
