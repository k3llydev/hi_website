import React,{Component} from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header'
import SubNav from '../SubNav'
import Details from './Details'
import {Configurations} from '../AppConfig'

class Project extends Component{

    constructor(props) {
        super(props);
        this.state = {
            projectID : props.match.params.id,
            projectName: "",
            topProjectInfo: [],
            images: []
        };
    }

    componentWillMount(){
      fetch(Configurations.API.projectInfo(this.state.projectID))
        .then((result)=>{return result.json() })
        .then((project)=>{
          if(project === "error"){
            alert("Error")
          }else{
            console.log(project)
            var Images = Object.values(project.images);
            console.log(Images)
            //Manipulate those images into JSX
            let ImageGallery = Images.map((img)=>{
              return (
              <div key={Math.random()}className="horizontal_item">
                <div className="zoomimage">
                  <img src={project.path+img} className="intense" alt="" />
                  <i className="fa fa-expand" />
                </div>
                <img src={project.path+img} alt="" />
                <div className="show-info">
                  <span>Info</span>
                  <div className="tooltip-info">
                    <h5>Imagen de muestra</h5>
                    <p>
                      Desarrollo {project.project.project}
                    </p>
                  </div>
                </div>
              </div>
              )
            })
            let TopInfo = (
              <div className="fixed-info-container">
                <h3>{project.project.project}</h3>
                  <div className="separator" />
                  <div className="clearfix" />
                  <p>
                    {project.project.address}
                  </p>
                  <h4>Características</h4>
                  <Details features={project.project.features} />
                  <a
                    href="/"
                    className=" btn anim-button   trans-btn   transition  fl-l"
                    target="_blank"
                  >
                    <span>Ver en mapa</span>
                    <i className="fa fa-eye" />
                  </a>
                  </div>
            )
            this.setState({
              projectName: project.project.project,
              images: ImageGallery,
              topProjectInfo: TopInfo
            },function(){
              window.loadingAlert(500)
              window.initDogma()
            })
          }
          
        })
    }

    componentDidMount(){
        // setTimeout(function(){
        //   window.history.replaceState(undefined, undefined, "#"+3)
        // },150)
      }

    render(){
        return(
            <div >
                <Header />
                <SubNav />
                <div className="content full-height no-padding">
                {this.state.topProjectInfo}
  {/*  fixed-info-container end*/}
  {/*  resize-carousel-holder*/}
  <div className="resize-carousel-holder vis-info gallery-horizontal-holder">
    {/*  gallery_horizontal*/}
    <div
      id="gallery_horizontal"
      className="gallery_horizontal owl_carousel"
    >
      {this.state.images}
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