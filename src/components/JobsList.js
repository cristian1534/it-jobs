import React from 'react';
import './Css/JobsList.css';

const JobsList = () => {
    return (
        <div>
            <div class="card-group" id="card">
                <div class="card ml-2 mr-2 rounded">
                    <img class="card-img-top" src="https://begateway.com/wp-content/uploads/2017/09/Wanted-1-1024x512.png" alt="Card pict cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <button   onClick={ () => alert('Your Resume was sent!')} type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1 ml-1">Apply for this Job</button>
                    <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div class="card ml-2 mr-2 rounded">
                    <img class="card-img-top" src="https://begateway.com/wp-content/uploads/2017/09/Wanted-1-1024x512.png" alt="Card pict cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <button   onClick={ () => alert('Your Resume was sent!')} type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1 ml-1">Apply for this Job</button>
                    <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div class="card ml-2 mr-2 rounded">
                    <img class="card-img-top" src="https://begateway.com/wp-content/uploads/2017/09/Wanted-1-1024x512.png" alt="Card pict cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <button  onClick={ () => alert('Your Resume was sent!')} type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1 ml-1">Apply for this Job</button>
                    <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobsList;