import React, { Component } from 'react';
// import Header from './Header'
import WebsiteLoad from './WebsiteLoad'
import {BrowserRouter} from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <WebsiteLoad updateView={this.updateView} />
      </BrowserRouter>
    );
  }
}
export default App;