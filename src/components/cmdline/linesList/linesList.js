import React, { Component } from 'react';
import './linesList.css';

class LinesList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: props.messages,
		}
	}
  render() {
  	let messageNodes = this.props.messages.map(function(msg) {
  		return (<Line msg={msg} />);
  	})
    return (
    	<ul className="lines-list">
	    	{messageNodes}
    	</ul>
    );
  }
}

class Line extends Component {
	constructor(props) {
		super(props);
	}
  render() {
  	let msg = this.props.msg;
    return (
    		<li className="line"><div dangerouslySetInnerHTML={{__html: msg}}></div></li>
    );
  }
}

export default LinesList;
