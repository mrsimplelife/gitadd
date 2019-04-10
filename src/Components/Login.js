import React from 'react';

const Login = ({ getPassword, getEmail, LoginUser }) => {
	return (
		<div>
			<input type="email" placeholder="이메일" onChange={getEmail} />
			<input type="password" placeholder="비밀번호" onChange={getPassword} />
			<button onClick={LoginUser}>login</button>
		</div>
	);
};
export default Login;
