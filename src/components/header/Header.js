import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';

function Header () {
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
				<Link className="header__link" to="/login">
					<div className="header__options">
						<span className="header__optionLineOne">Hello, Ashwin</span>
						<span className="header__optionLineTwo">Accounts & Lists</span>
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
						<span className="header__optionLineTwo cart__count">0</span>
					</div>
				</Link>
			</div>
		</nav>
	);
}

export default Header;
