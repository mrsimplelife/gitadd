import React from 'react';
import HomeBook from '../Components/HomeBook';
import UploadBookLinkContainer from './UploadBookLinkContainer';
import { connect } from 'react-redux';
const HomeBookContainer = ({ isAuth }) => {
	return (
		<div>
			<HomeBook />
			{isAuth && <UploadBookLinkContainer />}
		</div>
	);
};
export default connect((state) => state)(HomeBookContainer);
