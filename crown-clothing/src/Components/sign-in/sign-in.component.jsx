import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';


class SignIn extends Component {
	constructor() {
		super();

		this.state = {
			email: '',
			password: ''
		}
	}

	handleChange = event => {
		const {value, name} = event.target;

		this.setState({[name]: value})
	} 
	

	render() {
		const {handleSubmit} = event => {
		event.preventDefault();

		this.setState({email: '', password: ''})
	};
		return (
		  <div className='sign-in'>
				<h2> I already have an account </h2>
				<span className='sign-in'>Sign in with your email and password</span>
			<form onSubmit={ handleSubmit } >
				<input name='email' value={this.state.email} required />
				<label>Email</label>
				<input name='password' value={this.state.password} required />
				<label>password</label>
				<input onChange={this.handleChange} type='submit' value='submit form'/>
			</form>
			
		  </div>
	    )
	}

}

export default SignIn;