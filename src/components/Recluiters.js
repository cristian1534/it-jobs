import React from 'react';
import { Link } from 'react-router-dom';
import UserPool from '../auth/UserPool';
import './Css/Bunner.css';


const Recluiters = () => {

    const user = UserPool.getCurrentUser();
    
    
    return (
        <div>
            <div class="p-5 text-center bunner" >
                <div class="mask masky" >
                <div class="d-flex justify-content-center align-items-center h-100">
                    <div class="text-white">
                    <h1 class="mb-3">Looking for Devs?</h1>
                    <h4 class="mb-3">Here you can Post a new offering, our Devs will touch you soon!</h4>
                    { !user ?
                    <Link to="/login" class="btn btn-outline-success btn-lg mr-3" role="button">Post offering</Link> :
                    <Link to="/newjob" class="btn btn-outline-success btn-lg mr-3" role="button">Post offering</Link> 
                    }
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Recluiters;
