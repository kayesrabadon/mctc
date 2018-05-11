import React, { Component } from 'react';
import axios from 'axios';

class AdminMembership extends Component {
  
  constructor() {
    super();
    this.state = {
      members: [],
    };
  }

  componentWillMount(){
    const $this = this;
    console.log(JSON.parse(localStorage.user))
    axios.get('http://localhost:3001/api/selectAllMember')
      .then(function (response) {
        $this.setState({members:response.data})
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  reloadMembers(){
    const $this = this;
    axios.get('http://localhost:3001/api/selectAllMember')
      .then(function (response) {
        $this.setState({members:response.data})
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  

  activate = (e) => {
    e.preventDefault();
    const id = e.target.getAttribute('data-id');
    const $this = this;
    axios.post('http://localhost:3001/api/updateActivate', {id:id})
      .then(function (response) {
        console.log(response.data);
        $this.reloadMembers();       
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  deActivate = (e) => {
    e.preventDefault();
    const id = e.target.getAttribute('data-id');
    const $this = this;
    axios.post('http://localhost:3001/api/updateDeActivate', {id:id})
      .then(function (response) {
        console.log(response.data);
        $this.reloadMembers();
       
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  delete = (e) => {
    e.preventDefault();
   
    const id = e.target.getAttribute('data-id');
    const $this = this;

    if(id === null){

      window.alert('invalid id try again');

    }else{

      var r = window.confirm("confirm delete");
      if (r == true) {
          
          axios.post('http://localhost:3001/api/deleteMember', {id:id})
            .then(function (response) {
              console.log(response.data);
              $this.reloadMembers();
             
            })
            .catch(function (error) {
              console.log(error);
            });

      } else {

          window.alert('cancelled');
      }

    }

  }

  filter = (e) => {
    e.preventDefault();

    const filter = e.target.value;
    const $this = this;

    axios.get('http://localhost:3001/api/filter?filter='+filter)
      .then(function (response) {
        
        $this.setState({members:response.data})
       
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  render() {
    let member_rows = [];
    this.state.members.map((member, i) => 

        member_rows.push( 
            <tr key={i}>
              <td>{member.familyname}</td>
              <td>{member.firstname}</td>
              <td>{member.emailaddress}</td>
              <td>{member.gender}</td>
              <td>{member.age}</td>
              <td>{member.mobilenumber}</td>
              <td>{member.phonenumber}</td>
              <td>{member.subscriptioncategory}</td>
              <td>{member.membershiptype}</td>
              <td id="membershipstatus">{(member.membershipstatus === 1) ? <span>active</span> 
                                                      : 
                                                     <span>inactive</span>}</td>
              <td>{(member.membershipstatus === 1) ? <a onClick={this.deActivate} data-id={member.id} className="btn btn-danger btn-xs" href="#" role="button">deactivate</a> 
                                                      : 
                                                     <a onClick={this.activate} data-id={member.id} className="btn btn-info btn-xs" href="#" role="button">activate</a>}</td>
 
 
              <td><a onClick={this.delete} data-id={member.id} className="btn btn-danger btn-xs" href="#" role="button"><span className="fa fa-trash-o"></span></a></td>
            </tr>
          )
    );
    return (
      <div className="fluid-container">
      <br/>
      <select name="filter" onChange={this.filter}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
        <option value="allactivemale">Male</option>
        <option value="allactivefemale">Female</option>
        <option value="interclubfamily">Interclub Family</option>
        <option value="interclubsenior">Interclub Senior</option>
        <option value="interclubstudent">Interclub Student</option>
        <option value="interclubjunior">Interclub Junior</option>
        <option value="socialfamily">Social Family</option>
        <option value="socialsenior">Social Senior</option>
        <option value="socialstudent">Social Student</option>
        <option value="socialjunior">Social Junior</option>
        <option value="juniors">Ages 5 - 17</option>
        <option value="grasshoppers">Grasshoppers (Ages 5 - 7)</option>
        <option value="junior">Juniors (Ages 8 - 11)</option>
        <option value="seniors">Ages 18+</option>
      </select>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Family Name</th>
                <th>First Name</th>
                <th>Email Address</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Mobile Number</th>
                <th>Phone Number</th>
                <th>Subscription Category</th>
                <th>Membership Type</th>
                <th>Status</th>
                <th>Actions</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                member_rows
              }
            </tbody>
          </table>
      </div>
    );
  }
}

export default AdminMembership;