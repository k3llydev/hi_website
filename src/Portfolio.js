import React, {Component} from 'react'
import Header from './Header'
import SubNav from './SubNav'
import Footer from './Footer/Footer'
import CustomSearch from './CustomSearch'
import {Configurations} from './AppConfig'
import PortfolioItem from './Portfolio/PortfolioItem'



class Portfolio extends Component{

  constructor(){
    super()
    this.state = {
      showedProjectsData: [],
      projects: [],
      allProjects: []
    }
  }

  componentDidMount(){
    window.loadingAlert(1500)
    this.setState(prevState=>({
      showedProjectsData: prevState.allProjects
    }))
  }

  componentWillMount(){
    fetch(Configurations.API.projects())
            .then(response => response.json())
            .then(result => {
              //Projects to display in DOM
              let projectsToExport = result.map((data)=>{
                return <PortfolioItem data={data} />
              })
              this.setState({allProjects: result})
              this.setState({projects: projectsToExport},function(){
                window.initDogma()
              })
              //console.log(this.state.projects)
            })
  }


  handleZoneFilter = (filter) =>{
    const {allProjects} = this.state
    this.setState({
      projects: []
    })
    if( filter === "TODAS" ){
      let filtered = allProjects.map(p=>{//Showed projects JSX
        return <PortfolioItem data={p} />
      })

      this.setState({
        projects: filtered
      })


    }else{
      let filtered = allProjects.map((p)=>{//Projects in JSX rendered
        let projectAddress = p.project.address.toLowerCase()
        if( projectAddress.indexOf( filter.toLowerCase() ) >= 0 ){
          return <PortfolioItem data={p} />
        }
        return ""
      })

      this.setState({
        projects: filtered,
      })
    }
    
  }


  handlePriceFilter = (filter) =>{
    const {allProjects} = this.state
    if( filter === "TODOS" ){
      let filtered = allProjects.map(p=>{
        return <PortfolioItem data={p} />
      })
      this.setState({
        projects: filtered
      })
    }else{
      let Range = [ (filter*1000000), ((filter+1)*1000000) ]
      this.setState({ //Clear all projects listed already
        projects: []
      })
      let filtered = allProjects.map(p=>{
        let ProjectPrice = p.project.price
        if( ProjectPrice>= Range[0] && ProjectPrice<=Range[1] ){
          return <PortfolioItem data={p} />
        }
      })
      this.setState({
        projects: filtered
      })
    }
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
        <CustomSearch zoneFilter={this.handleZoneFilter} priceFilter={this.handlePriceFilter} />
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