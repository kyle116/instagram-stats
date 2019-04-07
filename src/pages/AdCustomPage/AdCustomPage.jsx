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
			url: 'https://www.instagram.com/p/BvnFryzgu0_/',
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
	    this.toggleSquareClick = this.toggleSquareClick.bind(this);
	}
	componentDidMount() {
		// itemService.igTestFunc(this.state.url).then(postData => {
		// 	this.setState({
		//     postData: postData,
		//     embedUrl: `${this.state.url}embed`
		//   });
		// });
	}

	toggleSquareClick(e, parentCatergory) {
		var buttonState = Object.assign({}, this.state.buttons);
		var adClasses = this.state.adClasses;
		switch(e.target.id) {
        	case 'branded-content':
        		buttonState['branded-content']['active'] = !buttonState['branded-content']['active'];
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
				buttonState['product-placement']['active'] = !buttonState['product-placement']['active'];
    			if(buttonState['product-placement']['active']) {
        			adClasses += ' product-placement';
        		} else {
        			adClasses = adClasses.replace(' product-placement', '');
        		}
    			break;
			case 'instagram-story':
				buttonState['instagram-story']['active'] = !buttonState['instagram-story']['active'];
    			if(buttonState['instagram-story']['active']) {
        			adClasses += ' instagram-story';
        		} else {
        			adClasses = adClasses.replace(' instagram-story', '');
        		}
    			break;
			case 'small':
        		buttonState[parentCatergory]['size']['small'] = !buttonState[parentCatergory]['size']['small'];
        		if(buttonState[parentCatergory]['size']['small']) {
        			adClasses += ' small';
        		} else {
        			adClasses = adClasses.replace(' small', '');
        		}
        		break;
    		case 'medium':
    			buttonState[parentCatergory]['size']['medium'] = !buttonState[parentCatergory]['size']['medium'];
    			if(buttonState[parentCatergory]['size']['medium']) {
        			adClasses += ' medium';
        		} else {
        			adClasses = adClasses.replace(' medium', '');
        		}
    			break;
			case 'large':
				buttonState[parentCatergory]['size']['large'] = !buttonState[parentCatergory]['size']['large'];
    			if(buttonState[parentCatergory]['size']['large']) {
        			adClasses += ' large';
        		} else {
        			adClasses = adClasses.replace(' large', '');
        		}
    			break;
			case 'center':
				buttonState[parentCatergory]['placement']['center'] = !buttonState[parentCatergory]['placement']['center'];
    			if(buttonState[parentCatergory]['placement']['center']) {
        			adClasses += ' center';
        		} else {
        			adClasses = adClasses.replace(' center', '');
        		}
    			break;
			case 'corners':
				buttonState[parentCatergory]['placement']['corners'] = !buttonState[parentCatergory]['placement']['corners'];
    			if(buttonState[parentCatergory]['placement']['corners']) {
        			adClasses += ' corners';
        		} else {
        			adClasses = adClasses.replace(' corners', '');
        		}
    			break;
			case 'sides':
				buttonState[parentCatergory]['placement']['sides'] = !buttonState[parentCatergory]['placement']['sides'];
    			if(buttonState[parentCatergory]['placement']['sides']) {
        			adClasses += ' sides';
        		} else {
        			adClasses = adClasses.replace(' sides', '');
        		}
    			break;
			case 'overlay':
				buttonState[parentCatergory]['prominence']['overlay'] = !buttonState[parentCatergory]['prominence']['overlay'];
    			if(buttonState[parentCatergory]['prominence']['overlay']) {
        			adClasses += ' overlay';
        		} else {
        			adClasses = adClasses.replace(' overlay', '');
        		}
    			break;
			case 'background':
				buttonState[parentCatergory]['prominence']['background'] = !buttonState[parentCatergory]['prominence']['background'];
    			if(buttonState[parentCatergory]['prominence']['background']) {
        			adClasses += ' background';
        		} else {
        			adClasses = adClasses.replace(' background', '');
        		}
    			break;
			case 'foreground':
				buttonState[parentCatergory]['prominence']['foreground'] = !buttonState[parentCatergory]['prominence']['foreground'];
    			if(buttonState[parentCatergory]['prominence']['foreground']) {
        			adClasses += ' foreground';
        		} else {
        			adClasses = adClasses.replace(' foreground', '');
        		}
    			break;
        }
        this.setState({
        	buttons: buttonState,
        	adClasses: adClasses
        })
		console.log('toggleSquareClick', e.target.id, parentCatergory)
	}
	
	render() {
		return (
		<div className="container-fluid">
			<h1 className="text-center titleLine">Ad Customization</h1>
			<NavBar/>
			<div className="text-center mt-3 mb-3">Select Options Below To Determine Ad Value</div>
			<div className="row">
				<div className="col-sm-7">
					
					<div className="container-ad-image">
						<div className="ig-modal-pic">
							<div className="container-ad">
								<div id="ad-overlay" className={this.state.adClasses}></div>
							</div>
							{/* this.state.postData && <IgModal postData={this.state.postData} /> */}
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
									        <div id="branded-content" className="square-radio" onClick={this.toggleSquareClick}>
									            <div className={`${this.state.buttons['branded-content']['active'] ? 'square-radio-clicked' : ''}`}></div>
									        </div>
											<div>Branded Content</div>
										</div>
										{ this.state.buttons['branded-content']['active'] && 
									    <div>
											<div className="row">
												<div className="col-md-3 text-right">Size</div>
												<div className="col-md-3">
													<div className="row">
														<div id="small" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'branded-content')}>
												            <div className={`${this.state.buttons['branded-content']['size']['small'] ? 'square-radio-clicked' : ''}`}></div>
												        </div>
														<div>Small</div>
													</div>
												</div>
												<div className="col-md-3">
													<div className="row">
														<div id="medium" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'branded-content')}>
												            <div className={`${this.state.buttons['branded-content']['size']['medium'] ? 'square-radio-clicked' : ''}`}></div>
												        </div>
														<div>Medium</div>
													</div>
												</div>
												<div className="col-md-3">
													<div className="row">
														<div id="large" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'branded-content')}>
												            <div className={`${this.state.buttons['branded-content']['size']['large']? 'square-radio-clicked' : ''}`}></div>
												        </div>
														<div>Large</div>
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-md-3 text-right">Placement</div>
												<div className="col-md-3">
													<div className="row">
														<div id="center" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'branded-content')}>
												            <div className={`${this.state.buttons['branded-content']['placement']['center'] ? 'square-radio-clicked' : ''}`}></div>
												        </div>
														<div>Center</div>
													</div>
												</div>
												<div className="col-md-3">
													<div className="row">
														<div id="corners" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'branded-content')}>
												            <div className={`${this.state.buttons['branded-content']['placement']['corners'] ? 'square-radio-clicked' : ''}`}></div>
												        </div>
														<div>Corners</div>
													</div>
												</div>
												<div className="col-md-3">
													<div className="row">
														<div id="sides" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'branded-content')}>
												            <div className={`${this.state.buttons['branded-content']['placement']['sides'] ? 'square-radio-clicked' : ''}`}></div>
												        </div>
														<div>Sides</div>
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-md-3 text-right">Prominence</div>
												<div className="col-md-3">
													<div className="row">
														<div id="overlay" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'branded-content')}>
												            <div className={`${this.state.buttons['branded-content']['prominence']['overlay'] ? 'square-radio-clicked' : ''}`}></div>
												        </div>
														<div>Overlay</div>
													</div>
												</div>
												<div className="col-md-3">
													<div className="row">
														<div id="background" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'branded-content')}>
												            <div className={`${this.state.buttons['branded-content']['prominence']['background'] ? 'square-radio-clicked' : ''}`}></div>
												        </div>
														<div>Background</div>
													</div>
												</div>
												<div className="col-md-3">
													<div className="row">
														<div id="foreground" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'branded-content')}>
												            <div className={`${this.state.buttons['branded-content']['prominence']['foreground'] ? 'square-radio-clicked' : ''}`}></div>
												        </div>
														<div>Foreground</div>
													</div>
												</div>
											</div>
										</div> 											
										}
									</div>
								</div>
								<div className="row">
									<div className="container">
										<div className="row">
									        <div id="product-placement" className="square-radio" onClick={this.toggleSquareClick} onClick={this.toggleSquareClick}>
									            <div className={`${this.state.buttons['product-placement']['active'] ? 'square-radio-clicked' : ''}`}></div>
									        </div>
									    	<div>Product Placement</div>
									    </div>
									    { this.state.buttons['product-placement']['active'] && 
									    <div>
											<div className="row">
												<div className="col-md-3 text-right">Size</div>
												<div className="col-md-3">
													<div className="row">
														<div id="small" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'product-placement')}>
												            <div className={`${this.state.buttons['product-placement']['size']['small'] ? 'square-radio-clicked' : ''}`}></div>
												        </div>
														<div>Small</div>
													</div>
												</div>
												<div className="col-md-3">
													<div className="row">
														<div id="medium" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'product-placement')}>
												            <div className={`${this.state.buttons['product-placement']['size']['medium'] ? 'square-radio-clicked' : ''}`}></div>
												        </div>
														<div>Medium</div>
													</div>
												</div>
												<div className="col-md-3">
													<div className="row">
														<div id="large" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'product-placement')}>
												            <div className={`${this.state.buttons['product-placement']['size']['large']? 'square-radio-clicked' : ''}`}></div>
												        </div>
														<div>Large</div>
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-md-3 text-right">Placement</div>
												<div className="col-md-3">
													<div className="row">
														<div id="center" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'product-placement')}>
												            <div className={`${this.state.buttons['product-placement']['placement']['center'] ? 'square-radio-clicked' : ''}`}></div>
												        </div>
														<div>Center</div>
													</div>
												</div>
												<div className="col-md-3">
													<div className="row">
														<div id="corners" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'product-placement')}>
												            <div className={`${this.state.buttons['product-placement']['placement']['corners'] ? 'square-radio-clicked' : ''}`}></div>
												        </div>
														<div>Corners</div>
													</div>
												</div>
												<div className="col-md-3">
													<div className="row">
														<div id="sides" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'product-placement')}>
												            <div className={`${this.state.buttons['product-placement']['placement']['sides'] ? 'square-radio-clicked' : ''}`}></div>
												        </div>
														<div>Sides</div>
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-md-3 text-right">Prominence</div>
												<div className="col-md-3">
													<div className="row">
														<div id="overlay" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'product-placement')}>
												            <div className={`${this.state.buttons['product-placement']['prominence']['overlay'] ? 'square-radio-clicked' : ''}`}></div>
												        </div>
														<div>Overlay</div>
													</div>
												</div>
												<div className="col-md-3">
													<div className="row">
														<div id="background" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'product-placement')}>
												            <div className={`${this.state.buttons['product-placement']['prominence']['background'] ? 'square-radio-clicked' : ''}`}></div>
												        </div>
														<div>Background</div>
													</div>
												</div>
												<div className="col-md-3">
													<div className="row">
														<div id="foreground" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'product-placement')}>
												            <div className={`${this.state.buttons['product-placement']['prominence']['foreground'] ? 'square-radio-clicked' : ''}`}></div>
												        </div>
														<div>Foreground</div>
													</div>
												</div>
											</div>
										</div> 											
										}
									</div>
							    </div>
							    {/*<div className="row">
							        <div id="paid-partnership" className="square-radio" onClick={this.toggleSquareClick}>
							            <div className={`${this.state.buttons['branded-content']['active'] ? 'square-radio-clicked' : ''}`}></div>
							        </div>
							    	<div>Paid Partnership</div>
							    </div>*/}
							    <div className="row">
									<div className="container">
									    <div className="row">
									        <div id="instagram-story" className="square-radio" onClick={this.toggleSquareClick}>
									            <div className={`${this.state.buttons['instagram-story']['active'] ? 'square-radio-clicked' : ''}`}></div>
									        </div>
									    	<div>24 Hr Instagram Story</div>
									    </div>
									    { this.state.buttons['instagram-story']['active'] && 
									    <div>
											<div className="row">
												<div className="col-md-3 text-right">Size</div>
												<div className="col-md-3">
													<div className="row">
														<div id="small" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'instagram-story')}>
												            <div className={`${this.state.buttons['instagram-story']['size']['small'] ? 'square-radio-clicked' : ''}`}></div>
												        </div>
														<div>Small</div>
													</div>
												</div>
												<div className="col-md-3">
													<div className="row">
														<div id="medium" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'instagram-story')}>
												            <div className={`${this.state.buttons['instagram-story']['size']['medium'] ? 'square-radio-clicked' : ''}`}></div>
												        </div>
														<div>Medium</div>
													</div>
												</div>
												<div className="col-md-3">
													<div className="row">
														<div id="large" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'instagram-story')}>
												            <div className={`${this.state.buttons['instagram-story']['size']['large']? 'square-radio-clicked' : ''}`}></div>
												        </div>
														<div>Large</div>
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-md-3 text-right">Placement</div>
												<div className="col-md-3">
													<div className="row">
														<div id="center" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'instagram-story')}>
												            <div className={`${this.state.buttons['instagram-story']['placement']['center'] ? 'square-radio-clicked' : ''}`}></div>
												        </div>
														<div>Center</div>
													</div>
												</div>
												<div className="col-md-3">
													<div className="row">
														<div id="corners" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'instagram-story')}>
												            <div className={`${this.state.buttons['instagram-story']['placement']['corners'] ? 'square-radio-clicked' : ''}`}></div>
												        </div>
														<div>Corners</div>
													</div>
												</div>
												<div className="col-md-3">
													<div className="row">
														<div id="sides" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'instagram-story')}>
												            <div className={`${this.state.buttons['instagram-story']['placement']['sides'] ? 'square-radio-clicked' : ''}`}></div>
												        </div>
														<div>Sides</div>
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-md-3 text-right">Prominence</div>
												<div className="col-md-3">
													<div className="row">
														<div id="overlay" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'instagram-story')}>
												            <div className={`${this.state.buttons['instagram-story']['prominence']['overlay'] ? 'square-radio-clicked' : ''}`}></div>
												        </div>
														<div>Overlay</div>
													</div>
												</div>
												<div className="col-md-3">
													<div className="row">
														<div id="background" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'instagram-story')}>
												            <div className={`${this.state.buttons['instagram-story']['prominence']['background'] ? 'square-radio-clicked' : ''}`}></div>
												        </div>
														<div>Background</div>
													</div>
												</div>
												<div className="col-md-3">
													<div className="row">
														<div id="foreground" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'instagram-story')}>
												            <div className={`${this.state.buttons['instagram-story']['prominence']['foreground'] ? 'square-radio-clicked' : ''}`}></div>
												        </div>
														<div>Foreground</div>
													</div>
												</div>
											</div>
										</div>
										}
									</div>
								</div>
						    </div>
					    </div>
				    </div>
			    </div>

			    <div className="container">
				    <div className="row">
					    <div className="col text-center">
				    		<Link to={'/media-value'}>
				    			<button type="button" className="btn btn-success w-25">Media Value</button>
				    		</Link>
					    </div>
				    </div>
			    </div>
			</div>
		</div>
		);
	}
}

export default AdCustomPage;
