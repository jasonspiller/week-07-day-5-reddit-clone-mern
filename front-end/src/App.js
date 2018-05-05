import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
//import TextPost from './components/textPost/TextPost';

class App extends Component {
  render() {
    return (
      <div className="App">
				<Header />
        {/* <TextPost/>
        <TextPost/>
        <TextPost/> */}
      </div>
    );
  }
}

export default App;
