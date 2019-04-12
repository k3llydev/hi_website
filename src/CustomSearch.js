import React, {Component} from 'react'
import {Configurations} from './AppConfig'
import './css/CustomSearch.css'

class CustomSearch extends Component{

    constructor(){
        super()
        this.state = {
            minMillion: 1,
            topMillion: 10,
            rangeOptions: [],
            zoneOptions: []
        }
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

    componentWillMount(){
        const {formatMoney} = this
        const {minMillion, topMillion} = this.state
        var options = [], JSX = ''
        for(var c=minMillion;c<=topMillion;c++){
            JSX = <option key={c} value={c}>${formatMoney(c*1000000,0)} - ${formatMoney((c+1)*1000000,0)}</option>
            if(c===topMillion){
                JSX = <option key={c} value={c}>Más de ${formatMoney(c*1000000,0)}</option>
            }
            options = [...options, JSX ]
        }

        // fetch(Configurations.API.zones())
        // .then( response => response.json() )
        // .then( (result) => {
        //     let zones = result.map( (zone, index)=>{
        //         return <option key={index} value={index}>{zone}</option>
        //     })
        //     this.setState({zoneOptions: zones})
        //     console.log(zones)
        // })


        console.log(options)
        this.setState({rangeOptions: options})
    }

    render(){
        return(
            <div>
        <div className="filter-holder filter-nvis-column">
        <div className="gallery-filters at">
          <button
            className="gallery-filter gallery-filter-active"
            data-filter="*"
          >
            Todo
          </button>
          <br />
        <div className="SelectStyle">
            <label htmlFor="zone">Zona metropolitana:</label>
            <select data-filter={".zone"} className="SearchFormItem">
                <option>TODAS</option>
                {this.state.zoneOptions}
            </select>
        </div>
        <div className="SelectStyle">
            <label htmlFor="price">Rango de precio:</label>
            <select name="price" data-filter={".price"} className="SearchFormItem">
                <option>TODOS</option>
                {
                    this.state.rangeOptions
                }
            </select>
        </div>
        </div>
      </div>
      <div className="filter-button vis-fc">Buscar</div>
      </div>
        );
    }
}
export default CustomSearch