import React, { Component } from 'react';
import axios from 'axios';

class Membership extends Component {
	constructor() {
	    super();
	    this.password1 = '';
        this.password2 = '';
	    this.state = {
            members: [],
            buttonIsDisabled: true,
            errors: [],
            title: "",
            familyname: "",
            firstname: "",
            username: "",
            pwd: "",
            repeatpwd: "",
            gender: "",
            dateofbirth: "",
            streetaddress: "",
            suburbaddress: "",
            mobilenumber: "",
            emailaddress: "",
            subscriptioncategory: "",
            membershiptype: "",
            fee: "",
            feetype: "",
            agreetoterms: ""
	    };
	}

    onTitleChange = (e) => {
        let s = true;
        if(
            this.state.familyname.length &&
            this.state.firstname.length && 
            this.state.username.length && 
            this.state.pwd.length &&
            this.state.repeatpwd.length &&
            this.state.dateofbirth.length && 
            this.state.streetaddress.length && 
            this.state.suburbaddress.length &&  
            this.state.mobilenumber.length && 
            this.state.emailaddress.length && 
            this.state.gender.length &&
            this.state.subscriptioncategory.length &&
            this.state.membershiptype.length && 
            this.state.feetype.length && 
            this.state.fee.length &&
            this.state.agreetoterms.length &&
            e.target.value.length) {
            s = false;
        }
        this.setState({title: e.target.value, buttonIsDisabled: s, errors: []});
    }

    onFamilyNameChange = (e) => {
        let s = true;
        if(
            this.state.title.length &&
            this.state.firstname.length && 
            this.state.username.length && 
            this.state.pwd.length &&
            this.state.repeatpwd.length &&
            this.state.dateofbirth.length && 
            this.state.streetaddress.length && 
            this.state.suburbaddress.length &&  
            this.state.mobilenumber.length && 
            this.state.emailaddress.length &&
            this.state.gender.length &&
            this.state.subscriptioncategory.length &&
            this.state.membershiptype.length && 
            this.state.feetype.length &&
            this.state.fee.length &&
            this.state.agreetoterms.length &&
            e.target.value.length) {
            s = false;
        }
        this.setState({familyname: e.target.value, buttonIsDisabled: s, errors: []});
    }

    onFirstNameChange = (e) => {
        let s = true;
        if(
            this.state.title.length &&
            this.state.firstname.length && 
            this.state.username.length && 
            this.state.pwd.length &&
            this.state.repeatpwd.length &&
            this.state.dateofbirth.length && 
            this.state.streetaddress.length && 
            this.state.suburbaddress.length &&  
            this.state.mobilenumber.length && 
            this.state.emailaddress.length &&
            this.state.gender.length &&
            this.state.subscriptioncategory.length &&
            this.state.membershiptype.length && 
            this.state.feetype.length && 
            this.state.fee.length &&
            this.state.agreetoterms.length &&
            e.target.value.length) {
            s = false;
        }
        this.setState({firstname: e.target.value, buttonIsDisabled: s, errors: []});
    }

    onUserNameChange = (e) => {
        let s = true;
        if(
            this.state.title.length &&
            this.state.firstname.length && 
            this.state.username.length && 
            this.state.pwd.length &&
            this.state.repeatpwd.length &&
            this.state.dateofbirth.length && 
            this.state.streetaddress.length && 
            this.state.suburbaddress.length &&  
            this.state.mobilenumber.length && 
            this.state.emailaddress.length &&
            this.state.gender.length &&
            this.state.subscriptioncategory.length &&
            this.state.membershiptype.length && 
            this.state.feetype.length && 
            this.state.fee.length &&
            this.state.agreetoterms.length &&
            e.target.value.length) {
            s = false;
        }
        this.setState({username: e.target.value, buttonIsDisabled: s, errors: []});
    }

    onPasswordChange = (e) => {
        let s = true;
        if(
            this.state.title.length &&
            this.state.firstname.length && 
            this.state.username.length && 
            this.state.familyname.length &&
            this.state.repeatpwd.length &&
            this.state.dateofbirth.length && 
            this.state.streetaddress.length && 
            this.state.suburbaddress.length &&  
            this.state.mobilenumber.length && 
            this.state.emailaddress.length &&
            this.state.gender.length &&
            this.state.subscriptioncategory.length &&
            this.state.membershiptype.length && 
            this.state.feetype.length && 
            this.state.fee.length &&
            this.state.agreetoterms.length &&
            e.target.value.length) {
            s = false;
        }
        this.setState({pwd: e.target.value, buttonIsDisabled: s, errors: []});
    }

    onRepeatPasswordChange = (e) => {
        let s = true;
        if(
            this.state.title.length &&
            this.state.firstname.length && 
            this.state.username.length && 
            this.state.pwd.length &&
            this.state.familyname.length &&
            this.state.dateofbirth.length && 
            this.state.streetaddress.length && 
            this.state.suburbaddress.length &&  
            this.state.mobilenumber.length && 
            this.state.emailaddress.length &&
            this.state.gender.length &&
            this.state.subscriptioncategory.length &&
            this.state.membershiptype.length && 
            this.state.feetype.length && 
            this.state.fee.length &&
            this.state.agreetoterms.length &&
            e.target.value.length) {
            s = false;
        }
        this.setState({repeatpwd: e.target.value, buttonIsDisabled: s, errors: []});
    }

    onGenderChange = (e) => {
        let s = true;
        if(
            this.state.title.length &&
            this.state.firstname.length && 
            this.state.username.length && 
            this.state.pwd.length &&
            this.state.repeatpwd.length &&
            this.state.familyname.length &&
            this.state.dateofbirth.length && 
            this.state.streetaddress.length && 
            this.state.suburbaddress.length &&  
            this.state.mobilenumber.length && 
            this.state.emailaddress.length &&
            this.state.subscriptioncategory.length &&
            this.state.membershiptype.length && 
            this.state.feetype.length && 
            this.state.fee.length &&
            this.state.agreetoterms.length &&
            e.target.value.length) {
            s = false;
        }
        this.setState({gender: e.target.value, buttonIsDisabled: s, errors: []});
    }

    onDateOfBirthChange = (e) => {
        let s = true;
        if(
            this.state.title.length &&
            this.state.firstname.length && 
            this.state.username.length && 
            this.state.pwd.length &&
            this.state.familyname.length &&
            this.state.dateofbirth.length && 
            this.state.streetaddress.length && 
            this.state.suburbaddress.length &&  
            this.state.mobilenumber.length && 
            this.state.emailaddress.length &&
            this.state.gender.length &&
            this.state.subscriptioncategory.length &&
            this.state.membershiptype.length && 
            this.state.feetype.length && 
            this.state.fee.length &&
            this.state.agreetoterms.length &&
            e.target.value.length) {
            s = false;
        }
        this.setState({dateofbirth: e.target.value, buttonIsDisabled: s, errors: []});
    }

    onStreetAddressChange = (e) => {
        let s = true;
        if(
            this.state.title.length &&
            this.state.familyname.length &&
            this.state.firstname.length && 
            this.state.username.length && 
            this.state.pwd.length &&
            this.state.repeatpwd.length &&
            this.state.dateofbirth.length &&  
            this.state.suburbaddress.length &&  
            this.state.mobilenumber.length && 
            this.state.emailaddress.length &&
            this.state.gender.length &&
            this.state.subscriptioncategory.length &&
            this.state.membershiptype.length && 
            this.state.feetype.length && 
            this.state.fee.length &&
            this.state.agreetoterms.length &&
            e.target.value.length) {
            s = false;
        }
        this.setState({streetaddress: e.target.value, buttonIsDisabled: s, errors: []});
    }

    onSuburbAddressChange = (e) => {
        let s = true;
        if(
            this.state.title.length &&
            this.state.familyname.length &&
            this.state.firstname.length && 
            this.state.username.length && 
            this.state.pwd.length &&
            this.state.repeatpwd.length &&
            this.state.dateofbirth.length && 
            this.state.streetaddress.length &&   
            this.state.mobilenumber.length && 
            this.state.emailaddress.length &&
            this.state.gender.length &&
            this.state.subscriptioncategory.length &&
            this.state.membershiptype.length && 
            this.state.feetype.length && 
            this.state.fee.length &&
            this.state.agreetoterms.length &&
            e.target.value.length) {
            s = false;
        }
        this.setState({suburbaddress: e.target.value, buttonIsDisabled: s, errors: []});
    }

    onMobileNumberChange = (e) => {
        let s = true;
        if(
            this.state.title.length &&
            this.state.familyname.length &&
            this.state.firstname.length && 
            this.state.username.length && 
            this.state.pwd.length &&
            this.state.repeatpwd.length &&
            this.state.dateofbirth.length && 
            this.state.streetaddress.length && 
            this.state.suburbaddress.length &&   
            this.state.emailaddress.length &&
            this.state.gender.length &&
            this.state.subscriptioncategory.length &&
            this.state.membershiptype.length && 
            this.state.feetype.length && 
            this.state.fee.length &&
            this.state.agreetoterms.length &&
            e.target.value.length) {
            s = false;
        }
        this.setState({mobilenumber: e.target.value, buttonIsDisabled: s, errors: []});
    }

    onEmailAddressChange = (e) => {
        let s = true;
        if(
            this.state.title.length &&
            this.state.familyname.length && 
            this.state.firstname.length && 
            this.state.username.length && 
            this.state.pwd.length &&
            this.state.repeatpwd.length &&
            this.state.dateofbirth.length && 
            this.state.streetaddress.length && 
            this.state.suburbaddress.length &&  
            this.state.mobilenumber.length &&
            this.state.gender.length &&
            this.state.subscriptioncategory.length &&
            this.state.membershiptype.length && 
            this.state.feetype.length && 
            this.state.fee.length &&
            this.state.agreetoterms.length &&
            e.target.value.length) {
            s = false;
        }
        this.setState({emailaddress: e.target.value, buttonIsDisabled: s, errors: []});
    }

    onSubscriptionCategoryChange = (e) => {
        let s = true;
        if(
            this.state.title.length &&
            this.state.familyname.length &&
            this.state.firstname.length && 
            this.state.username.length && 
            this.state.pwd.length &&
            this.state.repeatpwd.length &&
            this.state.dateofbirth.length && 
            this.state.streetaddress.length && 
            this.state.suburbaddress.length &&  
            this.state.mobilenumber.length && 
            this.state.emailaddress.length && 
            this.state.gender.length &
            this.state.membershiptype.length && 
            this.state.feetype.length && 
            this.state.fee.length &&
            this.state.agreetoterms.length &&
            e.target.value.length) {
            s = false;
        }
        this.setState({subscriptioncategory: e.target.value, buttonIsDisabled: s, errors: []});
    }

    onMembershipTypeChange = (e) => {
        let s = true;
        if(
            this.state.title.length &&
            this.state.familyname.length &&
            this.state.firstname.length && 
            this.state.username.length && 
            this.state.pwd.length &&
            this.state.repeatpwd.length &&
            this.state.dateofbirth.length && 
            this.state.streetaddress.length && 
            this.state.suburbaddress.length &&  
            this.state.mobilenumber.length && 
            this.state.emailaddress.length && 
            this.state.gender.length &
            this.state.subscriptioncategory.length && 
            this.state.feetype.length && 
            this.state.fee.length &&
            this.state.agreetoterms.length &&
            e.target.value.length) {
            s = false;
        }
        this.setState({membershiptype: e.target.value, buttonIsDisabled: s, errors: []});
    }

    onFeeChange = (e) => {
        let s = true;
        if(
            this.state.title.length &&
            this.state.familyname.length &&
            this.state.firstname.length && 
            this.state.username.length && 
            this.state.pwd.length &&
            this.state.repeatpwd.length &&
            this.state.dateofbirth.length && 
            this.state.streetaddress.length && 
            this.state.suburbaddress.length &&  
            this.state.mobilenumber.length && 
            this.state.emailaddress.length &&
            this.state.gender.length &&
            this.state.subscriptioncategory.length &&
            this.state.membershiptype.length && 
            this.state.feetype.length && 
            this.state.agreetoterms.length &&
            e.target.value.length) {
            s = false;
        }
        this.setState({fee: e.target.value, buttonIsDisabled: s, errors: []});
    }

    onFeeTypeChange = (e) => {
        let s = true;
        if(
            this.state.title.length &&
            this.state.familyname.length &&
            this.state.firstname.length && 
            this.state.username.length && 
            this.state.pwd.length &&
            this.state.repeatpwd.length &&
            this.state.dateofbirth.length && 
            this.state.streetaddress.length && 
            this.state.suburbaddress.length &&  
            this.state.mobilenumber.length && 
            this.state.emailaddress.length &&
            this.state.gender.length &&
            this.state.subscriptioncategory.length &&
            this.state.membershiptype.length &&  
            this.state.fee.length &&
            this.state.agreetoterms.length &&
            e.target.value.length) {
            s = false;
        }
        this.setState({feetype: e.target.value, buttonIsDisabled: s, errors: []});
    }

    onAgreeToTermsChange = (e) => {
        let s = true;
        if(
            this.state.title.length &&
            this.state.familyname.length &&
            this.state.firstname.length && 
            this.state.username.length && 
            this.state.pwd.length &&
            this.state.repeatpwd.length &&
            this.state.dateofbirth.length && 
            this.state.streetaddress.length && 
            this.state.suburbaddress.length &&  
            this.state.mobilenumber.length && 
            this.state.emailaddress.length && 
            this.state.gender.length &&
            this.state.subscriptioncategory.length &&
            this.state.membershiptype.length && 
            this.state.feetype.length &&
            this.state.fee.length &&
            e.target.value.length) {
            s = false;
        }
        this.setState({agreetoterms: e.target.value, buttonIsDisabled: s, errors: []});
    }

	componentWillMount(){

  	axios.get('http://localhost:3001/api/register-member')
  	  .then(function (response) {
  	    console.log(response.data);
  	  })
  	  .catch(function (error) {
  	    console.log(error);
  	  });
  	}

  	checkPass1 = (e) =>{
        e.preventDefault();
        this.password1 = e.target.value;
        var repeatpwd = document.getElementById('repeatpwd');
        var message = document.getElementById('confirmMessage');
        var goodColor = "#0b8e27";
    	var badColor = "#ff0000";
        if(this.password2 === e.target.value){
        }
    } 

    checkPass2 = (e) =>{
        e.preventDefault();
        this.password2 = e.target.value;
        var repeatpwd = document.getElementById('repeatpwd');
        var message = document.getElementById('confirmMessage');
        var goodColor = "#0b8e27";
    	var badColor = "#ff0000";
        if(this.password1 === e.target.value){
            repeatpwd.style.backgroundColor = goodColor;
        	message.style.color = goodColor;
       		message.innerHTML = "Passwords match!"
        } else {
        	repeatpwd.style.backgroundColor = badColor;
	        message.style.color = badColor;
	        message.innerHTML = "Passwords do not match!"
        }
    }

    onSubmitClick = (e) => {
        const $this = this;
        alert("test");
    }

  render() {
    return (
    	<section>
    	  <div className="container">
    	    <div className="row">
    	      	<div className="p-2">
    	      		<form className="container" method="POST" action="http://localhost:3001/api/register-member">
    	      	    		<div className="text-right">
    	      	    			<p className="coverMembershipform"><strong>Mangere Combined Tennis Club Inc.</strong><br />House Park, Kirkbride Road, Mangere Central<br />Phone: 275 4125<br />Email: mctctennis@gmail.com<br />Facebook: Mangere Combined Tennis Club</p>
    	      	    		</div>
    	      	    		<div className="text-right">
    	      	    			<p className="coverEmail">website here . .. .</p>
    	      	    		</div>
    	      	    		<div className="text-center">
    	      	    			<h3 className="text-uppercase"><strong>mangere combined tennis club junior & social membership form</strong></h3>
    	      	    		</div>

    	      	    	{/*actual form*/}

    	      		    	<form-horizontal id="inputform" className="col-md-12">
    	      		    		<div className="col-md-12 row">
    	      						<div className="form-horizontal col-md-6">
    	      						    <div className="form-group row">
    	      						    	<div className="col-md-4">
    	      							    	<label>TITLE:</label>
    	      							    </div>
    	      							    <div className="col-md-6">
    	      							    	<select className="selectpicker" name="title" onChange={this.onTitleChange.bind(this)}>
    	      							    		<option disabled selected value> -- Title -- </option>
    	      							    		<option value="Mr">Mr</option>
    	      							    		<option value="Mrs">Mrs</option>
    	      							    		<option value="Miss">Miss</option>
    	      							    		<option value="Ms">Ms</option>
    	      						    		</select>
    	      						    	</div>
    	      				    		</div>
    	      						</div>
    	      		    		</div>
    	      		    		<div className="col-md-12 row">
    	      					    <div className="form-horizontal col-md-6">
    	      						    <div className="form-group row">
    	      						    	<div className="col-md-4">
    	      						    		<label>FAMILY NAME:</label>
    	      						    	</div>
    	      						    	<div className="col-md-8">
    	      						    		<input onBlur={this.onFamilyNameChange.bind(this)} type="text" className="form-control" name="familyname"></input>
    	      						    	</div>
    	      						    </div>
    	      						</div>
    	      						<div className="form-horizontal col-md-6">
    	      						    <div className="form-group row text-capitalize">
    	      						    	<div className="col-md-4">
    	      						    		<label>FIRST NAME:</label>
    	      						    	</div>
    	      						    	<div className="col-md-8">
    	      						    		<input type="text" onBlur={this.onFirstNameChange.bind(this)} className="form-control" name="firstname"></input>
    	      						    	</div>
    	      						    </div>
    	      						</div>
    	      					</div>

    	      					<div className="col-md-12 row">
    	      					    <div className="form-horizontal col-md-6">
    	      						    <div className="form-group row text-capitalize">
    	      						    	<div className="col-md-4">
    	      						    		<label>USERNAME:</label>
    	      						    	</div>
    	      						    	<div className="col-md-8">
    	      						    		<input type="text" className="form-control" name="username" onBlur={this.onUserNameChange.bind(this)}></input>
    	      						    	</div>
    	      						    </div>
    	      						</div>
    	      					    <div className="form-horizontal col-md-6">
    	      						    <div className="form-group row text-capitalize">
    	      						    	<div className="col-md-4">
    	      						    		<label>PASSWORD:</label>
    	      						    	</div>
    	      						    	<div className="col-md-8">
    	      						    		<input type="password" className="form-control" name="pwd" id="pwd" onBlur={this.onPasswordChange.bind(this)} onChange={this.checkPass1.bind(this)}></input>
    	      						    	</div>
    	      						    </div>
    	      						</div>
    	      					</div>
    	      					<div className="col-md-12 row">
    	      						<div className="col-md-6">
    	      						</div>
    	      						<div className="form-horizontal col-md-6">
    	      						    <div className="form-group row text-capitalize">
    	      						    	<div className="col-md-4">
    	      						    		<label>REPEAT PASSWORD:</label>
    	      						    	</div>
    	      						    	<div className="col-md-8">
    	      						    		<input type="password" className="form-control" name="repeatpwd" id="repeatpwd" onBlur={this.onRepeatPasswordChange.bind(this)} onChange={this.checkPass2.bind(this)}></input>
    	      						    		<span id="confirmMessage" className="confirmMessage"></span>
    	      						    	</div>
    	      						    </div>
    	      						</div>
    	      					</div>
    	      						 
    	      					<div className="col-md-12 row">
    	      						<div className="form-horizontal col-md-6">
    	      							<div className="form-group row">
    	      								<div className="col-md-4">
    	      							    	<label><strong>GENDER:</strong></label>
    	      							    </div>
    	      								<div className="col-md-4">
    	      									<label>
    	      										<input type="radio" name="gender" onBlur={this.onGenderChange.bind(this)} id="optionsMale" value="male"></input>
    	      										    Male
    	      									</label>
    	      								</div>
    	      								<div className="col-md-4">
    	      									<label>
    	      										<input type="radio" name="gender" onBlur={this.onGenderChange.bind(this)} id="optionsFemale" value="female"></input>
    	      											Female
    	      									</label>
    	      								</div>
    	      							</div>
    	      						</div>
    	      						<div className="form-horizontal col-md-6">
    	      						    <div className="form-group row">
    	      						    	<div className="col-md-4">
    	      						    		<label>DATE OF BIRTH:</label>
    	      						    	</div>
    	      						    	<div className="col-md-8">
    	      						    		<input name="dateofbirth" type="date" className="form-control" onBlur={this.onDateOfBirthChange.bind(this)}></input>
    	      						    	</div>
    	      						    </div>
    	      						</div>
    	      					</div>

    	      					<div className="col-md-12 row">	    
    	      						<div className="form-horizontal col-md-6">
    	      						    <div className="form-group row">
    	      						    	<div className="col-md-4">
    	      						    		<label>STREET ADDRESS:</label>
    	      						    	</div>
    	      						    	<div className="col-md-8">
    	      						    		<input type="text" className="form-control" onBlur={this.onStreetAddressChange.bind(this)} name="streetaddress"></input>
    	      						    	</div>
    	      							</div>
    	      						</div>
    	      						<div className="form-horizontal col-md-6">
    	      						    <div className="form-group row">
    	      						    	<div className="col-md-4">
    	      						    		<label>SUBURB:</label>
    	      						    	</div>
    	      						    	<div className="col-md-8">
    	      						    		<input type="text" className="form-control" onBlur={this.onSuburbAddressChange.bind(this)} name="suburbaddress"></input>
    	      						    	</div>
    	      						    </div>
    	      						</div>
    	      					</div>
    	      					<div className="col-md-12 row">
    	      						<div className="form-horizontal col-md-6">
    	      						    <div className="form-group row">
    	      						    	<div className="col-md-4">
    	      						    		<label>CITY:</label>
    	      						    	</div>
    	      						    	<div className="col-md-8">
    	      						    		<input type="text" className="form-control" name="cityaddress"></input>
    	      						    	</div>
    	      						    </div>
    	      						</div>
    	      					</div>
    	      							
    	      					<div className="col-md-12 row">
    	      						<div className="form-horizontal col-md-6">
    	      						    <div className="form-group row">
    	      						    	<div className="col-md-4">
    	      						    		<label>PHONE:</label>
    	      						    	</div>
    	      						   		<div className="col-md-8">
    	      						    		<input type="number" className="form-control" name="phonenumber"></input>
    	      						    	</div>
    	      						    </div>
    	      						</div>
    	      						<div className="form-horizontal col-md-6">
    	      						    <div className="form-group row">
    	      						    	<div className="col-md-4">
    	      						    		<label>MOBILE:</label>
    	      						    	</div>
    	      						    	<div className="col-md-8">
    	      						    		<input type="number" className="form-control" onBlur={this.onMobileNumberChange.bind(this)} name="mobilenumber"></input>
    	      						    	</div>
    	      						    </div>
    	      						</div>		
    	      					</div>
    	      					<div className="col-md-12 row">
    	      						<div className="form-horizontal col-md-6">
    	      						    <div className="form-group row">
    	      						    	<div className="col-md-4">
    	      						    		<label>EMAIL:</label>
    	      						    	</div>
    	      						    	<div className="col-md-8">	
    	      						    		<input type="email" className="form-control" onBlur={this.onEmailAddressChange.bind(this)} name="emailaddress"></input>
    	      						    	</div>
    	      						    </div>
    	      						</div>
    	      						<div className="form-horizontal col-md-6">
    	      						    <div className="form-group row">
    	      						    	<div className="col-md-4">
    	      						    		<label>OCCUPATION:</label>
    	      						    	</div>
    	      						    	<div className="col-md-8">
    	      						    		<input type="text" className="form-control" name="occupation"></input>
    	      						    	</div>
    	      						    </div>
    	      						</div>
    	      					</div>
    	      					
    	      					<div className="col-md-12 row">
    	      						<div className="form-horizontal col-md-6">
    	      						    <div className="form-group row">
    	      						    	<div className="col-md-4">
    	      						    		<label>SUBSCRIPTION CATEGORY:</label>
    	      						    	</div>
    	      						   		<div className="col-md-8">
    	      							    	<select className="selectpicker" name="subscriptioncategory" onChange={this.onSubscriptionCategoryChange.bind(this)}>
    	      							    		<option disabled selected value> -- Refer Below -- </option>
    	      							    		<option value="Interclub Membership">Interclub Membership</option>
    	      							    		<option value="Social Membership">Social Membership</option>
    	      						    		</select>
    	      					    		</div>
    	      						    </div>
    	      						</div>
    	      						<div className="form-horizontal col-md-6">
    	      						    <div className="form-group row">
    	      						    	<div className="col-md-4">
    	      						    		<label>MEMBERSHIP TYPE:</label>
    	      						    	</div>
    	      						    <div className="col-md-8">
    	      						    	<select className="selectpicker" name="membershiptype" onChange={this.onMembershipTypeChange.bind(this)}>
    	      						    		<option disabled selected value> -- Refer Below -- </option>>
    	      						    		<option value="Family">Family</option>
    	      						    		<option value="Senior">Senior</option>
    	      						    		<option value="Student">Student</option>
    	      						    		<option value="Junior">Junior</option>
    	      					    		</select>
    	      								</div>
    	      						    </div>
    	      						</div>
    	      					</div>
    	      					<div className="table-responsive col-md-12">
                                    <div>
                                        <p><em>If more than one person completing the form please enter additional names below:</em></p>
                                    </div>
                                    <table className="table-bordered" name="additionalmembers">
                                        <thead>
                                            <tr>
                                                <th className="col-md-1">TITLE</th>
                                                <th className="col-md-3">FAMILY NAME</th>
                                                <th className="col-md-4">FIRST NAME</th>
                                                <th className="col-md-2">CATEGORY</th>
                                                <th className="col-md-1">GENDER</th>
                                                <th className="col-md-1">DATE OF BIRTH</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="col-md-12">
                                                        <select className="selectpicker" name="addtitle">
                                                            <option disabled selected value> -- Select -- </option>
                                                            <option value="Mr">Mr</option>
                                                            <option value="Mrs">Mrs</option>
                                                            <option value="Miss">Miss</option>
                                                            <option value="Ms">Ms</option>
                                                        </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="col-md-12">
                                                        <input type="text" name="addFamilyName"></input>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="col-md-12">
                                                        <input type="text" name="addFirstName"></input>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="col-md-12">
                                                        <select className="selectpicker" name="addSubscriptioncategory">
                                                            <option disabled selected value> -- Refer Below -- </option>
                                                            <option value="im">Interclub Membership</option>
                                                            <option value="sm">Social Membership</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-horizontal col-md-12 text-center">
                                                        <select className="selectpicker" name="addMembershiptype">
                                                            <option disabled selected value> -- Refer Below -- </option>
                                                            <option value="family">Family</option>
                                                            <option value="senior">Senior</option>
                                                            <option value="student">Student</option>
                                                            <option value="junior">Junior</option>
                                                        </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="radio col-md-12 row form-group form-horizontal">
                                                        <div className="col-md-6">
                                                            <label>
                                                                <input type="radio" name="addgender"  value="m"></input>M
                                                            </label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label>
                                                                <input type="radio" name="addgender"  value="f"></input>F
                                                            </label>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="col-md-12">
                                                        <input type="date" name="adddateofbirth"></input>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
    	      					

    	      				</form-horizontal>
    	      						

    	      	 			<div className="container">
    	      		 			<div>
    	      						<h4 className="text-center p-3"><strong>SUBSCRIPTION CATEGORY <br /><small> from 1st of SEPTEMBER to 31st of AUGUST</small></strong></h4>
    	      					</div>
    	      					<div className="col-md-12 row">
    	      						<div className="col-md-6">
    	      							<h5 className="text-center"><strong>A. INTERCLUB MEMBERSHIP</strong></h5>
    	      						</div>
    	      						<div className="col-md-6">
    	      							<h5 className="text-center"><strong>B. SOCIAL MEMBERSHIP</strong></h5>
    	      						</div>
    	      					</div>
    	      					<div className="col-md-12 row">
    	      						<div className="col-md-4">
    	      							<p>
    	      							Family (2 adults and 3 children under 18 yrs) <br />
    	      							Senior (18 yrs and over) <br />
    	      							Student (under 18 yrs) <br />
    	      							Junior (under 11 yrs) <br />
    	      							Extra Child (including affiliation fee)
    	      							</p>
    	      						</div>
    	      						<div className="col-md-2">
    	      							<p>
    	      							$500.00 <br /><br />
    	      							$220.00 <br />
    	      							$160.00 <br />
    	      							$120.00 <br />
    	      							$50.00
    	      							</p>
    	      						</div>
    	      						<div className="col-md-4">
    	      							<p>
    	      							Family (2 adults and 3 children under 18 yrs) <br />
    	      							Senior (18 yrs and over) <br />
    	      							Student (under 18 yrs) <br />
    	      							Junior (under 11 yrs) <br />
    	      							Extra Child (including affiliation fee)
    	      							</p>
    	      						</div>
    	      						<div className="col-md-2">
    	      							<p>
    	      							$350.00 <br /><br />
    	      							$180.00 <br />
    	      							$140.00 <br />
    	      							$100.00 <br />
    	      							$30.00
    	      							</p>
    	      						</div>
    	      					</div>
    	      					<div>
    	      			 			<p className="text-center"><em>Subscriptions include: MCTC Membership & Maintenance Levy, Auckland/NZ Tennis Affiliation Fees<br />50% to be paid by the end of October. Balance by the end of December.</em></p>
    	      			 		</div>
    	      			 		<div>
    	      						<h4 className="text-center"><strong>MCTC GATE KEY - $10.00</strong></h4>
    	      					</div>
    	      					<div>
    	      						<p className="text-center"><em>The gate key is monitored by MCTC Committee, and is your responsibility!<br />If your subscriptions fees are unpaid in the current year, your gate key will automatically be cancelled.</em></p>
    	      					</div>
    	      					<div>
    	      						<h5 className="text-center"><strong>Payment Details: Mangere Combined Tennis Club (ASB) 12 3054 0227773 00</strong></h5>
    	      					</div>
    	      					<div>
    	      						<p className="text-center">Enter you <strong>name</strong> for reference and code <strong>202</strong></p>
    	      						<p className="text-center"><strong>GST: 61 681 892</strong></p>
    	      					</div>

    	      					<div className="col-md-7 col-centered row">
    	      						<div className="col-md-3">
    	      							<p className="text-right">Fee enclosed $</p>
    	      						</div>
    	      						<div className="col-md-4">
    	      							<input type="number" className="form-control" name="fee" onBlur={this.onFeeChange.bind(this)}></input>
    	      						</div>
    	      						<div className="radio col-md-5 row form-group form-horizontal" name="feetype">
    	      							<div className="col-md-6">
    	      								<label>
    	      									<input type="radio" name="feetype" onChange={this.onFeeTypeChange.bind(this)} id="optionsCash" value="cash"></input>
    	      									    Cash
    	      								</label>
    	      							</div>
    	      							<div className="col-md-6">
    	      								<label>
    	      									<input type="radio" name="feetype" onChange={this.onFeeTypeChange.bind(this)} id="optionsCheque" value="cheque"></input>
    	      										Cheque
    	      								</label>
    	      							</div>
    	      						</div>
    	      						<div className="col-md-12 row">
    	      							<div className="col-md-1 checkbox">
    	      								<input type="checkbox" name="agreetoterms" onBlur={this.onAgreeToTermsChange.bind(this)}></input>
    	      							</div>
    	      							<p className="col-md-11">
    	      								I agree to the above terms and conditions and will abide by the Constitution and bylaws of the Mangere Combined Tennis club Inc.
    	      							</p>
    	      						</div>
    	      					</div>
    	      				</div>

    	      				<div className="row p-3">
                                <div className="col-md-12 text-center">
                                    <button disabled={this.state.buttonIsDisabled} type="submit" className="btn btn-primary" onclick={this.state.onSubmitClick}>SUBMIT</button>
                                </div>
    	      				</div>
    	      				<br />
    	      			</form>
    	      	 </div>
    	      </div>
    	    </div>
    	</section>


    
    );
  }
}

export default Membership;