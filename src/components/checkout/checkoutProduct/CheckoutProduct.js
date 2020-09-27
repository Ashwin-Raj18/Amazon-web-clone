import React from 'react';
import { Button } from '@material-ui/core';
import './CheckoutProduct.css';
import { useStateValue } from '../../../state&context/StateProvider';

function CheckoutProduct ({ id, title, image, price, rating }) {
	const [ { cart }, dispatch ] = useStateValue();
	const removeFromCart = () => {
		dispatch({
			type : 'REMOVE_FROM_CART',
			id   : id
		});
	};
	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct__image" src={image} alt="" />
			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>
				<p className="checkoutProduct__price">
					<small>₹ </small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct__rating">
					{Array(rating).fill().map((_) => <p>⭐</p>)}
				</div>
				<Button onClick={removeFromCart}>Remove from cart</Button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
