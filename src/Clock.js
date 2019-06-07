import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			time: new Date().toLocaleDateString()
		};
	}

	componentDidMount() {
		this.intervalID = setInterval(
			() => this.updateClock(), 
			1000
		);
	}

	componentWillMount() {
		clearInterval(this.intervalID);
	}

	updateClock() {
		this.setState({
			time: new Date().toLocaleString()
		});
	}

	render() {
		return(
			<p>
				The Clock is Ticking 
					<p>
						{this.state.time}
					</p>
			</p>
		);
	}
}

export default Clock;