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
			embedUrl: '',
			buttons: this.props.buttons
		}
	}
	componentDidMount() {
		if(localStorage.getItem('postData')) {
			var localPostData = JSON.parse(localStorage.getItem('postData'));
			var igUrl = this.state.url + localPostData.ig_shortcode;
			this.setState({
				postData: localPostData,
				url: igUrl,
				embedUrl: `${igUrl}embed`
			});
		} else if(localStorage.getItem('ig_shortcode')) {
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
		function abreviateNumbers(x) {
			if(x > 999999) {
				return `${x.toString().substring(0, 1)}.${x.toString().substring(1, 2)}M`;
			} else if(x < 999999 && x > 99999) {
				return x.toString().substring(0, 3) + 'K';
			} else if(x < 99999 && x > 9999) {
				return x.toString().substring(0, 2) + 'K';
			} else {
				return x;
			}
		}
		const engagementsRaw = this.state.postData.number_of_likes + this.state.postData.number_of_comments;
		const engagements = abreviateNumbers(engagementsRaw);
		const impressions = abreviateNumbers(Math.round(engagementsRaw * 6.03));
		return (
		

		<div className="row align-self-center">
			<h2>Market Value: $22,500</h2>
			{this.state.postData &&
			<div>
				<div className="med-val-section">
					<span className="med-val-title">Account: </span><span className="med-val-content"><a href={`https://www.instagram.com/${this.state.postData.username}`} target="_blank">@{this.state.postData.username}</a></span>
					<span className="med-val-title">Platform: </span><span className="med-val-content">{'Instagram'}</span>
				</div>
				<div className="med-val-section">
					<span className="med-val-title">Post Impressions: </span><span className="med-val-content">{impressions ? impressions : ''}</span>
					<span className="med-val-title">Post Engagements: </span><span className="med-val-content">{engagements}</span>
				</div>
				<div className="med-val-section">
					<span className="med-val-title">Logo Size: </span><span className="med-val-content">{'Medium'}</span>
					<span className="med-val-title">Logo Placement: </span><span className="med-val-content">{'Corners'}</span>
					<span className="med-val-title">Logo Prominence: </span><span className="med-val-content">{'Overlay'}</span>
				</div>
			</div>
			}
		</div>
		);
	}
}

export default MediaValuePage;
