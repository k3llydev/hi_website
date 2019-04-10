import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component{
    render(){
        // window.loadingAlert(3000)
        // window.initDogma()

        return(
            <header>
                {/* <!-- Nav button--> */}
                <div className="nav-button">
                    <span  className="nos"></span>
                    <span className="ncs"></span>
                    <span className="nbs"></span>
                </div>
                {/* <!-- Nav button end --> */}
                {/* <!-- Logo-->  */}
                <div className="logo-holder">
                    <Link to="/" ><img src="/images/logo.png" alt="" /></Link>
                </div>
                {/* <!-- Logo  end-->  */}
                {/* <!-- Header  title -->  */}
                <div className="header-title">
                    <h2><Link to="/test2" className="ajax">MENU</Link></h2>
                </div>
                {/* <!-- Header  title  end--> */}
                {/* <!-- share --> */}
                <div className="show-share isShare">
                    <span>Share</span>
                    <i className="fa fa-chain-broken"></i>            
                </div>
                {/* <!-- share  end-->				 */}
            </header> 
        );
    }
}
export default Header