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
      allProjects: [],
      zoneFiltered: false,
      priceFiltered: false,
    }
  }

  componentDidMount(){
    window.loadingAlert(1500)
    setTimeout(this.projectFiltering,1000)
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

  generateOutput = (projects) =>{
    let filtered = projects.map((project,index)=>{
      return <PortfolioItem key={index} data={project} />
    })
    this.setState({
      showedProjectsData: [],
      projects: []
    },function(){this.setState({projects:filtered,showedProjectsData:projects})})
  }


  handleZoneFilter = (filter) =>{
      if( filter === "TODAS" ){
        this.setState({
          zoneFiltered: false
        },function(){this.projectFiltering()})
      }else{
        this.setState({
          zoneFiltered: filter
        },function(){this.projectFiltering()})
      }
  }

  handlePriceFilter = (filter) =>{
    if( filter === "TODOS" ){
      this.setState({
        priceFiltered: false
      },function(){this.projectFiltering()})
    }else{
      this.setState({
        priceFiltered: filter
      },function(){this.projectFiltering()})
    }
  }

  projectFiltering = () =>{

    const {zoneFiltered, priceFiltered, allProjects} = this.state
    let filtered = allProjects
    console.log(`State of project filters for ==zoneFiltered: ${zoneFiltered} == and ==priceFiltered: ${priceFiltered}==`)

    if( zoneFiltered !== false ){//ZONE FILTERING
      console.log('Filtering by zone...')
      filtered = filtered.map((p)=>{
        let projectAddress = p.project.address.toLowerCase()
          return ( projectAddress.indexOf( zoneFiltered.toLowerCase() ) >= 0 ? p : null )
      })
    //CLEARING NULL VALUES IN THE ARRAY
    filtered = filtered.filter(function (el) {
      return el != null;
    });
    }//END ZONE FILTER
    

    if( priceFiltered !== false ){//PRICE FILTERING
      console.log('Filtering by price...')
      let million = Number(priceFiltered),
          Range = [ (million*1000000), ((million+1)*1000000) ]
      filtered = filtered.map(p=>{
        let ProjectPrice = p.project.price
        return ( (ProjectPrice >= Range[0] && ProjectPrice <= Range[1]) ? p : null )
      })
    //CLEARING NULL VALUES IN THE ARRAY
    filtered = filtered.filter(function (el) {
      return el != null;
    });
    }//END PRICE FILTERED

    

    console.log(['New output: ',filtered])
    //SETTING UP STATE
    this.generateOutput(filtered)
    // this.setState({
    //   projects: []
    // },function(){})

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