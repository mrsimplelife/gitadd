import React from 'react';
import Menu from '../Components/Menu';
import { connect } from 'react-redux';
import { logOutSucces } from '../isAuth';
const MenuContainer = (state) => {
	const logOut = () => {
		localStorage.removeItem('jwt');
		state.dispatch(logOutSucces());
	};
	return <Menu isAuth={state.isAuth} logOut={logOut} />;
};
export default connect((state) => state)(MenuContainer);
