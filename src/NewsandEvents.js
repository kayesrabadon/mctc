import React, { Component } from 'react';
import axios from 'axios';

class NewsandEvents extends Component {

	constructor() {
	    super();
	    this.state = {
	      news: [],
	    };
	}

	componentWillMount(){
   		const $this = this;

	    axios.get('http://localhost:3001/api/selectNews')
	        .then(function (response) {
	        $this.setState({news:response.data})
	        console.log(response.data);
	        })
	        .catch(function (error) {
	        console.log(error);
	        });
  	}
	
  	render() {
	  	let news_rows = [];
	    this.state.news.map((news, i) => 
			news_rows.push(
				<div key={i}>
					<div className="col-md-12" key={i}>
						<h4>{news.newstitle}</h4>
					
						<img className="img-responsive" src={'/uploads/'+news.newspicture} />
						<p>{news.newscontent}</p>
						 <hr/>
				    </div>
			    </div>
		    )
	    );
	    return (
	    	<form className="container newsAndEventsForm">
	    		<div className="row">
			        <div className="col-lg-12">
		                <h1 className="coaching page-header">News And Events
		                </h1>
		                <ol className="breadcrumb">
		                    <li className="active">Mangere Combined Tennis Club, Inc.</li>
		                </ol>
		            </div>
		        </div>

		        <div className="row">
		            {news_rows}	            
			    </div> 
	    	</form>
	    );
  	}
}

export default NewsandEvents;