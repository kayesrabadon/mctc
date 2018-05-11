import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
    <div>
        <header className="masthead">
          <div className="overlay">
            <div className="container covertitle">
              <h1 className="display-1 text-white text-center">Mangere Combined Tennis Club, Inc.</h1>
              <h2 className="display-4 text-white text-center">(MCTC)</h2>
            </div>
          </div>
        </header>

        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 order-2">
                <div className="p-5">
                  <img className="img-fluid img-rounded" src="pictures/home2.png" alt=""/>
                </div>
              </div>
              <div className="col-md-6 order-1">
                <div className="p-5">
                  <h2 className="display-4">Mission</h2>
                  <p>“To be recognised as one of the best community-based club in Auckland, renowned for the warmth of its hospitality, vibrancy, and members’ engagement in club activities, across all ages.”</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="p-5">
                  <img className="img-fluid img-rounded" src="pictures/home1.png" alt=""/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-5">
                  <h2 className="display-4">Vision</h2>
                  <p>“To provide excellent tennis and social facilities to the local community, with a strong youth section and an emphasis on player development for members alike.”</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 order-2">
                <div className="p-5">
                  <img className="img-fluid img-rounded" src="pictures/home3.png" alt=""/>
                </div>
              </div>
              <div className="col-md-6 order-1">
                <div className="p-5">
                  <p>We invite you to try out our club without obligation. If you have played before come along and join our organised club play. If you have not played before or are a novice player, our coaching team offers a variety of Junior and Adult coaching options suitable for all ages and abilities. Want to know more? Please visit our Contact Us page.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>


        


    );
  }
}

export default Home;