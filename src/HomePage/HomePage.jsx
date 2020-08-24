import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
class HomePage extends React.Component {
    componentDidMount() {
        // this.props()
    }



    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.id}!</h1>
                <h3>Tên tài khoản:{user.username}</h3>


                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}



const connectedHomePage = connect(mapState)(HomePage);
export { connectedHomePage as HomePage };