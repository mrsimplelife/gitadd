import React from 'react';
import MyBook from '../Components/MyBook';
import UploadBookLinkContainer from './UploadBookLinkContainer';

const MyBookContainer = () => {
	return (
		<div>
			<MyBook />
			<UploadBookLinkContainer />
		</div>
	);
};
export default MyBookContainer;
