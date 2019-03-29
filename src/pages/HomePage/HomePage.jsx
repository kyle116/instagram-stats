import React, { Component } from 'react';
// Services
import itemService from '../../services/itemService';
// Components
import IgModal from '../../components/IgModal/IgModal';
// Stylesheets
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			postData: null,
			url: 'https://www.instagram.com/p/BuIQ4TeFaVs/',
			embedUrl: ''
		}
	    this.onChange = this.onChange.bind(this);
	    this.submitUrl = this.submitUrl.bind(this);
	}
	componentDidMount() {
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
			this.setState({
		    postData: postData,
		    embedUrl: `${url}embed`
		  });
		});
	}
	
	render() {
		return (
		<div className="container-fluid">
			<div className="text-center">The currency for influencer sponsorship valuations</div>
			<div className="row">
				<div className="col-sm-7 text-right">
					<iframe width="300" height="500" src={this.state.embedUrl} frameBorder="0"></iframe>
				</div>
				{this.state.postData &&
				<ul className="col-sm-5">
					<li>country_code: {this.state.postData.country_code}</li>
					<li>language_code: {this.state.postData.language_code}</li>
					<li>display_url: {this.state.postData.display_url.substring(0, 30)}...</li>
					<li>number_of_comments: {this.state.postData.number_of_comments}</li>
					<li>number_of_likes: {this.state.postData.number_of_likes}</li>
					<li>sponsors: {this.state.postData.sponsors}</li>
				</ul>}
			</div>
			<div className="text-center">Have an ad in mind with a certain influencer? Check out how much you should be paying first!</div>
			<div className="row justify-content-center">
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
				<IgModal />
			</div>
		</div>
		);
	}
}

export default HomePage;
