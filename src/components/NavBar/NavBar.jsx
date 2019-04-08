import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';
// Services
// Components
// Stylesheets
import './NavBar.css';

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	render() {
		return (
		<div>
			<h1 className="text-center titleLine">Instagram Stats</h1>
			<div className="row justify-content-md-center">
				<div className="col-md-2 text-center">
					<Link to={'/ad-customization'}>Ad Customization</Link>
				</div>
				<div className="col-md-2 text-center">
					<Link to={'/'}>Home</Link>
				</div>
				<div className="col-md-2 text-center">
					<Link to={'/media-value'}>Media Value</Link>
				</div>
			</div>
		</div>
		)
	}
}

export default NavBar;