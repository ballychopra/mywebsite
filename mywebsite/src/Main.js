import React from "react"
import ReactDom from "react-dom"
import ArchCom from "./ArchCom"
import { Route, NavLink, HashRouter } from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"



//require("bootstrap")


function Main() {
  return (
    <div>
      <HashRouter>

        <nav className="navbar navbar-expand-md">
          <ul className="navbar-nav" >
            <li className="nav-item">
              <NavLink to="/" >Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ArchCom">Architecture</NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Homeopathy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Software</a>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact">Contact Us</NavLink>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/ArchCom" component={ArchCom} />
          <Route path="/contact" component={Contact} />
        </div>
        <header class="page-header header container-fluid">rererere
      </header>
      </HashRouter>
      
    </div>
  )

}

export default Main;

