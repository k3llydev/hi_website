import React, {Component} from 'react'

class Footer extends Component{
    render(){
        return(
            <footer>
                <div className="policy-box">
                    <span>&#169; HABITARE INMOBILIARIA {new Date().getFullYear()} Todos los derechos reservados.</span>
                </div>
                <div className="footer-social">
                    <ul>
                        <li><a href="https://www.facebook.com/HabitareInmobiliariaMX/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i><span>facebook</span></a></li>
                        <li><a href="https://twitter.com/Habitare_In" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i><span>twitter</span></a></li>
                        <li><a href="https://www.instagram.com/habitare_in/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i><span>instagram</span></a></li>
                    </ul>
                </div>
            </footer>
        );
    }
}
export default Footer