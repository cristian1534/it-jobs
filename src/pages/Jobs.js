import React from 'react';
import JobsList from '../components/JobsList';
import Recluiters from '../components/Recluiters';


const Jobs = () => {
    return (
        <div className="mt-5">
            <Recluiters />
            <JobsList />
        </div>
    );
}

export default Jobs;