import React, { Component } from 'react';
import './Header.css';

class App extends Component {
  render() {
    return (
			<header>
				<h1>
					<span className="logo" lang="zh-CN">读</span>
					<br />
					Chinese Reddit
					<br />
					<span className="tagline">The Front Page of the Chinese Web</span>
				</h1>
			</header>
    );
  }
}

export default App;
