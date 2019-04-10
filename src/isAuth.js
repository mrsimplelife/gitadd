export const loginSucces = () => ({
	type: 'LOGIN_SUCCESS'
});
export const logOutSucces = () => ({
	type: 'LOGOUT_SUCCESS'
});

const isAuth = (state = Boolean(localStorage.getItem('jwt')), action) => {
	switch (action.type) {
		case 'LOGIN_SUCCESS':
			return true;
		case 'LOGOUT_SUCCESS':
			return true;
		default:
			return state;
	}
};

export default isAuth;
