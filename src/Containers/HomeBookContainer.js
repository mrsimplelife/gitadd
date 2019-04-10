import React from 'react';
import HomeBook from '../Components/HomeBook';
import UploadBookLinkContainer from './UploadBookLinkContainer';
const HomeBookContainer = (props) => {
	console.log(props);
	return (
		<div>
			<HomeBook />
			<UploadBookLinkContainer />
		</div>
	);
};
export default HomeBookContainer;
