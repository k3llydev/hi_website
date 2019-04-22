import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Configurations} from './AppConfig'


class SubNav extends Component{

  constructor(){
    super()
    this.state = {
      projects: []
    }
  }

  componentWillMount(){
    fetch(Configurations.API.projects())
      .then(result=>{return result.json()})
      .then(projects=>{
        let Options = projects.map((p,index)=>{
          return <Link key={index} className="li-like-a" to={"/portfolio/project/"+p.id}><li >{p.project.project}</li></Link>
        })
        this.setState({
          projects: Options
        })
      })
  }

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
          <Link to="/portfolio">
            Desarrollos
          </Link>
          {/*  Subnav  */}
          <ul>
           {this.state.projects}
          </ul>
          {/*  Subnav  end*/}
        </li>
        <li>
          <Link to="/contact">
            Contacto
          </Link>
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