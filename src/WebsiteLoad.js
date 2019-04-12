import React,{Component} from 'react'
import Hero from './Home/Hero'
import SubNav from './SubNav'

class WebsiteLoad extends Component{
  componentDidMount(){
    window.loadingAlert(0)
    //window.initDogma()
  }
  
    render(){
        return(
            <div id="wrapper">
  {/*=============== content-holder ===============*/}
  <div className="content-holder elem scale-bg2   no-padding">
    {/* Page title */}
    <div className="dynamic-title">Bienvenido...</div>
    {/* Page title  end*/}
    {/* NAVIGATION --EXTRAA */}
          <SubNav />
    {/* END NAVIGATION --EXTRA */}

    {/*  Content */}
    <div className="content full-height no-padding home-content ">
      {/*full-height wrap */}
        <Hero />
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