import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import WebsiteLoad from './WebsiteLoad'
import Portfolio from './Portfolio'

function RouteConfigExample() {
  return(
    <Router>
            <Route exact path="/" component={WebsiteLoad} />
            <Route path="/portfolio" component={Portfolio} />
    </Router>
  )
}

export default RouteConfigExample;
