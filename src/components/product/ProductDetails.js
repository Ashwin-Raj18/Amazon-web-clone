import React, { Fragment } from 'react';
import Header from '../header/Header';
import './ProductDetails.css';
import { useStateValue } from '../../state&context/StateProvider';

const ProductDetails = (props) => {
	const { id, title, image, price, rating } = props.location.state;
	const [ { cart }, dispatch ] = useStateValue();
	const addToCart = () => {
		dispatch({
			type : 'ADD_TO_CART',
			item : {
				id     : id,
				title  : title,
				image  : image,
				price  : price,
				rating : rating
			}
		});
	};
	return (
		<Fragment>
			<Header />
			<div className="product__details">
				<div class="wrapper">
					<div class="box a">
						<img src={image} />
					</div>
					<div class="box b">
						<h3>{title}</h3>
						<div className="product__details__rating">
							{Array(rating).fill().map((_) => {
								return <p>⭐</p>;
							})}
						</div>
						<p className="product__price">
							<small>₹</small>
							<strong>{price}</strong>
						</p>
						<button className="product__details__addToCart" onClick={addToCart}>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default ProductDetails;
