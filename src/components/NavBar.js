import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";
export class navbar extends Component {
  render() {
    let {changeCol} = this.props
    return (
      <div style={{position: 'sticky',top: '0',zIndex:'1', backgroundColor:`this.props.bg`}}>
        <nav  className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
  <Link className="navbar-brand" to="/">News</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
      
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      
      <li><Link className="nav-link" to="/business">Business</Link></li>
      <li><Link className="nav-link" to="/sports">Sports</Link></li>
      <li><Link className="nav-link" to="/general">General</Link></li>
      <li><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
      <li><Link className="nav-link" to="/technology">Technology</Link></li>
      <li><Link className="nav-link" to="/science">Science</Link></li>
      <li><Link className="nav-link" to="/health">health</Link></li>
      
    </ul>
    <div className="form-check form-switch">
      <input onClick={changeCol} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label style={{color:'white',marginRight:'30px'}} className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
    </div>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
      </div>
    )
  }
}

export default navbar
