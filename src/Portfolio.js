import React, {Component} from 'react'
import Header from './Header'
import SubNav from './SubNav'
import Footer from './Footer/Footer'

import {Link} from 'react-router-dom'

class Portfolio extends Component{

  componentDidMount(){
    window.loadingAlert(3000)
    window.initDogma()
  }

    Project = (data = []) =>{
        return (
            <div key={data} className="gallery-item houses apartments">
                <div className="grid-item-holder">
                    <div className="box-item">
                    <div className="wh-info-box">
                        <div className="wh-info-box-inner at">
                        <Link to={'/portfolio/project/'+data}>
                            Modern house
                        </Link>
                        <span className="folio-cat">Houses design</span>
                        </div>
                    </div>
                    <img src="images/folio/thumbs/27.jpg" alt="Alt" />
                    </div>
                </div>
            </div>
        );
    }

    loadProjects = () =>{
        var Projects = []
        for(var c=0;c<4;c++)
            Projects.push(this.Project(c))
        return Projects
    }

    render(){
        return(
            <div>
                <Header />
                <SubNav />
                <div id="wrapper">
                
  {/*=============== content-holder ===============*/}
  <div className="content-holder elem scale-bg2 transition3">
    {/*  Content  */}
    <div className="content ">
      <section className="no-padding no-border">
        {/* Filters*/}
        <div className="filter-holder filter-nvis-column">
          <div className="gallery-filters at">
            <button
              className="gallery-filter gallery-filter-active"
              data-filter="*"
            >
              All
            </button>
            <button
              className="gallery-filter "
              data-filter=".houses"
            >
              Houses
            </button>
            <button
              className="gallery-filter"
              data-filter=".interior"
            >
              Interior
            </button>
            <button
              className="gallery-filter"
              data-filter=".apartments"
            >
              Apartments
            </button>
          </div>
        </div>
        {/* filters end */}
        {/*  filter-button*/}
        <div className="filter-button vis-fc">Filter</div>
        {/*  filter-button end */}
        {/*  gallery-items */}
        <div className="gallery-items   hid-port-info" >
            {this.loadProjects()}
        </div>
        {/* end gallery items */}
      </section>
    </div>
    {/*  Content  end */}
  </div>
  {/* Content holder  end */}
</div>
<Footer />
</div>

        );
    }
}
export default Portfolio