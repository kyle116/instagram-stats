import React, {Component} from 'react';
import itemService from '../../services/itemService';
import './Button.css';

class Button extends Component{
    constructor(props){
		super(props);
		this.state = {
		}
    }

    buttonClick = () => {
    	// itemService.testFunc();
    	itemService.igTestFunc();
    }

    render() {
    	return (
    		<button onClick={this.buttonClick}></button>
		);
    }
}

export default Button;