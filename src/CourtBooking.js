import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import myEventsList from './events';
import 'react-big-calendar/lib/css/react-big-calendar.css';

class CourtBooking extends Component {

  componentWillMount(){
		BigCalendar.momentLocalizer(moment);
  }
  render() {
  	let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

    return (
 
      	<BigCalendar
      	     {...this.props}
      	     events={myEventsList}
      	     views={allViews}
      	     step={60}
      	     defaultDate={new Date(2017, 1, 1)}
      	   />
  
    );
  }
}

export default CourtBooking;