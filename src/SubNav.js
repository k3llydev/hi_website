import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class SubNav extends Component{
  //add subnav class to elements with an <ul> inside them to make a sub list.
    render(){
        return(
            <div>
  {/*  Navigation */}
  <div className="nav-overlay" />
  <div className="nav-inner isDown">
    <nav>
      <ul>
        <li>
          <Link to="/">
            Inicio
          </Link>
        </li>
        <li className="subnav">
          <a href="/portfolio">
            Desarrollos
          </a>
          {/*  Subnav  */}
          <ul>
           {this.props.projects}
          </ul>
          {/*  Subnav  end*/}
        </li>
        <li>
          <a href="/contact" className="ajax">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  </div>
  {/*  Navigation end */}
</div>

        );
    }
}
export default SubNav;