import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';
// Services
import itemService from '../../services/itemService';
// Components
import NavBar from '../../components/NavBar/NavBar';
// Stylesheets
import './MediaValuePage.css';

class MediaValuePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			postData: null,
			url: 'https://www.instagram.com/p/BvmpcOWhHId/',
			embedUrl: ''
		}
	}
	componentDidMount() {
		itemService.igTestFunc(this.state.url).then(postData => {
			this.setState({
		    postData: postData,
		    embedUrl: `${this.state.url}embed`
		  });
		});
	}
	
	render() {
		return (
		<div className="container-fluid">
			<h1 className="text-center titleLine">Media Value</h1>
			<NavBar/>
			<div className="text-center mt-3 mb-3">&nbsp;</div>
			<div className="row">
				<div className="col-sm-8">
					{/* this.state.postData && <IgModal postData={this.state.postData} /> */}
					<img className="img-fluid float-right mediaValueImage" src={require('../../igmodal.png')}/>
				</div>
				<div className="col-sm-4">
					<div className="container d-flex h-100">
						<div className="row align-self-center">
							{this.state.postData &&
							<ul className="">
								<li className="">country_code: {this.state.postData.country_code}</li>
								<li>language_code: {this.state.postData.language_code}</li>
								<li>display_url: {this.state.postData.display_url.substring(0, 30)}...</li>
								<li>number_of_comments: {this.state.postData.number_of_comments}</li>
								<li>number_of_likes: {this.state.postData.number_of_likes}</li>
								<li>sponsors: {this.state.postData.sponsors}</li>
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
