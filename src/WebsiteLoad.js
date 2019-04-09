import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Hero from './Home/Hero'

class WebsiteLoad extends Component{
    render(){
      // window.initDogma()
        return(
            <div id="wrapper">
  {/*=============== content-holder ===============*/}
  <div className="content-holder elem scale-bg2   no-padding">
    {/* Page title */}
    <div className="dynamic-title">Services</div>
    {/* Page title  end*/}

    {/*  Content */}
    <div className="content full-height no-padding home-content ">
      {/*full-height wrap */}
      <div className="full-height-wrap">
        <Hero />
        <div className="overlay" />
        {/* enter-wrap */}
        <div className="enter-wrap-holder cent-holder wht-bg">
          <div className="enter-wrap">
            <h3>
              <img src="http://habitareinmobiliaria.com.mx/assets/img/logo-habitare-ok.png" alt="Habitare logo" />
            </h3>
            <Link to="/portfolio" className="ajax btn anim-button trans-btn transition ">
              <span>Todos los desarrollos</span>
              <i className="fa fa-long-arrow-right" />
            </Link>
          </div>
        </div>
        {/* enter-wrap end  */}
      </div>
      {/* full-height-wrap end  */}
    </div>
    {/* Content   end */}
  </div>
  {/* Content holder  end */}
</div>

        );
    }
}
export default WebsiteLoad;