import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
// Services
// Pages
import HomePage from '../HomePage/HomePage';
import AdCustomPage from '../AdCustomPage/AdCustomPage';
import MediaValuePage from '../MediaValuePage/MediaValuePage';
// Components
import NavBar from '../../components/NavBar/NavBar';
// Stylesheets
import './App.css';

class App extends Component {
  render() {
    return (
	<Router basename="/instagram-stats">
		<div className="App">
			{/* <NavBar/> */}
			<Route
				exact path='/'
				render={(props) => <HomePage {...props} />}
			/>
			<Route
				exact path='/ad-customization'
				render={(props) => <HomePage {...props} />}
			/>
			<Route
				exact path='/media-value'
				render={(props) => <HomePage {...props} />}
			/>
		</div>
	</Router>
    );
  }
}

export default App;
