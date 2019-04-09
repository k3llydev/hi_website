import React, {Component} from 'react'
import Header from './Header'
import SubNav from './SubNav'

class Portfolio extends Component{

    Project = (data = []) =>{
        return (
            <div key={data} className="gallery-item houses apartments">
                <div className="grid-item-holder">
                    <div className="box-item">
                    <div className="wh-info-box">
                        <div className="wh-info-box-inner at">
                        <a href="portfolio-single.html" className="ajax">
                            Modern house
                        </a>
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
      window.initDogma()
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
              href="#"
              className="gallery-filter gallery-filter-active"
              data-filter="*"
            >
              All
            </button>
            <button
              href="#"
              className="gallery-filter "
              data-filter=".houses"
            >
              Houses
            </button>
            <button
              href="#"
              className="gallery-filter"
              data-filter=".interior"
            >
              Interior
            </button>
            <button
              href="#"
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
</div>

        );
    }
}
export default Portfolio