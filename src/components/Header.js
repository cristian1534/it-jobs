import React from 'react';
import { Link } from 'react-router-dom';
import Pool from '../auth/UserPool';
import State from './State';

//{ !user && <button type="submit" class="btn btn-outline-success w-50">Login</button> }

const Header = () => {

    const user = Pool.getCurrentUser();


    return (
        <div id="header">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a class="navbar-brand" href="/">IT-Jobs!</a>
                <button class="navbar-toggler" 
                    type="button"
                    data-toggle="collapse" 
                    data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link to="/" class="nav-link">Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/jobs" class="nav-link">Jobs</Link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" 
                        href="/"
                         id="navbarDropdown"
                          role="button" 
                          data-toggle="dropdown" 
                          aria-haspopup="true" 
                          aria-expanded="false">
                        Users
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to="/register" class="dropdown-item">Register</Link>
                        <Link to="/login" class="dropdown-item">Login</Link>
                        <div class="dropdown-divider"></div>
                        <Link to="/contact" class="dropdown-item">Contact us</Link>
                        </div>
                    </li>
                    <li class="nav-item">
                        <Link to="/about" class="nav-link">About</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/faq" class="nav-link">FAQ</Link>
                    </li>
                    {user && 
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" 
                            href="/" 
                            id="navbarDropdown" 
                            role="button" 
                            data-toggle="dropdown" 
                            aria-haspopup="true" 
                            aria-expanded="false">
                        Profile
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link to="/newprofile" class="dropdown-item">New Profile</Link>
                            <Link to="/profile" class="dropdown-item">Edit Profile</Link>
                        </div>
                    </li>
                    }
                    { user &&
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" 
                        href="/" 
                        id="navbarDropdown" 
                        role="button" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false">
                    Recluiter
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link to="/newjob" class="dropdown-item">Create Job</Link>
                    <Link to="/editjob" class="dropdown-item">Edit Job</Link>
                    </div>
                    </li>  
                    }
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2 mb-3 mt-3" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    { user ? <div className="ml-1 mb-3"><State/></div> : <div></div>}
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default Header;