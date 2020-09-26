import React from 'react';
import './Home.css';
import Product from '../product/Product';
function Home () {
	return (
		<div className="home">
			<img
				className="home__banner"
				src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/OP/SFH/GW/D15593517_IN_OP_BTS_Mar20_1500x600_2._CB429786287_.jpg"
			/>
			<div className="home__row">
				<Product
					id={45456}
					title="Apple iPhone 11 Pro Max (256GB) - Space Grey"
					price={131900}
					rating={5}
					image="https://m.media-amazon.com/images/I/61tuQdl2yLL._AC_UY218_.jpg"
				/>
				<Product
					id={4587}
					title="Samsung Galaxy Note 20 Ultra 5G (Mystic Black, 12GB RAM, 256GB Storage)"
					price={104999}
					rating={4}
					image="https://m.media-amazon.com/images/I/81frwlzRG5L._AC_UY218_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					id={45455}
					title="Wildcraft hypashield super mask reusable outdoor protection mask (pack of 3)"
					price={279}
					rating={3}
					image="https://m.media-amazon.com/images/I/51eJo0hFsbL._AC_UL320_.jpg"
				/>
				<Product
					id={8457}
					title="Dabur Sanitize Hand Sanitizer | Alcohol Based Sanitizer(500ml)"
					price={230}
					rating={5}
					image="https://m.media-amazon.com/images/I/61nz2WwfnbL._AC_UL320_.jpg"
				/>
				<Product
					id={4587}
					title="Fluke-4393789 59MAX+ Infrared Thermometer"
					price={7006}
					rating={4}
					image="https://images-eu.ssl-images-amazon.com/images/I/31bksubeqnL._AC_SX184_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					id={78964}
					title="Nestlé CERELAC Fortified Baby Cereal with Milk, Multigrain & Fruits – From 12 Months, 300g BIB Pack"
					price={245}
					rating={5}
					image="https://m.media-amazon.com/images/I/71DvIbCz85L._AC_UL320_.jpg"
				/>
			</div>
		</div>
	);
}

export default Home;
