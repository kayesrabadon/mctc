import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class JuniorProgram extends Component {
  componentWillMount(){
    const SmoothScroll = () => (
      <div>
        <AnchorLink href="#juniorcoaching"><img className="juniorlinks" src="pictures/juniorcoaching.png" alt="MCTC"></img></AnchorLink>
        <AnchorLink href="#juniorholiday"><img className="juniorlinks" src="pictures/juniorholiday.png" alt="MCTC"></img></AnchorLink>
        <AnchorLink href="#juniorhotshots"><img className="juniorlinks" src="pictures/juniorhotshots.png" alt="MCTC"></img></AnchorLink>
      </div>
    )
  }
    render() {
        return (
            <section>
              <div class="container">
                <div class="row">
                  <div className="col-md-12 ">
                    <h1 className="coaching text-center">JUNIOR PROGRAMS</h1>
                    <div className="text-center">
                          <a href="#juniorcoaching"><img className="juniorlinks" src="pictures/juniorcoaching.png" alt="MCTC"></img></a>
                          <a href="#juniorholiday"><img className="juniorlinks" src="pictures/juniorholiday.png" alt="MCTC"></img></a>
                          <a href="#juniorhotshots"><img className="juniorlinks" src="pictures/juniorhotshots.png" alt="MCTC"></img></a>
                    </div>
                  </div>
                </div>

                <section id="juniorcoaching">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-md-6 order-2">
                        <div className="p-5">
                          <img className="img-fluid img-rounded" src="pictures/junior4.png" alt=""/>
                        </div>
                      </div>
                      <div className="col-md-6 order-1">
                        <div className="p-5">
                          <h2>Coaching</h2>
                          <p>We have designed our junior coaching programme to suit all levels: A system that allows children to learn the sport while having fun. It also develops their skills and their confidence.<br /><br />
                            Junior coaching is covered under our subscription fees. Coaching is conducted in terms 1 & 4 only. We offer 2 coaching sessions per week and children are placed in age groups or with players of similar ability.<br /><br />
                            Coaching programs are run on Tuesday and Thursday afternoons. Junior coaching will commence on <strong>Tuesday</strong> 10th October – <strong>Thursday</strong> 14th December 2017.<br /><br />
                            Private lessons are also available. Call <strong>Frances</strong> on <em>0274716127</em>. <br /><br />
                            Our annual junior membership subscription includes all-year access and use of all facilities.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container">
                        <div className="row">
                          <div className="col-md-4 paneljunior2">
                              <div className="panel panel-default paneljunior">
                                  <div className="panel-heading paneljunior">
                                      <h3><strong>Grasshoppers</strong></h3>
                                      <h4><strong>5-7 years old</strong></h4>
                                      <h4><strong>______________________________</strong></h4>
                                  </div>
                                  <div className="panel-body paneljunior">
                                      <p><strong>Weekly coaching:</strong></p>
                                      <p><strong>Tuesday & Thursdays</strong></p>
                                      <p><strong>4:00-4:45pm</strong></p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-4 paneljunior3">
                              <div className="panel panel-default paneljunior">
                                  <div className="panel-heading paneljunior">
                                      <h3><strong>Juniors</strong></h3>
                                      <h4><strong>8-11 years old</strong></h4>
                                      <h4><strong>______________________________</strong></h4>
                                  </div>
                                  <div className="panel-body paneljunior">
                                      <p><strong>Weekly coaching:</strong></p>
                                      <p><strong>Tuesday & Thursdays</strong></p>
                                      <p><strong>4:45-5:30pm</strong></p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-4 paneljunior1">
                              <div className="panel panel-default paneljunior">
                                  <div className="panel-heading paneljunior">
                                      <h3><strong>Students</strong></h3>
                                      <h4><strong>12 years and over</strong></h4>
                                      <h4><strong>______________________________</strong></h4>
                                  </div>
                                  <div className="panel-body paneljunior">
                                      <p><strong>Weekly coaching:</strong></p>
                                      <p><strong>Tuesday & Thursdays</strong></p>
                                      <p><strong>5:30-6:30pm</strong></p>
                                  </div>
                              </div>
                          </div>
                        </div>
                      </div>
                      <section>
                        <div className="container">
                          <div className="row align-items-center">
                            <div className="col-md-6">
                              <div className="p-5">
                                <img className="img-fluid img-rounded" src="pictures/junior2.png" alt=""/>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="p-5">
                                <p>
                                We will have a trial on Winter Coaching next year, <strong>Monday</strong> afternoon sessions from (May-Aug). This is extra coaching which is not included in the membership fee. If interested, please see Frances for more details.      
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <div className="container juniorbg">
                        <br /><br />
                        <div className="col-md-12 row">
                            <p className="col-md-6 text-center text-white">
                              <strong>A.&nbsp;&nbsp;&nbsp;&nbsp;JUNIOR INTERCLUB MEMBERSHIP</strong><br />
                              &nbsp;&nbsp;&nbsp;&nbsp; Student (U/18)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $160.00<br />
                              &nbsp;&nbsp;&nbsp;&nbsp; Junior (U/18)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $120.00<br /><br />
                            </p>
                            <p className="col-md-6 text-center text-white">      
                              <strong>B.&nbsp;&nbsp;&nbsp;&nbsp;JUNIOR SOCIAL MEMBERSHIP</strong><br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Student (U/18)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $140.00<br />
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Junior (U/18)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $100.00<br /><br />
                            </p>
                        </div>
                      </div>      
                      <section>
                        <div className="container">
                          <div className="row align-items-center">
                            <div className="col-md-6 order-2">
                              <div className="p-5">
                                <img className="img-fluid img-rounded" src="pictures/junior3.png" alt=""/>
                              </div>
                            </div>
                            <div className="col-md-6 order-1">
                              <div className="p-5">
                                <p>Account Details: Mangere Combined Tennis Club <br />
                                  <strong>(ASB)12 3054 0227773 00</strong><br />
                                  Enter your <strong>name</strong> for <em>reference</em> and <em>code</em> <strong>202</strong><br />
                                  <strong>GST: 61 681 892</strong>     
                                  <br /><br />
                                  <strong>PAYMENT OPTIONS</strong><br />
                                  &nbsp;&nbsp;&nbsp;&nbsp; 1. Cash <br />
                                  &nbsp;&nbsp;&nbsp;&nbsp; 2. Cheque payable to Mangere Combined Tennis Club.<br />
                                  &nbsp;&nbsp;&nbsp;&nbsp; 3. Internet Banking<br /><br />   
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>                      
                </section>                      
                <section className="juniorHoliday" id="juniorholiday">
                  <br />
                  <div className="container-fluid">
                    <section>
                      <div className="container">
                        <div className="row align-items-center">
                          <div className="col-md-6">
                            <div className="p-5">
                              <img className="img-fluid img-rounded" src="pictures/holidayprograms1.png" alt=""/>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="p-5">
                              <h3 className="text-center juniorcaption"><br /><strong>Holiday Programs</strong></h3>
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
                              <img className="img-fluid img-rounded" src="pictures/holidayprograms2.png" alt=""/>
                            </div>
                          </div>
                          <div className="col-md-6 order-1">
                            <div className="p-5">
                              <p>We provide Breakaway holiday programme during school holidays for children between the ages 11-17 years. 
                                The programme runs from 9:00am-1:30pm weekdays Monday-Friday and is COMPLETELY FREE, sponsored by Counties Manukau Sports.<br /><br />
                                Under aged children are accepted. Terms and Conditions Apply. Contact us for more details.      
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </section>
                <section className="juniorHotshots" id="juniorhotshots">
                  <div className="container p-5">
                    <h3 className="text-center"><strong>Hot Shots</strong></h3>
                    <section>
                      <div className="container">
                        <div className="row align-items-center">
                          <div className="col-md-6">
                            <div className="p-5">
                              <img className="img-fluid img-rounded" src="pictures/junior6.png" alt=""/>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="p-5">
                              <br />
                              <p>Tennis Hot Shots Community Play is designed especially for kids of primary school age to provide an opportunity for them to play tennis in a fun supportive environment.<br /><br />
                              This exciting participation programme is a branch of Tennis New Zealand’s official kid’s development programme Tennis Hot Shots.  Community Play is not coaching. The focus of Community Play will be on kids enjoying playing the game of tennis with friends and being a good sport.<br /><br />
                              Coaches, parents, guardians and club volunteers can all get involved by assisting on-court with scoring and reinforcing the <em>“be a good sport”</em> messages.<br /><br />
                              To help promote an immediate sense of fun and achievement, kids who participate in Community Play will use modified equipment scaled especially for them. This means smaller courts, racquets and low compression tennis balls.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </section>
              </div>
      </section>

         
        );
    }
}

export default JuniorProgram;