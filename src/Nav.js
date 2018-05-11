import React, { Component } from 'react';
import axios from 'axios';

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      members: [],
      userStatus: ''
    };
  }

  componentWillMount(){
  

    if(localStorage.user){
        console.log(localStorage.usertype)
      const userData = JSON.parse(localStorage.user);

      this.setState({userStatus: userData.usertype})
    }
  }

  onLogout = (e) =>{
    e.preventDefault()
    localStorage.clear()
    window.location.href = window.location
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/"><img className="nav-logo img-fluid navlogo" src="pictures/logo.png" alt="MCTC"></img></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="/"><small>Home
                  <span className="sr-only">(current)</span></small>
                </a>
              </li>
              <li className="nav-item"><a className="nav-link text-white" href="/membership"><small>Membership</small></a></li>
              <li className="nav-item"><a className="nav-link text-white" href="/newsandevents"><small>News & Events</small></a></li>
              <li className="nav-item"><a className="nav-link text-white" href="/juniorprogram"><small>Junior Program</small></a></li>
              <li className="nav-item"><a className="nav-link text-white" href="/interclub"><small>Interclub</small></a></li>
              <li className="nav-item"><a className="nav-link text-white" href="/coaching"><small>Coaching</small></a></li>
              <li className="nav-item"><a className="nav-link text-white" href="/contactus"><small>Contact Us</small></a></li>
              {(localStorage.usertype === '0') ? 
              <li className="nav-item"><a className="nav-link text-white" href="/adminmembership"><small>Admin</small></a></li>
              : null }
              {(localStorage.usertype === '0') ? 
              <li className="nav-item"><a className="nav-link text-white" href="/adminnewsandevents"><small>Admin News & Events</small></a></li>
              : null }
              {(localStorage.token) ? 
                <li className="nav-item"><a onClick={this.onLogout} className="nav-link text-white" href="/logout"><small>Logout</small></a></li>
                : 
                <li className="nav-item"><a className="nav-link text-white" href="/login"><small>Login</small></a></li>
              }
            </ul>
          </div>
        </div>
      </nav>


    );
  }
} 

export default Nav;