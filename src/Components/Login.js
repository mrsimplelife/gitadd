import React from 'react';

const Login = () => {
	return (
		<form>
			<input type="email" placeholder="이메일" />
			<input type="password" placeholder="비밀번호" />
			<button>login</button>
		</form>
	);
};
export default Login;
