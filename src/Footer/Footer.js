import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Footer extends Component{
    render(){
        return(
            <footer>
                <div className="policy-box">
                    <span>&#169; Habitare Inmobiliaria {new Date().getFullYear()}  /  Derechos reservados. </span>
                </div>
                <div className="footer-social">
                    <ul>
                        <li><Link to="/"><i className="fa fa-facebook"></i><span>facebook</span></Link></li>
                        <li><Link to="/"><i className="fa fa-twitter"></i><span>twitter</span></Link></li>
                        <li><Link to="/"><i className="fa fa-instagram"></i><span>instagram</span></Link></li>
                        <li><Link to="/"><i className="fa fa-pinterest"></i><span>pinterest</span></Link></li>
                        <li><Link to="/"><i className="fa fa-tumblr"></i><span>tumblr</span></Link></li>
                    </ul>
                </div>
            </footer>
        );
    }
}
export default Footer