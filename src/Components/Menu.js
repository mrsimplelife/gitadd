import React from 'react';
import { Link } from 'react-router-dom';
const Menu = () => {
	return (
		<ul>
			<Link to="/">전책</Link>
			<Link to="/mybook">내책</Link>
			<button>검책</button>
			<Link to="/login">로그인</Link>
		</ul>
	);
};
export default Menu;
