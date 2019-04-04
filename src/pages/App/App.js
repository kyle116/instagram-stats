import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
// Services
// Pages
import HomePage from '../HomePage/HomePage';
import AdCustomPage from '../AdCustomPage/AdCustomPage';
import MediaValuePage from '../MediaValuePage/MediaValuePage';
// Stylesheets
import './App.css';

class App extends Component {
  render() {
    return (
	<Router basename="/instagram-stats">
		<div className="App">
			<Route
				exact path='/'
				render={(props) => <HomePage {...props} />}
			/>
			<Route
				exact path='/ad-customization'
				render={(props) => <AdCustomPage {...props} />}
			/>
			<Route
				exact path='/media-value'
				render={(props) => <MediaValuePage {...props} />}
			/>
		</div>
	</Router>
    );
  }
}

export default App;
