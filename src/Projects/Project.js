import React,{Component} from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header'
import SubNav from '../SubNav'

class Project extends Component{

    constructor(props) {
        super(props);
        this.state = {
            projectID : props.match.params.id
        };
    }

    componentDidMount(){
        window.loadingAlert(3000)
        window.initDogma()
      }

    render(){
        return(
            <div >
                <Header />
                <SubNav />
                <div className="content full-height no-padding">
                <div className="fixed-info-container">
  <h3>Project Title</h3>
  <div className="separator" />
  <div className="clearfix" />
  <p>
    Curabitur bibendum mi sed rhoncus aliquet. Nulla blandit porttitor
    justo, at posuere sem accumsan nec. Sed non arcu non sem commodo
    ultricies. Sed non nisi viverra, porttitor sem nec, vestibulum
    justo tortor ornare turpis faucibus.
  </p>
  <h4>Info</h4>
  <ul className="project-details">
    <li>
      <span>Date :</span> 26.05.2014{" "}
    </li>
    <li>
      <span>Client :</span> House Big{" "}
    </li>
    <li>
      <span>Status :</span> Completed{" "}
    </li>
    <li>
      <span>Location : </span>{" "}
      <a href="https://goo.gl/maps/UzN5m" target="_blank" rel="noopener noreferrer">
        {" "}
        Kharkiv Ukraine
      </a>
    </li>
  </ul>
  <a
    href="/"
    className=" btn anim-button   trans-btn   transition  fl-l"
    target="_blank"
  >
    <span>View Project</span>
    <i className="fa fa-eye" />
  </a>
  </div>
  {/*  fixed-info-container end*/}
  {/*  resize-carousel-holder*/}
  <div className="resize-carousel-holder vis-info gallery-horizontal-holder">
    {/*  gallery_horizontal*/}
    <div
      id="gallery_horizontal"
      className="gallery_horizontal owl_carousel"
    >
      {/* gallery Item*/}
      <div className="horizontal_item">
        <div className="zoomimage">
          <img src="/images/bg/31.jpg" className="intense" alt="" />
          <i className="fa fa-expand" />
        </div>
        <img src="/images/bg/31.jpg" alt="" />
        <div className="show-info">
          <span>Info</span>
          <div className="tooltip-info">
            <h5>Nulla blandit</h5>
            <p>
              Aat posuere sem accumsan nec. Sed non arcu non sem
              commodo ultricies. Sed non nisi viverra
            </p>
          </div>
        </div>
      </div>
      {/* gallery item end*/}
      {/* gallery Item*/}
      <div className="horizontal_item">
        <div className="zoomimage">
          <img src="/images/bg/32.jpg" className="intense" alt="" />
          <i className="fa fa-expand" />
        </div>
        <img src="/images/bg/32.jpg" alt="" />
        <div className="show-info">
          <span>Info</span>
          <div className="tooltip-info">
            <h5>Nulla blandit</h5>
            <p>
              Aat posuere sem accumsan nec. Sed non arcu non sem
              commodo ultricies. Sed non nisi viverra{" "}
            </p>
          </div>
        </div>
      </div>
      {/* gallery item end*/}
      {/* gallery Item*/}
      <div className="horizontal_item">
        <div className="zoomimage">
          <img src="/images/bg/33.jpg" className="intense" alt="" />
          <i className="fa fa-expand" />
        </div>
        <img src="/images/bg/33.jpg" alt="" />
        <div className="show-info">
          <span>Info</span>
          <div className="tooltip-info">
            <h5>Nulla blandit</h5>
            <p>
              Aat posuere sem accumsan nec. Sed non arcu non sem
              commodo ultricies. Sed non nisi viverra{" "}
            </p>
          </div>
        </div>
      </div>
      {/* gallery item end*/}
      {/* gallery Item*/}
      <div className="horizontal_item">
        <div className="zoomimage">
          <img src="/images/bg/34.jpg" className="intense" alt="" />
          <i className="fa fa-expand" />
        </div>
        <img src="/images/bg/34.jpg" alt="" />
        <div className="show-info">
          <span>Info</span>
          <div className="tooltip-info">
            <h5>Nulla blandit</h5>
            <p>
              Aat posuere sem accumsan nec. Sed non arcu non sem
              commodo ultricies. Sed non nisi viverra{" "}
            </p>
          </div>
        </div>
      </div>
      {/* gallery item end*/}
      {/* gallery Item*/}
      <div className="horizontal_item">
        <div className="zoomimage">
          <img src="/images/bg/35.jpg" className="intense" alt="" />
          <i className="fa fa-expand" />
        </div>
        <img src="/images/bg/35.jpg" alt="" />
        <div className="show-info">
          <span>Info</span>
          <div className="tooltip-info">
            <h5>Nulla blandit</h5>
            <p>
              Aat posuere sem accumsan nec. Sed non arcu non sem
              commodo ultricies. Sed non nisi viverra{" "}
            </p>
          </div>
        </div>
      </div>
      {/* gallery item end*/}
      {/* gallery Item*/}
      <div className="horizontal_item">
        <div className="ifarme-holder">
          <iframe src="https://player.vimeo.com/video/143356883" title="s" />
        </div>
      </div>
      {/* gallery item end*/}
    </div>
    {/*  resize-carousel-holder*/}
    {/*  navigation */}
    <div className="customNavigation">
      <a href="/" className="prev-slide transition">
        <i className="fa fa-angle-left" />
      </a>
      <a href="/" className="next-slide transition">
        <i className="fa fa-angle-right" />
      </a>
    </div>
    {/*  navigation end*/}
  </div>
  {/*  gallery_horizontal end*/}
</div>
<Footer />
</div>

        );
    }
}
export default Project