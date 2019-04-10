import React from 'react';
import { Link } from 'react-router-dom';
const Menu = ({ isAuth, logOut }) => {
	return (
		<ul>
			<Link to="/">전책</Link>
			{isAuth && <Link to="/mybook">내책</Link>}
			<button>검책</button>
			{!isAuth && <Link to="/login">로그인</Link>}
			{isAuth && <button onClick={logOut}>로그아웃</button>}
		</ul>
	);
};
export default Menu;
