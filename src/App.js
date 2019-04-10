import React from 'react';
import MenuContainer from './Containers/MenuContainer';
import { Route, Switch } from 'react-router-dom';
import HomeBookContainer from './Containers/HomeBookContainer';
import UploadBookContainer from './Containers/UploadBookContainer';
import MyBookContainer from './Containers/MyBookContainer';
import LoginContainer from './Containers/LoginContainer';
const App = () => {
	return (
		<div>
			<MenuContainer />
			<Switch>
				<Route exact path="/" component={HomeBookContainer} />
				<Route exact path="/mybook" component={MyBookContainer} />
				<Route exact path="/login" component={LoginContainer} />
				<Route exact path="/uploadbook" component={UploadBookContainer} />
			</Switch>
		</div>
	);
};
export default App;
