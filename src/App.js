import React from 'react';
import MenuContainer from './Containers/MenuContainer';
import { Route, Switch } from 'react-router-dom';
import HomeBookContainer from './Containers/HomeBookContainer';
import UploadBookContainer from './Containers/UploadBookContainer';
import MyBookContainer from './Containers/MyBookContainer';
import LoginContainer from './Containers/LoginContainer';
import { connect } from 'react-redux';
const App = (state, props) => {
	console.log(props);
	console.log(state);
	return (
		<div>
			<MenuContainer />
			<Switch>
				{!state.isAuth && <Route exact path="/" component={HomeBookContainer} />}
				<Route exact path="/mybook" component={MyBookContainer} />
				<Route exact path="/login" component={LoginContainer} />
				<Route exact path="/uploadbook" component={UploadBookContainer} />
			</Switch>
		</div>
	);
};
export default connect((state, props) => ({ state, props }))(App);
