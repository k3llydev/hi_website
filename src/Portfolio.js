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
      showedZone: [],
      showedPrice: [],
      projects: [],
      allProjects: [],
      zoneFiltered: false,
      priceFiltered: false
    }
  }

  componentDidMount(){
    window.loadingAlert(1500)
  }

  componentWillMount(){
    fetch(Configurations.API.projects())
            .then(response => response.json())
            .then(result => {
              //Projects to display in DOM
              let projectsToExport = result.map((data)=>{
                return <PortfolioItem data={data} />
              })
              this.setState({allProjects: result, showedProjectsData: result})
              this.setState({projects: projectsToExport},function(){
                window.initDogma()
              })
              //console.log(this.state.projects)
            })
  }

  filter_array = (test_array) =>{
    var index = -1,
        arr_length = test_array ? test_array.length : 0,
        resIndex = -1,
        result = [];

    while (++index < arr_length) {
        var value = test_array[index];

        if (value) {
            result[++resIndex] = value;
        }
    }

    return result;
}

  generateOutput = (obj) =>{
    let filtered = obj.map(element=>{
      return (element!==null ? <PortfolioItem data={element} /> : null)
    })
    this.setState({
      showedProjectsData: [],
      projects: []
    },function(){this.setState({projects:filtered,showedProjectsData:obj})})
  }


  handleZoneFilter = (filter) =>{
    const {allProjects} = this.state
      if( filter === "TODAS" ){
        this.setState({
          zoneFiltered: false,
          showedProjectsData: allProjects
        },function(){this.generateOutput(allProjects)})
      }else{

        
      }
  }

  handlePriceFilter = (filter) =>{
    const {allProjects, zoneFiltered, priceFiltered} = this.state
    if( filter === "TODOS" ){
      this.setState({
        priceFiltered: false,
        showedProjectsData: allProjects
      },function(){this.generateOutput(allProjects)})
    }else{
      this.setState({
        priceFiltered: true
      },function(){
        this.projectFiltering(null,filter)
      })
    }
  }

  projectFiltering = (zFilter, pFilter) =>{
    const {zoneFiltered, priceFiltered, allProjects} = this.state
    let filtered = allProjects
    

    if(zFilter !== null){//ZONE FILTERING
      filtered = filtered.map((p)=>{
        let projectAddress = p.project.address.toLowerCase()
          return ( projectAddress.indexOf( zFilter.toLowerCase() ) >= 0 ? p : null )
      })
    }else{
      zFilter = allProjects 
    }//END ZONE FILTER
    

    // if(priceFiltered){//PRICE FILTERING
    //   let million = Number(filter)
    //   let Range = [ (million*1000000), ((million+1)*1000000) ]
    //   prices = allProjects.map(p=>{
    //     let ProjectPrice = p.project.price
    //     return ( (ProjectPrice >= Range[0] && ProjectPrice <= Range[1]) ? p : null )
    //   })
    // }//END PRICE FILTERED

    // //MIXING ZONES AND PRICES
    // filtered = [zones, prices]
    // filtered = filtered.filter(function (el) {
    //   return el != null;
    // });

    //SETTING UP STATE
    this.setState({
      zoneFiltered: true,
      showedProjectsData: filtered
    },function(){this.generateOutput(filtered)})

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
        {/* <CustomSearch zoneFilter={this.handleZoneFilter} priceFilter={this.handlePriceFilter} /> */}
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