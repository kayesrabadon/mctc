import React, { Component } from 'react';
import axios from 'axios';

class AdminNewsandEvents extends Component {
	constructor() {
	    super();
	    this.state = {
	      news: [],
	    };
	}

	// componentWillMount(){
 //   		const $this = this;
	//     axios.get('http://localhost:3001/api/selectNews')
	//         .then(function (response) {
	//         $this.setState({news:response.data})
	//         console.log(response.data);
	//         })
	//         .catch(function (error) {
	//         console.log(error);
	//         });
	// };

	handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		let fd =  new FormData()
		fd.append('newstitle', form.newstitle.value)
		fd.append('newscontent', form.newscontent.value)
		fd.append('newspicture', form.newspicture.files[0])

        axios({
          method: 'POST',
          url: 'http://localhost:3001/api/insertnews',
          data: fd,
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		 });

	}

    render() {
    	let todos = this.state.todos;
        return (
        	<div>
            // <form className="container" method="POST" action="http://localhost:3001/api/insertnews">
	           // 	<div className="col-md-12 row">	
	           // 		<div className="col-md-5">
		          //   	<input type="file" name="newspicture"></input>
		          //   	<input placeholder="title" type="text" name="newstitle" ref="newstitle"></input>
		          //   	<textarea className="textAreanewsAndEvent" type="text" name="newscontent" ref="newscontent"></textarea>
		          //   	<button type="submit" className="btn btn-primary">Submit</button>
	           //  	</div>
	           //  	<div className="col-md-6">

	           //  	</div>
	           //  </div>
            // </form>
		    <div className="row">
	    		<div className="col-md-12" style={{"margin":"30px"}}>
     				<form encType="multipart/form-data" method="POST" onSubmit={this.handleSubmit}>
     				  <div className="form-group">
     				    <label htmlFor="newstitle" name="newstitle">News Title:</label>
     				    <input type="text" className="form-control" id="newstitle" required></input>
     				  </div>
     				  <div className="form-group">
     				    <label htmlFor="newscontent" name="newscontent">News Content:</label>
     				    <input type="text" className="form-control" id="newscontent" required></input>
     				  </div>
     				  <div className="form-group">
     				    <label htmlFor="newspicture" name="newspicture">News Picture:</label>
     				    <input type="file" name="newspicture" className="form-control" id="newspicture" required></input>
     				  </div>
     				  <button type="submit" className="btn btn-default">Submit</button>
     				</form>
	     		</div>
	     	</div>
	     	</div>
        );
    }
}

export default AdminNewsandEvents;