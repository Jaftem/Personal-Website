import React, { Component } from 'react';
import './cmdline.css';
import Input from './input/input';
import LinesList from './linesList/linesList';

// Front page

class CmdLine extends Component {
	constructor(props, context) {
		super(props);
		this.state = {
			messages: [],
		};
		this.newMessageHandler = this.newMessageHandler.bind(this);
		this.sendNewMessage = this.sendNewMessage.bind(this);
	}

	newMessageHandler(newMsg) {
		switch(newMsg) {
			case 'hello':
				this.sendNewMessage('~ hello');
				this.sendNewMessage('Hi, my name is <span class="name">Jeremy Aftem</span> and I am a CS student living in <span class="yellow-span">sunny Los Angeles, California</span>. I love to build, develop, and create things that people will find useful. In my spare time, I photograph and film my life.<br/>&nbsp;<br/>Type `<span class="pink-span">help</span>` for a list of available commands.');
				break;
			case 'help':
				this.sendNewMessage('~ help');
				this.sendNewMessage('<span class="cyan-span">AVAILABLE COMMANDS:</span> <br/>&nbsp;&nbsp;&nbsp;`hello`   - welcome message<br/>&nbsp;&nbsp;&nbsp;`resume`  - link to resume<br />&nbsp;&nbsp;&nbsp;`github` - link to github<br\>&nbsp;&nbsp;&nbsp;`contact` - contact information<br />&nbsp;&nbsp;&nbsp;`about` - About this website<br/>&nbsp;&nbsp;&nbsp;`clear`   - clear terminal');
				break;
			case 'resume':
				this.sendNewMessage('~ resume');
				this.sendNewMessage('Viewing my resume is as simple as clicking <a href="https://drive.google.com/file/d/0BywUZPjWJGBbaEhEYl84T2ttaE0/view"><span class="green-span">here</span></a>!');
				break;
			case 'github':
				this.sendNewMessage('~ github');
				this.sendNewMessage('You can check out what I\'m currently working on by visiting <a href="http://www.github.com/jaftem/"><span class="green-span">/Jaftem</span>.');
				break;
			case 'contact':
				this.sendNewMessage('~ contact');
				this.sendNewMessage('<span class="cyan-span">CONTACT INFORMATION:</span> <br/>&nbsp;&nbsp;&nbsp;Email: aftem@usc.edu<br />&nbsp;&nbsp;&nbsp;See `<span class="pink-span">resume</span>` for more ways you can get in touch with me.');
				break;
			case 'ls':
				this.sendNewMessage('~ ls');
				this.sendNewMessage('website.js<br />README.md<br />thisIsntARealTerminal/')
				break;
			case 'about':
				this.sendNewMessage('~ about');
				this.sendNewMessage('<span class="pink-span">ABOUT THIS WEBSITE:</span><br />Using <span class="cyan-span">React</span> to build this website was complete overkill.<br />By Jeremy Aftem.')
				break;
			case 'clear':
				this.setState({messages: [], });
				break;
			default:
				this.sendNewMessage('~ ' + newMsg);
				this.sendNewMessage('Unrecognized command. Type `<span class="pink-span">help</span>` for a list of available commands.');
		}
	}

	sendNewMessage(newMsg) {
		let msgs = this.state.messages;
		msgs.push(newMsg);
		this.setState({messages: msgs});
	}

  render() {
    return (
      <div className="cmd-container">
      <div className="cmd-line">
      	<LinesList messages={this.state.messages} />
      	<Input onChange={this.newMessageHandler} />
      </div>
      </div> 
    );
  }

  // When a new line is entered
  newLine(msg) {
  	let msgs = this.state.messages;
  	msgs.concat(msg);
  	this.setState({messages: msgs});
  }
}

export default CmdLine;