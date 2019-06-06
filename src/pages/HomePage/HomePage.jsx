import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';
// Services
import itemService from '../../services/itemService';
// Pages
import AdCustomPage from '../AdCustomPage/AdCustomPage';
import MediaValuePage from '../MediaValuePage/MediaValuePage';
// Components
// import IgModal from '../../components/IgModal/IgModal';
// import NavBar from '../../components/NavBar/NavBar';
// Stylesheets
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			postData: null,
			url: 'https://www.instagram.com/p/Bvo_9JNgwZU',
			embedUrl: '',
			buttons: {
				'branded-content': {
					active: false,
					size: {
						small: false,
						medium: false,
						large: false
					},
					placement: {
						center: false,
						corners: false,
						sides: false
					},
					prominence: {
						overlay: false,
						background: false,
						foreground: false
					}
				},
				'paid-partnership': false,
				'product-placement': {
					active: false,
					size: {
						small: false,
						medium: false,
						large: false
					},
					placement: {
						center: false,
						corners: false,
						sides: false
					},
					prominence: {
						overlay: false,
						background: false,
						foreground: false
					}
				},
				'instagram-story': {
					active: false,
					size: {
						small: false,
						medium: false,
						large: false
					},
					placement: {
						center: false,
						corners: false,
						sides: false
					},
					prominence: {
						overlay: false,
						background: false,
						foreground: false
					}
				}
			},
			adClasses: 'ad'
		}
	    this.onChange = this.onChange.bind(this);
	    this.submitUrl = this.submitUrl.bind(this);
	}
	componentDidMount() {
		if(localStorage.getItem('postData')) {
			var localPostData = JSON.parse(localStorage.getItem('postData'));
			var igUrl = localPostData.ig_shortcode ? 'https://www.instagram.com/p/' + localPostData.ig_shortcode : this.state.url;
			this.setState({
				postData: localPostData,
				url: igUrl,
				embedUrl: `${igUrl}embed`
			});
		} else {
			itemService.igTestFunc(this.state.url).then(postData => {
				this.setState({
			    postData: postData,
			    embedUrl: `${this.state.url}embed`
			  });
			});
		}

		if(localStorage.getItem('buttons')) {
			var localButtons = JSON.parse(localStorage.getItem('buttons'));
			this.setState({
				buttons: localButtons
			});
		}
	}

	onChange(e) {
		this.setState({
		  url: e.target.value
		});
	}

	submitUrl(e) {
		e.preventDefault();
		const url = this.state.url;
		itemService.igTestFunc(url).then(postData => {
			console.log('postData', postData)
			localStorage.setItem('ig_shortcode', postData.ig_shortcode);
			localStorage.setItem('postData', JSON.stringify(postData));
			this.setState({
			    postData: postData,
			    embedUrl: `${url}embed`
			});
		});
		this.props.history.push('/ad-customization')
	}
	
	render() {
		return (
		<div className="container-fluid mt-5">
			{/*<div className="text-center mt-3 mb-3">The currency for influencer sponsorship valuations</div>*/}
			<div className="row mb-5">
				<div className="col-sm-8">
					{/* this.state.postData && <IgModal postData={this.state.postData} /> */}
					<img alt="instagram screenshot example" className="img-fluid float-right homeImage" src={require('../../assets/igmodal.png')}/>
				</div>
				<div className="col-sm-4">
					<div className="container d-flex h-100">
						
							<div className="row align-self-center w-100">
								<Route
									exact path='/'
									render={(props) => (
										<div className="row align-self-center">
											<div className="col-sm-12">
												<span className="adMoneyTitle">how much is this instagram ad worth?</span>
												<span className="adMoney">$18,038</span>
												{/*<span className="adDescription align-center">@{this.state.postData && this.state.postData.username} Market Value for Branded Content sponsorship on this specific post (pictured left)</span> */}
												<span className="adDescription align-center">@karajewell x @balibody product placement</span>
											</div>
										</div>
									)}
								/>
								<Route
									exact path='/ad-customization'
									render={(props) => <AdCustomPage {...props} buttons={this.state.buttons} />}
								/>
								<Route
									exact path='/media-value'
									render={(props) => <MediaValuePage {...props} buttons={this.state.buttons} />}
								/>
							</div>

					</div>
				</div>
			</div>

			<div>
				<Route
					exact path='/'
					render={(props) => (
						<div>
						{/* Search Bar */}
						<div className="searchBarText text-center">Have an ad in mind with a certain influencer?</div>
						<div className="searchBarText text-center">Check out how much you should be paying first!</div>
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

						{/* Circles */}
						<div className="row mb-5">
							<div className="col-sm-4 text-center">
								<img alt="step 1" className="homeCircleImages" src={require('../../assets/circle3.png')}/>
								<div className="homeCircleImagesInfo">1. paste instagram link</div>
							</div>
							<div className="col-sm-4 text-center">
								<img alt="step 2" className="homeCircleImages" src={require('../../assets/circle2.png')}/>
								<div className="homeCircleImagesInfo">2. select ad</div>
							</div>
							<div className="col-sm-4 text-center">
								<img alt="step 3" className="homeCircleImages" src={require('../../assets/circle1.png')}/>
								<div className="homeCircleImagesInfo">3. get price of sponsorship</div>
							</div>
						</div>

						{/* Samples */}
						<div className="row">
							<div className="col-sm-4 text-center">
								<img alt="instagram example" className="homeImages" src={require('../../assets/ig1.png')}/>
								<div className="homeImagesInfo">@kendalljenner x Stuart Weitzman</div>
								<div className="homeImagesInfo">Branded Content = $1.2M</div>
							</div>
							<div className="col-sm-4 text-center">
								<img alt="instagram example" className="homeImages" src={require('../../assets/ig2.png')}/>
								<div className="homeImagesInfo">@neymar x Beats By Dre</div>
								<div className="homeImagesInfo">Product Placement = $500,000</div>
							</div>
							<div className="col-sm-4 text-center">
								<img alt="instagram example" className="homeImages" src={require('../../assets/ig3.png')}/>
								<div className="homeImagesInfo">@devinbrugman x OWYN</div>
								<div className="homeImagesInfo">Product Placement = $1,750</div>
							</div>
						</div>
						<div className="row">&nbsp;</div>
						</div>
					)}
				/>
			</div>

		</div>
		);
	}
}

export default HomePage;
