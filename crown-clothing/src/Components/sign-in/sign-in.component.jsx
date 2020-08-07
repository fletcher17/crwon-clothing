import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { SignInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';


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
	
	handleSubmit = event => {
		event.preventDefault();

		this.setState({email: '', password: ''})
	};

	render() {
		
		return (
		  <div className='sign-in'>
				<h2 className= 'title'> I already have an account </h2>
				<span className='sign-in'>Sign in with your email and password</span>
			<form onSubmit={ this.handleSubmit } >
				<FormInput name="email" handleChange={this.handleChange} type="email" label="email" value={this.state.email} required />
				
				<FormInput name="password" handleChange={this.handleChange} type="password" label="password" value={this.state.password} required />
				
				<CustomButton onClick={SignInWithGoogle} isGoogleSignIn>
					Sign In
				</CustomButton>
				<CustomButton onClick={SignInWithGoogle} isGoogleSignIn>
					Sign In With Google
				</CustomButton>
			</form>
			
		  </div>
	    )
	}

}

export default SignIn;