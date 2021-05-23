import React from 'react';
import { Link } from 'react-router-dom';
import Pool from '../auth/UserPool';
import './Css/Bunner.css';


const Bunner = () => {

    const user = Pool.getCurrentUser();

    return (
        <div>
            <div class="p-5 text-center bunner" >
                <div class="mask masky" >
                <div class="d-flex justify-content-center align-items-center h-100">
                    <div class="text-white">
                    <h1 class="mb-3">Welcome</h1>
                    <h2>to</h2>
                    <h1>IT-Jobs!</h1>
                    <h4 class="mb-3">Meet our Developers</h4>
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

export default Bunner;

//http://imgfz.com/i/6tOSdE0.jpeg