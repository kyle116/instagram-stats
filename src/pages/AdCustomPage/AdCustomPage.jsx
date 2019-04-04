import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';
// Services
import itemService from '../../services/itemService';
// Components
import IgModal from '../../components/IgModal/IgModal';
import NavBar from '../../components/NavBar/NavBar';
// Stylesheets
import './AdCustomPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class AdCustomPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			postData: null,
			url: 'https://www.instagram.com/p/BvmpcOWhHId/',
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
				'product-placement': false,
				'instagram-story': false
			},
			adClasses: ''
		}
	    this.onChange = this.onChange.bind(this);
	    this.submitUrl = this.submitUrl.bind(this);
	}
	componentDidMount() {
		// itemService.igTestFunc(this.state.url).then(postData => {
		// 	this.setState({
		//     postData: postData,
		//     embedUrl: `${this.state.url}embed`
		//   });
		// });
		var buttonState = Object.assign({}, this.state.buttons);
		var adClasses = document.getElementById('ad-overlay').className;
		var radioElements = document.getElementsByClassName('square-radio');
		for (var i = 0; i < radioElements.length; i++) {
			radioElements[i].addEventListener('click', function() {
				console.log(this.id)
				
		        this.classList.toggle('square-radio--clicked');
		        switch(this.id) {
		        	case 'branded-content':
		        		buttonState['branded-content']['active'] = !buttonState['branded-content']['active'];
		        		break;
		        	case 'small':
		        		buttonState['branded-content']['size']['small'] = !buttonState['branded-content']['size']['small'];
		        		// console.log(buttonState)
		        		if(buttonState['branded-content']['size']['small']) {
		        			adClasses += ' small';
		        		} else {
		        			adClasses = adClasses.replace(' small', '');
		        		}
		        		break;
	        		case 'medium':
	        			buttonState['branded-content']['size']['medium'] = !buttonState['branded-content']['size']['medium'];
	        			if(buttonState['branded-content']['size']['medium']) {
		        			adClasses += ' medium';
		        		} else {
		        			adClasses = adClasses.replace(' medium', '');
		        		}
	        			break;
        			case 'large':
        				buttonState['branded-content']['size']['large'] = !buttonState['branded-content']['size']['large'];
	        			if(buttonState['branded-content']['size']['large']) {
		        			adClasses += ' large';
		        		} else {
		        			adClasses = adClasses.replace(' large', '');
		        		}
	        			break;
        			case 'center':
        				buttonState['branded-content']['placement']['center'] = !buttonState['branded-content']['placement']['center'];
	        			if(buttonState['branded-content']['placement']['center']) {
		        			adClasses += ' center';
		        		} else {
		        			adClasses = adClasses.replace(' center', '');
		        		}
	        			break;
        			case 'corners':
        				buttonState['branded-content']['placement']['corners'] = !buttonState['branded-content']['placement']['corners'];
	        			if(buttonState['branded-content']['placement']['corners']) {
		        			adClasses += ' corners';
		        		} else {
		        			adClasses = adClasses.replace(' corners', '');
		        		}
	        			break;
        			case 'sides':
        				buttonState['branded-content']['placement']['sides'] = !buttonState['branded-content']['placement']['sides'];
	        			if(buttonState['branded-content']['placement']['sides']) {
		        			adClasses += ' sides';
		        		} else {
		        			adClasses = adClasses.replace(' sides', '');
		        		}
	        			break;
        			case 'overlay':
        				buttonState['branded-content']['prominence']['overlay'] = !buttonState['branded-content']['prominence']['overlay'];
	        			if(buttonState['branded-content']['prominence']['overlay']) {
		        			adClasses += ' overlay';
		        		} else {
		        			adClasses = adClasses.replace(' overlay', '');
		        		}
	        			break;
        			case 'background':
        				buttonState['branded-content']['prominence']['background'] = !buttonState['branded-content']['prominence']['background'];
	        			if(buttonState['branded-content']['prominence']['background']) {
		        			adClasses += ' background';
		        		} else {
		        			adClasses = adClasses.replace(' background', '');
		        		}
	        			break;
        			case 'foreground':
        				buttonState['branded-content']['prominence']['foreground'] = !buttonState['branded-content']['prominence']['foreground'];
	        			if(buttonState['branded-content']['prominence']['foreground']) {
		        			adClasses += ' foreground';
		        		} else {
		        			adClasses = adClasses.replace(' foreground', '');
		        		}
	        			break;
        			case 'paid-partnership':
        				buttonState['paid-partnership'] = !buttonState['paid-partnership'];
	        			if(buttonState['branded-content']['paid-partnership']) {
		        			adClasses += ' paid-partnership';
		        		} else {
		        			adClasses = adClasses.replace(' paid-partnership', '');
		        		}
	        			break;
        			case 'product-placement':
        				buttonState['product-placement'] = !buttonState['product-placement'];
	        			if(buttonState['branded-content']['product-placement']) {
		        			adClasses += ' product-placement';
		        		} else {
		        			adClasses = adClasses.replace(' product-placement', '');
		        		}
	        			break;
        			case 'instagram-story':
        				buttonState['instagram-story'] = !buttonState['instagram-story'];
	        			if(buttonState['branded-content']['instagram-story']) {
		        			adClasses += ' instagram-story';
		        		} else {
		        			adClasses = adClasses.replace(' instagram-story', '');
		        		}
	        			break;
		        }
		        document.getElementById('ad-overlay').className = adClasses;
		        console.log('classes', document.getElementById('ad-overlay').className)
		    });
		}
	}

	onChange(e) {
		// this.setState({
		//   url: e.target.value
		// });
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
			<h1 className="text-center titleLine">Ad Customization</h1>
			<NavBar/>
			<div className="text-center mt-3 mb-3">&nbsp;</div>
			<div className="row">
				<div className="col-sm-7">
					{/* this.state.postData && <IgModal postData={this.state.postData} /> */}
					<div className="container-ad-image">
						<div className="ig-modal-pic">
							<div className="container-ad">
								<div id="ad-overlay" className="ad"></div>
							</div>
							<img className="img-fluid invisible" src={require('../../igmodal.png')}/>
						</div>
					</div>
				</div>

				<div className="col-sm-5">
					<div className="container d-flex h-100">
						<div className="row align-self-center w-100">
							<div className="container">
								<div className="row">
									<div className="container">
										<div className="row">
									        <div id="branded-content" className="square-radio">
									            <div className="square-radio--content"></div>
									        </div>
											<div>Branded Content</div>
										</div>

										<div className="row">
											<div className="col-md-3 text-right">Size</div>
											<div className="col-md-3">
												<div className="row">
													<div id="small" className="square-radio">
											            <div className="square-radio--content"></div>
											        </div>
													<div>Small</div>
												</div>
											</div>
											<div className="col-md-3">
												<div className="row">
													<div id="medium" className="square-radio">
											            <div className="square-radio--content"></div>
											        </div>
													<div>Medium</div>
												</div>
											</div>
											<div className="col-md-3">
												<div className="row">
													<div id="large" className="square-radio">
											            <div className="square-radio--content"></div>
											        </div>
													<div>Large</div>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-md-3 text-right">Placement</div>
											<div className="col-md-3">
												<div className="row">
													<div id="center" className="square-radio">
											            <div className="square-radio--content"></div>
											        </div>
													<div>Center</div>
												</div>
											</div>
											<div className="col-md-3">
												<div className="row">
													<div id="corners" className="square-radio">
											            <div className="square-radio--content"></div>
											        </div>
													<div>Corners</div>
												</div>
											</div>
											<div className="col-md-3">
												<div className="row">
													<div id="sides" className="square-radio">
											            <div className="square-radio--content"></div>
											        </div>
													<div>Sides</div>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-md-3 text-right">Prominence</div>
											<div className="col-md-3">
												<div className="row">
													<div id="overlay" className="square-radio">
											            <div className="square-radio--content"></div>
											        </div>
													<div>Overlay</div>
												</div>
											</div>
											<div className="col-md-3">
												<div className="row">
													<div id="background" className="square-radio">
											            <div className="square-radio--content"></div>
											        </div>
													<div>Background</div>
												</div>
											</div>
											<div className="col-md-3">
												<div className="row">
													<div id="foreground" className="square-radio">
											            <div className="square-radio--content"></div>
											        </div>
													<div>Foreground</div>
												</div>
											</div>
										</div>
									</div>
							    </div>
							    <div className="row">
							        <div id="paid-partnership" className="square-radio">
							            <div className="square-radio--content"></div>
							        </div>
							    	<div>Paid Partnership</div>
							    </div>
							    <div className="row">
							        <div id="product-placement" className="square-radio">
							            <div className="square-radio--content"></div>
							        </div>
							    	<div>Product Placement</div>
							    </div>
							    <div className="row">
							        <div id="instagram-story" className="square-radio">
							            <div className="square-radio--content"></div>
							        </div>
							    	<div>Instagram Story</div>
							    </div>
						    </div>
					    </div>
				    </div>
			    </div>

			    <div className="container">
				    <div className="row">
					    <div class="col text-center">
					    	<button type="button" className="btn btn-success w-25">Done</button>
					    </div>
				    </div>
			    </div>
			</div>
		</div>
		);
	}
}

export default AdCustomPage;
