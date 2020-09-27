import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import { useStateValue } from '../../state&context/StateProvider';
import { auth } from '../../firebase/Firebase';

function Header () {
	const [{ cart, user }, dispach] = useStateValue();
	const login = () => {
		if (user) {
			auth.signOut();
		}
	}
	return (
		<nav className="header">
			<Link to="/">
				<img
					className="header__logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
				/>
			</Link>
			<div className="header__search">
				<input type="text" className="header__searchInput" />
				<SearchIcon className="header__searchIcon" />
			</div>
			<div className="header__nav">
				<Link className="header__link" to={!user && '/login'}>
					<div onClick={login} className="header__options">
						<span className="header__optionLineOne">Hello {user?.email.substring(0, 8)}</span>
						<span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
					</div>
				</Link>
				<Link className="header__link" to="/">
					<div className="header__options">
						<span className="header__optionLineOne">Returns</span>
						<span className="header__optionLineTwo">& Orders</span>
					</div>
				</Link>
				<Link className="header__link" to="/">
					<div className="header__options">
						<span className="header__optionLineOne">Your</span>
						<span className="header__optionLineTwo">Prime</span>
					</div>
				</Link>
				<Link className="header__link" to="/checkout">
					<div className="header__optionCart">
						<ShoppingCartTwoToneIcon className="cart__icon" />
						<span className="header__optionLineTwo cart__count">{cart.length}</span>
					</div>
				</Link>
			</div>
		</nav>
	);
}

export default Header;
