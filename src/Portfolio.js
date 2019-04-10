import React, {Component} from 'react'
import Header from './Header'
import SubNav from './SubNav'
import Footer from './Footer/Footer'
import {Configurations} from './AppConfig'

import {Link} from 'react-router-dom'

class Portfolio extends Component{

  constructor(){
    super()
    this.state = {
      projects: []
    }
  }

  componentDidMount(){
    window.loadingAlert(3000)
    window.initDogma()
  }

  componentWillMount(){
    fetch(Configurations.API.projects())
            .then(response => response.json())
            .then(result => {
              let projectsToExport = result.map((data)=>{
                return (
                  <div key={data.id} className="gallery-item houses apartments">
                                  <div className="grid-item-holder">
                                    <div className="box-item">
                                    <div className="wh-info-box">
                                        <div className="wh-info-box-inner at">
                                        <Link to={'/portfolio/project/'+data.id}>
                                          {data.project.project}
                                        </Link>
                                        <span className="folio-cat">{data.project.address}</span>
                                        </div>
                                    </div>
                                    <img src={data.path+data.images.home} alt={data.project.project} />
                                    </div>
                                </div>
                            </div>
                )
              })
              this.setState({projects: projectsToExport})
              console.log(this.state.projects)
            })
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
        <div className="filter-button vis-fc">Buscar</div>
        {/*  filter-button end */}
        {/*  gallery-items */}
        <div className="gallery-items   hid-port-info" >
            {this.state.projects}
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