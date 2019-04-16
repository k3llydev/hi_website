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

    formatMoney = (amount, decimalCount = 2, decimal = ".", thousands = ",") =>{
        try {
          decimalCount = Math.abs(decimalCount);
          decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
      
          const negativeSign = amount < 0 ? "-" : "";
      
          let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
          let j = (i.length > 3) ? i.length % 3 : 0;
      
          return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
        } catch (e) {
          console.log(e)
        }
      }

    render(){
        return(
            <ul className="project-details">
                {
                    this.state.details
                }
                <li>
                    <h3>Desde <span className="project-price">${this.formatMoney(this.props.price,0)}</span></h3>
                </li>
            </ul>
        )
    }
}
export default Details