import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import Home from './Home';
import Membership from './Membership';
import AdminNewsandEvents from './AdminNewsandEvents';
import AdminMembership from './AdminMembership';
import NewsandEvents from './NewsandEvents';
import ContactUs from './ContactUs';
import JuniorProgram from './JuniorProgram';
import Interclub from './Interclub';
import Login from './Login';
import Coaching from './Coaching';
console.log(localStorage.token)
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.token ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )}
  />
);
ReactDOM.render((
	<Router history={createHistory}>
		<App>
			<Route exact={true} path="/" component={Home} />
			<Route exact={true} path="/membership" component={Membership} />
			<Route exact={true} path="/juniorprogram" component={JuniorProgram} />
			<Route exact={true} path="/interclub" component={Interclub} />
			<Route exact={true} path="/contactus" component={ContactUs} />
			<Route exact={true} path="/newsandevents" component={NewsandEvents} />
			<PrivateRoute exact={true} path="/adminmembership" component={AdminMembership} />
			<PrivateRoute exact={true} path="/adminnewsandevents" component={AdminNewsandEvents} />
			<Route exact={true} path="/coaching" component={Coaching} />
			<Route exact={true} path="/login" component={Login} />
		</App>
	</Router>
),	
document.getElementById('root'));
registerServiceWorker();