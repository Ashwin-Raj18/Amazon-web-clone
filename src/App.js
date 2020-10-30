import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import { useStateValue } from './state&context/StateProvider';
import { auth } from './firebase/Firebase';
import Footer from './components/footer/Footer';
import ProductDetails from './components/product/ProductDetails';
function App () {
	const [ { cart }, dispatch ] = useStateValue();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type : 'SET_USER',
					user : authUser
				});
			} else {
				dispatch({
					type : 'SET_USER',
					user : null
				});
			}
		});
		return () => {
			unsubscribe();
		};
	}, []);
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route exact path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/">
						<Header />
						<Home />
						<Footer />
					</Route>
					<Route exact path="/details" component={ProductDetails} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
