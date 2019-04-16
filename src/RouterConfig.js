import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import WebsiteLoad from './WebsiteLoad'
import Portfolio from './Portfolio'
import Project from './Projects/Project'
import Contact from './Contact/Contact'

function RouteConfig() {
  return(
    <Router>
            <Route exact path="/" component={WebsiteLoad} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route path="/portfolio/project/:id" component={Project} />
            <Route path="/contact" component={Contact} />
    </Router>
  )
}

export default RouteConfig
