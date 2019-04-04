import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';
// Services
import itemService from '../../services/itemService';
// Components
import IgModal from '../../components/IgModal/IgModal';
import NavBar from '../../components/NavBar/NavBar';
// Stylesheets
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			postData: null,
			url: 'https://www.instagram.com/p/BvmpcOWhHId/',
			embedUrl: ''
		}
	    this.onChange = this.onChange.bind(this);
	    this.submitUrl = this.submitUrl.bind(this);
	}
	componentDidMount() {
		itemService.igTestFunc(this.state.url).then(postData => {
			this.setState({
		    postData: postData,
		    embedUrl: `${this.state.url}embed`
		  });
		});
	}

	onChange(e) {
		this.setState({
		  url: e.target.value
		});
	}

	submitUrl(e) {
		e.preventDefault();
		const url = this.state.url;
		console.log(url)
		itemService.igTestFunc(url).then(postData => {
			localStorage.setItem('ig_shortcode', postData.ig_shortcode);
			this.setState({
		    postData: postData,
		    embedUrl: `${url}embed`
		  });
		});
	}
	
	render() {
		return (
		<div className="container-fluid">
			<h1 className="text-center titleLine">Instagram Stats</h1>
			<NavBar mediaValueData={this.state.postData ? this.state.postData : null} />
			<div className="text-center mt-3 mb-3">The currency for influencer sponsorship valuations</div>
			<div className="row">
				<div className="col-sm-8">
					{/* this.state.postData && <IgModal postData={this.state.postData} /> */}
					<img className="img-fluid float-right homeImage" src={require('../../igmodal.png')}/>
				</div>
				<div className="col-sm-4">
					<div className="container d-flex h-100">
						<div className="row align-self-center">
							<div className="col-sm-2">
								<span className="adEqual">=</span>
							</div>
							<div className="col-sm-8">
								<span className="adMoney">$16,150</span>
								<span className="adDescription align-center">@alexisren Market Value for Branded Content sponsorship on this specific post (pictured left)</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="text-center mt-5">Have an ad in mind with a certain influencer? Check out how much you should be paying first!</div>
			<div className="row justify-content-center mb-5">
				<form onSubmit={this.submitUrl} className="input-group md-form form-sm form-2 pl-0 col-sm-5">
					<input
						placeholder="Paste the influencer’s post link you wish to value in here!"
						name="url"
						ref="url"
						value={this.state.url}
						onChange={this.onChange}
						className="form-control"
					/>
					<div className="input-group-append">
					<button className="btn btn-info">GO</button>
					</div>
				</form>
			</div>
			<div className="row">
				<div className="col-sm-4 text-center">
					<iframe width="300" height="500" src="https://www.instagram.com/p/BuWxLVbju91/embed" frameBorder="0"></iframe>
				</div>
				<div className="col-sm-4 text-center">
					<iframe width="300" height="500" src="https://www.instagram.com/p/BvXYVKHhSlb/embed" frameBorder="0"></iframe>
				</div>
				<div className="col-sm-4 text-center">
					<iframe width="300" height="500" src="https://www.instagram.com/p/BviYL1-nnYy/embed" frameBorder="0"></iframe>
				</div>
			</div>
		</div>
		);
	}
}

export default HomePage;
