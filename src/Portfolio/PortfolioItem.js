import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class PortfolioItem extends Component{
    render(){
        const {data} = this.props
            return(
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
    }
}
export default PortfolioItem