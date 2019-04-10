import App from '../App';
import { connect } from 'react-redux';
import React from 'react';

const AppContainer = (state) => {
	console.log(state);
	return <App isAuth={state.isAuth} />;
};
export default connect((state) => state)(AppContainer);
