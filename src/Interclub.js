import React, { Component } from 'react';

class Interclub extends Component {

    render() {
        return (
             <div className="interclubbg">
                <div className="container-fluid interclub">
                    <section className="col-md-12 text-white">
                      <div className="container">
                        <div className="row align-items-center">
                          <div className="col-md-6 order-2">
                            <div className="p-5">
                              <img className="img-fluid img-rounded" src="pictures/interclub1.png" alt=""/>
                            </div>
                          </div>
                          <div className="col-md-6 order-1">
                            <div className="p-5">
                                <h1 className="display-4">INTERCLUB</h1>
                                <p>Junior Interclub happens every Saturdays and Sundays from 9:00 am onwards. Games take place at clubs across Auckland, so you need to be able to transport your child to games. Talk to <em>Frances</em> for more details.</p>
                                <div className="text-center row">
                                    <div className="col-md-6">
                                        <a href="https://www.tennisauckland.co.nz/tennis-auckland/junior/"><img className="juniorlink" src="pictures/juniorlink.png" alt="MCTC"></img></a>
                                        <p>Junior's Website</p>
                                    </div>
                                    <div className="col-md-6">
                                        <a href="https://www.tennisauckland.co.nz/tennis-auckland/senior/"><img className="juniorlink" src="pictures/seniorlink.png" alt="MCTC"></img></a>
                                        <p>Senior's Website</p>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <aside className="container-fluid">
                        <div className="col-md-12 clubnightcaption">
                            <div className="col-md-6 float-right">
                                <h1 className="display-4">CLUB NIGHTS</h1>
                                <p><strong>_____________________________________________________________</strong></p>
                                <p className="clubnights">
                                    Club nights provide casual play for players of all levels. Games typically last<br /> 
                                    for 20 minutes and can be doubles, mixed or singles depending on the number <br />
                                    of attendees.<br /><br />
                                    Please join us every Monday from 5:30 pm for a hit and fun!<br /><br />
                                    
                                    Non-members are welcome to avail for the free 2 Monday - Club Nights trial.<br />
                                    For only $10/night or $80 for 10 nights. <br /> <br />

                                    <strong><em>New to the club? Please come down, check the club out and join!</em></strong><br /><br />
                                </p>
                            </div>   
                        </div>
                    </aside>
                </div>
            </div>
        );
    }
}

export default Interclub;