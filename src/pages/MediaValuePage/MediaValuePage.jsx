import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';
// Services
import itemService from '../../services/itemService';
// Components
import IgModal from '../../components/IgModal/IgModal';
import NavBar from '../../components/NavBar/NavBar';
// Stylesheets
import './MediaValuePage.css';

class MediaValuePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			postData: '',
			url: 'https://www.instagram.com/p/',
			embedUrl: ''
		}
	}
	componentDidMount() {
		if(localStorage.getItem('ig_shortcode')) {
			var igUrl = this.state.url + localStorage.getItem('ig_shortcode');
			itemService.igTestFunc(igUrl).then(postData => {
				this.setState({
					postData: postData,
					url: igUrl,
					embedUrl: `${igUrl}embed`
				});
			});
		} else {
			var igUrl = prompt('Enter an Instagram post link');
			itemService.igTestFunc(igUrl).then(postData => {
				this.setState({
					postData: postData,
					url: igUrl,
					embedUrl: `${igUrl}embed`
				});
			});
		}
	}
	
	render() {
		return (
		<div className="container-fluid">
			<h1 className="text-center titleLine">Media Value</h1>
			<NavBar/>
			<div className="text-center mt-3 mb-3">&nbsp;</div>
			<div className="row">
				<div className="col-sm-8">
					{this.state.postData && <IgModal postData={this.state.postData} />}
					{/* <img className="img-fluid float-right mediaValueImage" src={require('../../igmodal.png')}/> */}
				</div>
				<div className="col-sm-4">
					<div className="container d-flex h-100">
						<div className="row align-self-center">
							{this.state.postData &&
							<ul className="">
								<li>Account: @{this.state.postData.username}</li>
								<li>Sponsorship Type: {'Branded Content'}</li>
								<li>Platform: {'Instagram'}</li>
								<li>Market Value: {'$22,500'}</li>
								<li>Brand Sponsor Media Value: {'$76,235'}</li>
								<li>Logo Size: {'Medium'}</li>
								<li>Logo Placement: {'Corners'}</li>
								<li>Logo Prominence: {'Overlay'}</li>
								<li>Followers: {this.state.postData.followers}</li>
								<li>Post Impressions: {this.state.postData.number_of_likes}</li>
								<li>Post Engagements: {this.state.postData.number_of_comments}</li>
								<li>Engagement Rate: {'8.1%'}</li>
								<li>Influencer World Rank: {'#888'}</li>
							</ul>}
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				
			</div>
		</div>
		);
	}
}

export default MediaValuePage;
