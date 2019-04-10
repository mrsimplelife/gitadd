import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './rootReducer';
import { BrowserRouter, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import AppContainer from './Containers/AppContainer';

const client = new ApolloClient({
	uri: 'http://localhost:4000/'
});

const store = createStore(rootReducer);

ReactDOM.render(
	<ApolloProvider client={client}>
		<Provider store={store}>
			<BrowserRouter>
				<Route path="/" component={AppContainer} />
			</BrowserRouter>
		</Provider>
	</ApolloProvider>,
	document.getElementById('root')
);
