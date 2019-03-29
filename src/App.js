import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
// Services
// Pages
import HomePage from './pages/HomePage/HomePage';
// Stylesheets
import './App.css';

class App extends Component {
  render() {
    return (
	<Router>
		<div className="App">
			<Route
				exact path='/'
				render={(props) => <HomePage {...props} />}
			/>
		</div>
	</Router>
    );
  }
}

export default App;
