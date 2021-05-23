import React from 'react';
import { Link } from 'react-router-dom';

const Devs = () => {
    return (
        <div>
            <div class="card-deck ml-2 mr-2">
                <div class="card bg-dark text-light mt-5 mb-5 ">
                    <img class="card-img-top" src="https://st3.depositphotos.com/1177973/14106/i/1600/depositphotos_141065150-stock-photo-handsome-young-programmer.jpg" alt="Card pict cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <Link to="/dev" type="button" class="btn btn-outline-success my-2 my-sm-0">View Profile</Link>
                     <Link to="/chatroom" type="button" class="btn btn-outline-primary my-2 my-sm-0 ml-5">Go to Chatroom</Link>
                    </div>
                    <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div class="card bg-dark text-light mt-5 mb-5">
                    <img class="card-img-top" src="https://st3.depositphotos.com/1177973/14106/i/1600/depositphotos_141065150-stock-photo-handsome-young-programmer.jpg" alt="Card pict cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <Link to="/dev" type="button" class="btn btn-outline-success my-2 my-sm-0">View Profile</Link>
                     <Link to="/chatroom" type="button" class="btn btn-outline-primary my-2 my-sm-0 ml-5">Go to Chatroom</Link>
                    </div>
                    <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div class="card bg-dark text-light mt-5 mb-5">
                    <img class="card-img-top" src="https://st3.depositphotos.com/1177973/14106/i/1600/depositphotos_141065150-stock-photo-handsome-young-programmer.jpg" alt="Card pict cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <Link to="/dev" type="button" class="btn btn-outline-success my-2 my-sm-0">View Profile</Link>
                     <Link to="/chatroom" type="button" class="btn btn-outline-primary my-2 my-sm-0 ml-5">Go to Chatroom</Link>
                    </div>
                    <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Devs;