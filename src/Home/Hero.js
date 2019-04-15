import React from 'react'
import {Link} from 'react-router-dom'
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
        fetch(Configurations.API.heroSlider())
            .then(response => response.json())
            .then(data => {
                    let projectsFinalExport = data.map((bg, index)=>{
                        return (
                            <div key={index} className="hero-grid">
                                    <div
                                        className="hero-slider owl-carousel"
                                        data-attime={3220}
                                        data-rtlt={this.state.sliderStatus[index]}
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
                    this.setState({projects: projectsFinalExport},function(){
                        window.initDogma()
                    })
                    console.log(data)
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
        //window.initDogma()
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
        return (
            <div className="full-height-wrap">
                {this.state.projects}
                <div className="overlay" />
                    {/* enter-wrap */}
                    <div className="enter-wrap-holder cent-holder wht-bg">
                    <div className="enter-wrap">
                    <h3>
                        <img src="http://habitareinmobiliaria.com.mx/assets/img/logo-habitare-ok.png" draggable="false" alt="Habitare logo" />
                        </h3>
                    <Link to={{ pathname: '/portfolio', state: 'flushDeal' }} className="btn anim-button trans-btn transition ">
                        <span>Todos los desarrollos</span>
                        <i className="fa fa-long-arrow-right" />
                    </Link>
                    </div>
                </div>
                    {/* enter-wrap end  */}
            </div>
        )
    }
}
export default Hero