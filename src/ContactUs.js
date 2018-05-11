import React, { Component } from 'react';
import {Icon} from 'react-fa';

class ContactUs extends Component {
  render() {
    return (
      <div className="backgroundPhoto">
        <img className="contactusImg background-image" src="pictures/nzmap8.png" alt="MCTC"></img>
      	<section className="contactUsPage container-fluid">
          <div className="col-md-12">
      			<h1 className="text-center contactus"><strong>CONTACT US</strong></h1>
      		</div>
          <div>
        		<div className="col-md-12">
  				   <p className="text-center"><strong>Situated in the heart of Mangere at House Park, the Mangere Combined Tennis Club (MCTC) offers 5 artificial grass floodlit tennis courts, changing facilities, and easy off-street parking. We are five minutes drive from the Auckland International Airport AND with motels and hotels at a walking distance; visitors are sure to enjoy a game of fun and laughter.</strong></p>
    			  </div>
  	        <div className="col-md-12 text-center linkSitesAll row">
  	            <div className="col-md-3">
  	              <a href="https://mail.google.com/mail/u/0/#inbox?compose=new"><span className="fa fa-envelope linksites fa-5x"></span></a>
                  <p className="text-center">mctctennis@gmail.com</p>
                </div>
  	            <div className="col-md-3">
  	              <a href="https://www.facebook.com/mangerecombined.tennisclub"><span className="fa fa-facebook-official fa-5x linksites"></span></a>
                  <p className="text-center">facebook</p>
                </div>
                <div className="col-md-3">
                  <a href=""><span className="fa fa-phone linksites fa-5x"></span></a>
                  <p className="text-center">275 4125</p>
                </div>
                <div className="col-md-3">
                  <a href="https://www.google.com/maps/place/247+Kirkbride+Rd,+Mangere,+Auckland+2022,+New+Zealand/@-36.9754286,174.7890384,362m/data=!3m1!1e3!4m5!3m4!1s0x6d0d4f9939ec6b15:0x193f78b2a3902334!8m2!3d-36.9750428!4d174.7905645?hl=en"><span className="linksites fa fa-map-marker fa-5x"></span></a>
                  <p className="text-center">location</p>
                </div>
  	        </div>
          </div>
  		  </section>
    	</div>
    );
  }
}

export default ContactUs;