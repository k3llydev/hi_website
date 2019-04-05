import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import SubNav from './SubNav'
import {Configurations} from './AppConfig'

class WebsiteLoad extends Component{

    constructor(){
        super()
        console.log("constructor run")
    }

    componentDidMount(){
        fetch(Configurations.API.projects())
            .then(response => response.json())
            .then(data => this.setState({
                projects: data
            }));
    }

    render(){
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
        {/* 1 */}
        <div className="hero-grid">
          <div
            className="hero-slider  owl-carousel"
            data-attime={3220}
            data-rtlt="false"
          >
            <div className="item">
              <div
                className="bg"
                style={{ backgroundImage: "url(images/bg/27.jpg)" }}
              />
            </div>
            <div className="item">
              <div
                className="bg"
                style={{ backgroundImage: "url(images/bg/2.jpg)" }}
              />
            </div>
            <div className="item">
              <div
                className="bg"
                style={{ backgroundImage: "url(images/bg/3.jpg)" }}
              />
            </div>
          </div>
        </div>
        {/* 1 end */}
        {/* 2 */}
        <div className="hero-grid">
          <div
            className="hero-slider owl-carousel"
            data-attime={3220}
            data-rtlt="false"
          >
            <div className="item">
              <div
                className="bg"
                style={{ backgroundImage: "url(images/bg/26.jpg)" }}
              />
            </div>
            <div className="item">
              <div
                className="bg"
                style={{ backgroundImage: "url(images/bg/20.jpg)" }}
              />
            </div>
            <div className="item">
              <div
                className="bg"
                style={{ backgroundImage: "url(images/bg/5.jpg)" }}
              />
            </div>
          </div>
        </div>
        {/* 2end */}
        {/* 3 */}
        <div className="hero-grid">
          <div
            className="hero-slider owl-carousel"
            data-attime={3220}
            data-rtlt="true"
          >
            <div className="item">
              <div
                className="bg"
                style={{ backgroundImage: "url(images/bg/8.jpg)" }}
              />
            </div>
            <div className="item">
              <div
                className="bg"
                style={{ backgroundImage: "url(images/bg/11.jpg)" }}
              />
            </div>
            <div className="item">
              <div
                className="bg"
                style={{ backgroundImage: "url(images/bg/13.jpg)" }}
              />
            </div>
          </div>
        </div>
        {/* 3end */}
        {/* 4 */}
        <div className="hero-grid">
          <div
            className="hero-slider owl-carousel"
            data-attime={3220}
            data-rtlt="true"
          >
            <div className="item">
              <div
                className="bg"
                style={{ backgroundImage: "url(images/bg/2.jpg)" }}
              />
            </div>
            <div className="item">
              <div
                className="bg"
                style={{ backgroundImage: "url(images/bg/7.jpg)" }}
              />
            </div>
            <div className="item">
              <div
                className="bg"
                style={{ backgroundImage: "url(images/bg/9.jpg)" }}
              />
            </div>
          </div>
        </div>
        {/* 4end */}
        <div className="overlay" />
        {/* enter-wrap */}
        <div className="enter-wrap-holder cent-holder wht-bg">
          <div className="enter-wrap">
            <h3>
              Habitare <br /> Inmobiliaria
            </h3>
            <Link to="/porfolio" className="ajax btn anim-button trans-btn transition ">
              <span>Enter site</span>
              <i className="fa fa-long-arrow-right" />
            </Link>
          </div>
        </div>
        {/* enter-wrap end  */}
      </div>
      {/* full-height-wrap end  */}
    </div>
    {/* Content   end */}
    {/* share  */}
    <div className="share-inner">
      <div
        className="share-container  isShare"
        data-share="['facebook','googleplus','twitter','linkedin']"
      />
      <div className="close-share" />
    </div>
    {/* share end */}
  </div>
  {/* Content holder  end */}
</div>

        );
    }
}
export default WebsiteLoad;