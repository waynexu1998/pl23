import React, { Component } from 'react';
import grain from '../../images/Rectangle.png';
import './scss/Background.scss';

class Background extends Component {
	render() {
		return(
			<div className="Background">
				<img className="Backdrop-grain" src={ grain } alt="grain"/>
				<div className="Backdrop-overlay"/>
				<div className="Backdrop-blur"/>
				<div className="Backdrop-circle"/>
			</div>
		);
	}
}

export default Background;