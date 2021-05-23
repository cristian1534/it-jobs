import React from 'react';
import './Css/NewJob.css';


const NewJob = () => {
    return (
        <div>
            <div class="container nj">
                <div class="row">
                    <div class="col-md-12">
                        <div class="well well-sm">
                            <form class="form-horizontal" method="post">
                            <h2 class="header ml-3">Please, describe the Job Position to post.</h2>
                                <fieldset>
                                    <div class="form-group ml-3">
                                        <label for="exampleFormControlFile1" className="text-danger"><b>Bunner</b></label>
                                        <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                                    </div>
                                    <div class="form-group">
                                        <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                                        <div class="col-md-8">
                                            <input id="fname" name="name" type="text" placeholder="Title" class="form-control"/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                                        <div class="col-md-8">
                                            <textarea id="lname" name="name" type="text" placeholder="Description" class="form-control"></textarea>
                                        </div>
                                    </div>
                                    <div class="form-group mb-5">
                                        <div class="col-md-12 text-center">
                                            <button type="submit" class="btn btn-outline-success btn-md">Submit</button>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewJob;