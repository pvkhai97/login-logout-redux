import { userConstants } from '../_constants';
import { userService } from '../_services';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,

};

function login(username, password) {
    return dispatch => {
        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    console.log("loi",user)

                }
            );
    };

    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

