import React, { useState, useContext } from 'react';
import { AccountContext } from '../components/Account';
import { Link } from 'react-router-dom';
import UserPool from '../auth/UserPool';
import './Css/userInfo.css';


const Login = () => {
	const [email, setUsername] = useState('');
	const [password, setPassword] = useState('');
	
	const { authenticate } = useContext(AccountContext);
	const user = UserPool.getCurrentUser();

	const singIn = (e) => {
		e.preventDefault();

		authenticate(email, password)
			.then((data) => {
				alert('Welcome!')
				window.location.replace('');
			})
			.catch((err) => {
				alert('Wrong Email or Password, try again.')
			})

	};	

    return (
        <div>
            <div class="container"  id="form">
			<div class="row main">
				<div class="main-login main-center text-center">
				<h5 className="mt-3">Welcome to IT-Jobs, good luck in your job searching!</h5>
					<form class="" method="post" onSubmit={ singIn}>
						{ user && <div className="text-success mt-5"><h3>Your are Logged in!</h3></div>}
						<div class="form-group">
							<label for="email" class="cols-sm-2 control-label mt-5 text-center">Email</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
									<input 
									type="text" 
									class="form-control" 
									name="email" 
									id="email"  
									placeholder="Enter your Email"
									required
									onChange={ (e) => setUsername(e.target.value)}
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
									placeholder="Enter your Password"
									onChange={ (e) => setPassword(e.target.value)}
									/>
								</div>
							</div>
						</div>
						<div class="form-group mt-5 mb-5">
						{ !user && <button type="submit" class="btn btn-outline-success w-50">Login</button> }
						</div>
						<span>Do you not have account?<Link to="/register"><div></div>Register</Link></span>
						</form>
				</div>
			</div>
            </div>
        </div>
    );
}

export default Login;



