import React, { Component } from 'react';
import axios from 'axios';
 
class Login extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  componentWillMount(){
    if(localStorage.user){
      this.props.history.push('/adminmembership')
    }
  }

  onLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/api/login', {
      username: this.state.username,
      password: this.state.password
    })
    .then(res => {
      localStorage.setItem('user', JSON.stringify(res.data.user))
      localStorage.setItem('token', JSON.stringify(res.data.token))
      localStorage.setItem('usertype', JSON.stringify(res.data.user.usertype))
      this.props.history.push('/adminmembership');
    }, err => console.log('Error in login', err))
  }



    render() {
        return (
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                  <form onSubmit={this.onLogin} style={{"margin":"200px 300px"}}>
                    <div className="form-group">
                      <label htmlFor="username">Username:</label>
                      <input type="username" name="username" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} className="form-control" id="username"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="pwd">Password:</label>
                      <input type="password" name="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} className="form-control" id="pwd"/>
                    </div>
                    <div className="checkbox">
                      <label><input type="checkbox"/> Remember me</label>
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                  </form>
              </div>
            </div>
        );
    }
}
 
export default Login;