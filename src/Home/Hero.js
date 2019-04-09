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

    componentDidMount(){
        // fetch(Configurations.API.projects())
        //     .then(response => response.json())
        //     .then(data => {
        //         var a = data
        //         var arrays = [], size = 3
        //         while (a.length > 0)
        //             arrays.push(a.splice(0, size))
        //         this.setState({
        //             projects: arrays
        //         })
        //     });
        //     setInterval(this.updateSliderStatus(),100)
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

    render(){
        var JSX = []
        for(var c=0;c<4;c++){
                JSX.push(
                    <div key={c} className="hero-grid">
                        <div
                            className="hero-slider  owl-carousel"
                            data-attime={3220}
                            data-rtlt={this.state.sliderStatus[c]}
                        >
                            <div className="item">
                            <div
                                className="bg"
                                style={{ backgroundImage: "url(images/bg/27.jpg)" }}
                            />
                            </div>
                            <div className="item">
                            <div
                                className="bg"
                                style={{ backgroundImage: "url(images/bg/2.jpg)" }}
                            />
                            </div>
                            <div className="item">
                            <div
                                className="bg"
                                style={{ backgroundImage: "url(images/bg/3.jpg)" }}
                            />
                            </div>
                        </div>
                </div>
                )
        }
        return JSX
    }
}
export default Hero