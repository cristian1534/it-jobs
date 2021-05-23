import React from 'react';


const EditProfile = () => {



    return (
        <div>
           <div class="container bg-dark np">
            <h1 class="page-header">Edit Profile</h1>
            <div class="row">

                <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="text-center">
                    <img src="https://st3.depositphotos.com/1177973/14106/i/1600/depositphotos_141065150-stock-photo-handsome-young-programmer.jpg" class="avatar img-circle img-thumbnail mb-3" alt="avatar"/>
                    <h6>Upload a different photo...</h6>
                    <input type="file" class="text-center center-block well well-sm"/>
                </div>
                </div>
            
                <div class="col-md-8 col-sm-6 col-xs-12 personal-info">
                <h3>Update info</h3>
                <form class="form-horizontal" role="form">
                    <div class="form-group">
                    <label class="col-lg-3 control-label">First name:</label>
                    <div class="col-lg-8">
                        <input class="form-control"  required type="text"/>
                    </div>
                    </div>
                    <div class="form-group">
                    <label class="col-lg-3 control-label">Last name:</label>
                    <div class="col-lg-8">
                        <input class="form-control"  required type="text"/>
                    </div>
                    </div>
                    <div class="form-group">
                    <label class="col-lg-3 control-label">Position:</label>
                    <div class="col-lg-8">
                        <input class="form-control"  required type="text"/>
                    </div>
                    </div>
                    <div class="form-group">
                    <label class="col-lg-3 control-label">Description:</label>
                    <div class="col-lg-8">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    </div>
                    <div class="form-group">
                    <label class="col-lg-3 control-label">Email:</label>
                    <div class="col-lg-8">
                        <input class="form-control"  required type="text"/>
                    </div>
                    </div>
                    <div class="form-group">
                    <label class="col-lg-3 control-label">Phone number:</label>
                    <div class="col-lg-8">
                        <input class="form-control"  required type="tel"/>
                    </div>
                    </div>

                    <div class="form-group">
                    <label class="col-md-3 control-label ml-4">Confirm operation:</label>
                    <div class="col-md-8">
                        <input class="btn btn-outline-success mr-3 mt-3" value="Create" required type="submit"/>
                        <span></span>
                        <input class="btn btn-outline-danger mr-5 mt-3" value="Cancel" required type="button"/>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
}

export default EditProfile;