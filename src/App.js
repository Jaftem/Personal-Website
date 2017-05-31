import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CmdLine from './components/cmdline/cmdline';
// Front page

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="app-header">
         <div className="nav">Jeremy Aftem<br /><a href="http://www.jeremyaftem.com/blog"><span className="link-span">blog</span></a></div>
        </div>
        <div className="app-body">
          I'm a creator, designer, and engineer.
          <div className="tag-line">Get to know me and my work by using the terminal below. Type <span className="code">hello</span> and then hit <span className="code">enter</span> to get started, or type <span className="code">help</span> for a list of available commands. </div>
          <div className="cmd-input">
            <div className="cmd-input-inner">
              <CmdLine />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
