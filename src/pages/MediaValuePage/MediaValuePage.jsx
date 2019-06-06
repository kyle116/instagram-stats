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
	componentDidUpdate(prevProps) {
		// updates when props change
	    if(JSON.stringify(this.props.buttons) !== JSON.stringify(prevProps.buttons)) {
			this.setState({
				buttons: this.props.buttons
			})
	    }
	}
	
	render() {
		function numberWithCommas(x) {
		    var parts = x.toString().split(".");
		    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		    return parts.join(".");
		}
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
		function adValueCalculation(engagements, impressions, size, placement, prominence) {
			var imageValue = (engagements * .4) + (((impressions * 9) / 1000) * .3);
			var sizeValue, placementValue, prominenceValue;
			switch(size) {
				case 'small':
					sizeValue = .1;
					break;
				case 'medium':
					sizeValue = .35;
					break;
				case 'large':
					sizeValue = .75;
					break;
			}
			switch(placement) {
				case 'center':
					placementValue = .1;
					break;
				case 'corners':
					placementValue = .1;
					break;
				case 'sides':
					placementValue = .35;
					break;
			}
			switch(prominence) {
				case 'overlay':
					prominenceValue = 1;
					break;
				case 'background':
					prominenceValue = .35;
					break;
				case 'foreground':
					prominenceValue = 1;
					break;
			}
			var weightValue = (.4 * sizeValue) + (.3 * placementValue) + (.3 * prominenceValue);
			return imageValue * weightValue;
		}
		const engagementsRaw = this.state.postData.number_of_likes + this.state.postData.number_of_comments;
		const engagements = abreviateNumbers(engagementsRaw);
		const impressionsRaw = Math.round(engagementsRaw * 6.03)
		const impressions = abreviateNumbers(impressionsRaw);
		var size, placement, prominence, adValue;
		for(var s in this.state.buttons['branded-content']['size']) {
			if(this.state.buttons['branded-content']['size'][s]) {
				size = s;
			}
		}
		for(var p in this.state.buttons['branded-content']['placement']) {
			if(this.state.buttons['branded-content']['placement'][p]) {
				placement = p;
			}
		}
		for(var o in this.state.buttons['branded-content']['prominence']) {
			if(this.state.buttons['branded-content']['prominence'][o]) {
				prominence = o;
			}
		}
		adValue = Math.round(adValueCalculation(engagementsRaw, impressionsRaw, size, placement, prominence));
		return (
		<div className="row align-self-center">
			<h2>Market Value: ${numberWithCommas(adValue)}</h2>
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
					<span className="med-val-title">Logo Size: </span><span className="med-val-content">{size}</span>
					<span className="med-val-title">Logo Placement: </span><span className="med-val-content">{placement}</span>
					<span className="med-val-title">Logo Prominence: </span><span className="med-val-content">{prominence}</span>
				</div>
				<button>
					<Link to={'/'}>Start Over</Link>
				</button>
			</div>
			}
		</div>
		);
	}
}

export default MediaValuePage;
