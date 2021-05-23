import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserPool from '../auth/UserPool';
import Pool from '../auth/UserPool';
import './Css/userInfo.css';

const Register = () => {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const history = useHistory();
	const user = Pool.getCurrentUser();

	const signUp = (e) => {
		e.preventDefault();

		UserPool.signUp(email, password, [], null, (err, data) => {
			if(err) {
				console.log(err);
			}
			alert(`Welcome ${name}!`)
			history.push('/login')
			
		});
	};

    return (
        <div>
            <div class="container"  id="form">
			<div class="row main">
				<div class="main-login main-center text-center">
				<h5 className="mt-3">Create your account and get more chances to be hired</h5>
				{ user && <div className="text-success mt-5"><h3>Please, first logout </h3></div>}
					<form class="" method="post" onSubmit={ signUp }>
						
						<div class="form-group">
							<label for="name" class="cols-sm-2 control-label mt-5">Name</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
									<input 
									type="text" 
									class="form-control" 
									name="name" 
									id="name"  
									placeholder="Enter your Name"
									required
									onChange={ (e) => setName(e.target.value)}
									/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="email" class="cols-sm-2 control-label">Email</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
									<input 
									type="email" 
									class="form-control" 
									name="email" 
									id="email"  
									required
									placeholder="Enter your Email"
									onChange={ (e) => setEmail(e.target.value)}
									/>
								</div>
							</div>
						</div>
						<div class="form-group">
							<label for="password" class="cols-sm-2 control-label">Password</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input 
									type="password" 
									class="form-control" 
									name="password" 
									id="password"  
									required
									placeholder="Must be min 8 characters - 1 capital letter - 1 special sign"
									onChange={ (e) => setPassword(e.target.value)}
									/>
								</div>
							</div>
						</div>
						<div class="form-group mt-5">
						{ !user && <button type="submit" class="btn btn-outline-success w-50">Register</button> }
						</div>
						<span>Do you have account?<Link to="/login"><div></div>Login</Link></span>
					</form>
				</div>
			</div>
            </div>
        </div>
    );
}

export default Register;