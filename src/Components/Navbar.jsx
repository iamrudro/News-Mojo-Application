import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <>
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">

                        <NavLink className="navbar-brand" to='/'>NewsMojo</NavLink>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <NavLink to='/business'>
                                    <li className="nav-item nav-link">Business</li>
                                </NavLink>
                                <NavLink to='/entertainment'>
                                    <li className="nav-item nav-link">Entertainment</li>
                                </NavLink>
                                <NavLink to='/general'>
                                    <li className="nav-item nav-link">General</li>
                                </NavLink>
                                <NavLink to='/health'>
                                    <li className="nav-item nav-link">Health</li>
                                </NavLink>
                                <NavLink to='/science'>
                                    <li className="nav-item nav-link">Science</li>
                                </NavLink>
                                <NavLink to='/sports'>
                                    <li className="nav-item nav-link">Sports</li>
                                </NavLink>
                                <NavLink to='/technology'>
                                    <li className="nav-item nav-link">Technology</li>
                                </NavLink>

                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;