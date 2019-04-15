import React, {Component} from 'react'

class Details extends Component{
    constructor(props){
        super(props)
        this.state = {
            details: []
        }
    }

    componentWillMount(){
        const {features} = this.props
        let exploded = features.split(',')
        let JSX = exploded.map((f,index)=>{
            return <li key={index}>{f}</li>
        })
        this.setState({
            details: JSX
        })
    }

    render(){
        return(
            <ul className="project-details">
                {
                    this.state.details
                }
            </ul>
        )
    }
}
export default Details