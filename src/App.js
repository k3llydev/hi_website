import React, { Component } from 'react';
import Header from './Header'
import WebsiteLoad from './WebsiteLoad'
import {BrowserRouter} from 'react-router-dom'



class App extends Component {

  constructor(){
    super()
    this.state = {
      viewingHome: true
    }
    this.updateView = this.updateView.bind(this)
  }

  updateView(newValue){
    this.setState({
      viewingHome: newValue
    })
  }

  render() {

    const viewingHome = this.state.viewingHome
    if(!viewingHome){
      return <h1>Not in home</h1>
    }

    return (
      <BrowserRouter>
        <WebsiteLoad updateView={this.updateView} />
      </BrowserRouter>
    );
  }
}
export default App;