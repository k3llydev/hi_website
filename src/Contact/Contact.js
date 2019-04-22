import React, {Component} from 'react'
import Header from '../Header'
import SubNav from '../SubNav'
import Footer from '../Footer/Footer'
import queryString from 'query-string'
import {Configurations} from '../AppConfig'

class Contact extends Component{

    constructor(){
        super()
        //console.log(this.props.location.search)
        this.state = {
            projects: [],
            projectInfo: ""
        }
    }

    componentDidMount(){
        this.setState({
            projectInfo: queryString.parse(this.props.location.search).project
        },function(){
          if( typeof queryString.parse(this.props.location.search).project != "undefined" ){
            document.getElementsByClassName("contact-form-holder")[0].classList.add("visform")
          }
            window.initDogma()
        })
        console.log(this.state.projectInfo)
    }

    componentWillMount(){
        fetch(Configurations.API.projects())
            .then(response => response.json())
            .then(result => {
              //Projects to display in DOM
              let projectsOptions = result.map((data,index)=>{
                return <option key={index} value={data.id}>{data.project.project}</option>
              })
              this.setState({
                  projects: projectsOptions
              })
            })
    }

    handleProjectInfo = (e) =>{
        this.setState({
            projectInfo: e.target.value
        })
    }

    handleContactSubmit = (e) =>{
        e.preventDefault()
        let FormData = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            message: e.target.message.value,
            project: e.target.project.options[e.target.project.selectedIndex].text
        }
        fetch(Configurations.API.contact(), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(FormData)
            })
            .then(result=>{return result.json()})
            .then(response=>{
                    document.getElementsByClassName("contact-result")[0].innerHTML = response
            })
    }

    render(){
        return(
                <div className="content full-height">
                    <Header />
                <SubNav />
  {/*  wrapper-inner  */}
  <div className="wrapper-inner">
    {/*  align-content  */}
    <div className="align-content">
      <section>
        <div className="container small-container">
          <h3 className="dec-text">¡Contáctanos!</h3>
          <p>
            Escríbenos y uno de nuestros asesores se pondrá en contacto contigo lo más pronto posible.
          </p>
          <ul className="contact-list">
            <li>
              <span>Dirección </span>
                Lluvia 259 Col. Jardines del Pedregal Del. Álvaro Obregón México, CDMX, CP 01900
            </li>
            <li>
              <span>Teléfono</span>
                55 2086 3726
            </li>
            <li>
              <span>Correo electrónico </span>
                daniela@habitareinmobiliaria.com.mx
            </li>
          </ul>
          <button
            className=" btn anim-button   trans-btn   transition  fl-l showform"
          >
            <span>Escríbenos</span>
            <i className="fa fa-eye" />
          </button>
        </div>
      </section>
    </div>
    {/*  align-content  end*/}
    {/*  contact-form-holder  */}
    <div className="contact-form-holder">
      <div className="close-contact" />
      <div className="align-content">
        <section>
          <div id="contact-form">
            <div id="message" />
            <form
              onSubmit={this.handleContactSubmit}
              name="contactform"
            //   id="contactform"
            >
              <input
                name="name"
                type="text"
                id="name"
                placeholder="Nombre completo"
              />
              <input
                name="email"
                type="text"
                id="email"
                placeholder="Correo electrónico"
              />
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Teléfono celular o fijo"
              />
              <textarea
                name="message"
                id="comments"
                placeholder="Su mensaje..."
              />
              <div className="verify-wrap">
                <span className="verify-text">
                  Selecciona el desarrollo de tu interés:
                </span>
                <div className="contact-project">
                    <select name="project" value={this.state.projectInfo} onChange={this.handleProjectInfo}>
                        <options value="Todos">Todos</options>
                        {
                            this.state.projects
                        }
                    </select>
                </div>
              </div>
              <button type="submit" id="submit">
                <span>Enviar </span>
                <i className="fa fa-long-arrow-right" />
              </button>
            </form>
            <span className="contact-result">
                    
              </span>
          </div>
        </section>
      </div>
    </div>
    {/*  contact-form-holder end */}
  </div>
  {/*  fixed-column */}
  <div className="fixed-column">
    {/* <div className="map-box">
      <div id="map-canvas"><iframe src="https://www.google.com/maps/embed?f=q&origin=mfe&pb=!1m4!2m1!1sAvenida+Revolucin+1336,+Guadalupe+Inn+CDMX!5e0!6i15"></iframe></div>
    </div> */}
    <div className="map-boxFRAME">
      <div id="map-canvasFRAME"><iframe title="Habitare Inmobiliaria Oficinas" src="https://maps.google.com/maps?f=q&source=s_q&hl=en&q=Lluvia 259 Col. Jardines del Pedregal Del. Álvaro Obregón México, CDMX, CP 01900&aq=0&ie=UTF8&t=m&z=15&iwloc=A&output=embed"></iframe></div>
    </div>
  </div>
  {/*  fixed-column end*/}
  <Footer />
</div>
        )
    }
}
export default Contact