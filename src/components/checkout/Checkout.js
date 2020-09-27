import React from 'react';
import './Checkout.css';
import CheckoutAd from '../../assets/CheckoutAd.jpg';
import CheckoutProduct from './checkoutProduct/CheckoutProduct';
import { useStateValue } from '../../state&context/StateProvider';
import Subtotal from './checkoutSubtotal/Subtotal';

function Checkout () {
	const [ { cart } ] = useStateValue();
	return (
		<div className="checkout">
			<div className="checkout__left">
				<img src={CheckoutAd} alt="CheckoutAd" className="checkout__ad" />
				{cart.length === 0 ? (
					<div>
						<h2>Your Shopping cart is empty</h2>
						<p>
							You have no items in your cart. To buy one or more items, click "Add to
							cart" next to the item.
						</p>
					</div>
				) : (
					<div>
						<h2 className="checkout__title">Your Shopping cart</h2>
						{cart.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				)}
			</div>
			{cart.length > 0 && (
				<div className="checkout__right">
					<Subtotal />
				</div>
			)}
		</div>
	);
}

export default Checkout;
