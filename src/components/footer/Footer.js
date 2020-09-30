import React from 'react';
import './Footer.css';

function Footer () {
	return (
		<div className="footer">
			<div className="footer__content__left">
				<h5>This is a basic amazon clone by Ashwin Raj</h5>
				<h5>Web-app specs:</h5>
				<ul className="stack__list">
					<li> ReactJS</li>
					<li> Context API and react hooks for state management</li>
					<li> Firebase for auth and hosting</li>
				</ul>
			</div>
			<div className="footer__content__right">
				<h7>#This application is solely created for educational purpose</h7>
			</div>
		</div>
	);
}

export default Footer;
