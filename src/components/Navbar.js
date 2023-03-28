import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return (

        <>
            {/* ----------------------------------------------------navbar--------------------------------------------- */}

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"> Cosmetic <span style={{ color: 'red' }} data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">Product</span></a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarnav" aria-controls="navbarnav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarnav">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active me-5" to={'/'}>Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link active me-5" to={'/cart'}><i class="fa-solid fa-cart-shopping fa-bounce"></i>Cart</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
