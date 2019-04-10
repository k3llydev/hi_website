import React from 'react'
import {Configurations} from '../AppConfig'

class Hero extends React.Component{

    constructor(){
        super()
        this.state = {
            projects: [],
            sliderStatus: [
                    true,
                    true,
                    false,
                    true
            ]
        }
        
    }

    componentWillMount(){
        fetch(Configurations.API.projects())
            .then(response => response.json())
            .then(data => {
                    //EXTRACT IMAGES FROM MAIN DATA
                    var images = [], final = [], size = ( Math.ceil(data.length/4) )
                    for(var c=0;c<data.length;c++){
                        images.push(data[c].path+data[c].images.home) //Extracted home images only
                    }
                    final = this.chunk_elements(images,size)
                    let projectsFinalExport = final.map((bg)=>{
                        return (
                            <div key={Math.random()} className="hero-grid">
                                    <div
                                        className="hero-slider owl-carousel"
                                        data-attime={3220}
                                        data-rtlt={this.state.sliderStatus[1]}
                                    >
                                        <div className="item">
                                                <div className="bg" style={{backgroundImage: `url(${bg[0]})`}} />
                                        </div>
                                        <div className="item">
                                                <div className="bg" style={{backgroundImage: `url(${bg[1]})`}} />
                                        </div>
                                        <div className="item">
                                                <div className="bg" style={{backgroundImage: `url(${bg[2]})`}} />
                                        </div>
                                    </div>
                            </div>
                        )
                    })
                    this.setState({projects: projectsFinalExport})
                    console.log(this.state.projects)
            });
    }

    chunk_elements = (array, size) =>{
        const chunked_arr = [];
        for (let i = 0; i < array.length; i++) {
          const last = chunked_arr[chunked_arr.length - 1];
          if (!last || last.length === size) {
            chunked_arr.push([array[i]]);
          } else {
            last.push(array[i]);
          }
        }
        return chunked_arr;
    }

    componentDidMount(){
        
        this.updateSliderStatus()
    }

    getRandomInt = (min, max) => {
        return Number(Math.floor(Math.random() * (max - min)) + min)
    }

    updateSliderStatus = () =>{
        var newStates = [false,false,false,false]
        for(var c=0;c<4;c++)
            newStates[c] = ( 1 === this.getRandomInt(0,3) ? true : false )
        this.setState({
            sliderStatus: newStates
        })
    }

    chunk_projects = (array, size) =>{
        const chunked_arr = [];
        for (let i = 0; i < array.length; i++) {
          const last = chunked_arr[chunked_arr.length - 1];
          if (!last || last.length === size) {
            chunked_arr.push([array[i]]);
          } else {
            last.push(array[i]);
          }
        }
        return chunked_arr;
    }

    render(){
        return <div>{this.state.projects}</div>
    }
}
export default Hero