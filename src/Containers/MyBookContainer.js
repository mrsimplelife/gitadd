import React from 'react';
import MyBook from '../Components/MyBook';
import UploadBookLinkContainer from './UploadBookLinkContainer';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
const MyBookContainer = ({ isAuth }) => {
	return (
		<div>
			{!isAuth && <Redirect to="/" />}
			<MyBook />
			<UploadBookLinkContainer />
		</div>
	);
};
export default connect((state) => state)(MyBookContainer);
