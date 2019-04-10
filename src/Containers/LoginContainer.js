import React, { useState } from 'react';
import Login from '../Components/Login';
import { Mutation } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { loginSucces } from '../isAuth';
const LoginContainer = (state) => {
	const LOGIN_USER = gql`
		mutation LoginUser($email: String!, $password: String!) {
			loginUser(email: $email, password: $password) {
				token
			}
		}
	`;
	const [ email, setEmail ] = useState();
	const [ password, setPassword ] = useState();
	const getEmail = (e) => {
		setEmail(e.target.value);
	};
	const getPassword = (e) => {
		setPassword(e.target.value);
	};

	return (
		<Mutation mutation={LOGIN_USER} variables={{ email, password }}>
			{(loginUser, result) => {
				if (state.isAuth) {
					return <Redirect to="/" />;
				}
				const { data, loading, error, called } = result;
				if (!called) {
					return <Login getPassword={getPassword} getEmail={getEmail} LoginUser={loginUser} />;
				}
				if (loading) {
					return <div>LOADING</div>;
				}
				if (error) {
					return <Redirect to="/login" />;
				}
				{
					const { loginUser } = data;

					const { token } = loginUser;
					localStorage.setItem('jwt', token);
					state.dispatch(loginSucces());
					return <Redirect to="/" />;
				}
			}}
		</Mutation>
	);
};
export default connect((state) => state)(LoginContainer);
