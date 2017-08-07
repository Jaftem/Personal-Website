import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './cmdline.css';
import Input from './input/input';
import LinesList from './linesList/linesList';

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
				this.sendNewMessage('<span class="cyan-span">AVAILABLE COMMANDS:</span> <br/>&nbsp;&nbsp;&nbsp;`hello`   - welcome message<br/>&nbsp;&nbsp;&nbsp;`resume`  - link to resume<br />&nbsp;&nbsp;&nbsp;`github` - link to github<br\>&nbsp;&nbsp;&nbsp;`contact` - contact information<br />&nbsp;&nbsp;&nbsp;`about` - about this website<br/>&nbsp;&nbsp;&nbsp;`clear`   - clear terminal');
				break;
			case 'resume':
				this.sendNewMessage('~ resume');
				this.sendNewMessage('Viewing my resume is as simple as clicking <a href="https://drive.google.com/file/d/0BywUZPjWJGBbTnRMaGJ4ZnZna2s/view?usp=sharing"><span class="green-span">here</span></a>!');
				break;
			case 'github':
				this.sendNewMessage('~ github');
				this.sendNewMessage('You can check out what I\'m currently working on by visiting <a href="http://www.github.com/jaftem/"><span class="green-span">/Jaftem</span>.');
				break;
			case 'contact':
				this.sendNewMessage('~ contact');
				this.sendNewMessage('<span class="cyan-span">CONTACT INFORMATION:</span> <br/>I\'ll try to get back to you ASAP!<br/>&nbsp;&nbsp;&nbsp;<span class="yellow-span">Email: aftem@usc.edu</span><br />&nbsp;&nbsp;&nbsp;Or see `<span class="pink-span">resume</span>` for more ways you can get in touch with me.');
				break;
			case 'ls':
				this.sendNewMessage('~ ls');
				this.sendNewMessage('website.js<br />README.md<br />thisIsntARealTerminal/')
				break;
			case 'about':
				this.sendNewMessage('~ about');
				this.sendNewMessage('<span class="pink-span">ABOUT THIS WEBSITE:</span><br />Built with <span class="cyan-span">React</span>.  />By Jeremy Aftem.')
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
		this.props.onChange();
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
}

export default CmdLine;
