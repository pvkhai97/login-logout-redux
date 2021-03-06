import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { RegisterPage } from '../RegisterPage';
import { LoginPage } from '../LoginPage/LoginPage';

class App extends React.Component {
    constructor(props) {
        super(props);

        // history.listen((location, action) => {
        //     // clear alert on location change
        //     this.props.clearAlerts();
        // });
    }

    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">

                        <Router history={history}>
                            <Switch>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                                <Redirect from="*" to="/" />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}



const connectedApp = connect(mapState)(App);
export { connectedApp as App };