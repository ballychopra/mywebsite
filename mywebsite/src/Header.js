import React from "react"
import ArchCom from "./ArchCom"
import { Route, NavLink, HashRouter } from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import "./index.css"

class Header extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <div>
                        <nav class="navbar navbar-expand-md">

                            <a class="navbar-brand" href="/">
                            <img src={require('./Images/logo.png')} alt="logo" /> 
                            </a>
                                <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#main-navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="main-navigation">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <NavLink class="nav-link" to="/">Home</NavLink>
                                        </li>
                                        <li class="nav-item">
                                            <NavLink className="nav-link" to="/ArchCom">Architecture</NavLink>
                                        </li>
                                        <li class="nav-item">
                                            <NavLink className="nav-link" to="/">Software Consultancy1</NavLink>
                                        </li>
                                        <li class="nav-item">
                                            <NavLink className="nav-link" to="/Contact">Contact Us</NavLink>
                                        </li>
                                    </ul>
                                </div>
                </nav>
               
                </div>

                        <div className="content">
                            <Route exact path="/" component={Home} />
                            <Route path="/ArchCom" component={ArchCom} />
                            <Route path="/contact" component={Contact} />
                        </div>
                    </div>
        </HashRouter>

                )
            }
        }
        
export default Header;