import React, { Component } from 'react';
import './input.css';

// Front page
class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
		};
		this._handleKeyPress = this._handleKeyPress.bind(this);
		this.clearInput = this.clearInput.bind(this);
		this._handleChange = this._handleChange.bind(this);
	}
	_handleKeyPress(e) {
		if (e.key === 'Enter') {
			let newMsg = this.state.input;
			this.props.onChange(newMsg);
			this.clearInput();
		}
	}
	_handleChange(e) {
		this.setState({input: e.target.value });
	}
	clearInput() {
		this.setState({input: '',});
		console.log("TEST");
	}
	render() {
		return (
			 <div className="input-line-container">> <input type="text"
			        value={this.state.input}
			        onKeyPress={this._handleKeyPress}
			        className="input-line"
			        onChange={this._handleChange}
			        spellCheck="false"
			        autoFocus></input>
			        </div>
		);
	}
}

export default Input;
