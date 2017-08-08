import React, { Component } from 'react';
import ReactGA from 'react-ga';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import CmdLine from './components/cmdline/cmdline';
// Front page

class App extends Component {
  constructor(props) {
    super(props);
    document.title = 'Jeremy Aftem'

    ReactGA.initialize('UA-104170423-1')
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }
  onChangeHandler() {
    const node = ReactDOM.findDOMNode(this.messagesEnd);
    var millisecondsToWait = 1;
    setTimeout(function() {
      node.scrollIntoView({ behavior: "smooth" });
    }, millisecondsToWait);
  }
  render() {
    return (
      <div className="app-container">
        <div className="app-header">
         <div className="nav">Jeremy Aftem</div>
         <div className="links">
           <span className="link"><a href="http://www.jeremyaftem.com/blog">blog</a></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <span className="link"><a href="http://www.twitter.com/jaftem">twitter</a></span>
         </div>
        </div>
        <div className="app-body">
          I'm a creator, designer, and engineer.
          <div className="tag-line">Get to know me and my work by using the terminal below. Type <span className="code">hello</span> and then hit <span className="code">enter</span> to get started, or type <span className="code">help</span> for a list of available commands. </div>
          <div className="cmd-input">
            <div className="cmd-input-inner">
              <CmdLine onChange={this.onChangeHandler.bind(this)} />
            </div>
          </div>
        </div>
        <div className="buffer-space"/>
               <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }} />

             <div className="app-footer">
               <a href="http://www.github.com/Jaftem/Personal-Website"><img className="github" src={require('./github.png')} alt={"Check out this website's code on my Github!"}/></a>
             </div>
      </div>
    );
  }
}

export default App;
