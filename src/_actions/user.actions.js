import { userConstants } from '../_constants';
import { userService } from '../_services';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,

};



function login(username,password){
    return  dispatch => {
        const response =   userService.login(username, password)
        history.push('/');
        dispatch({ type: 'type: userConstants.LOGIN_SUCCESS', payload: response });
       
    }
}

// function login(username, password) {
//     return dispatch => {
//         userService.login(username, password)
//             .then(
//                 user => { 
//                     dispatch({type: userConstants.LOGIN_SUCCESS, user});
//                     history.push('/');
//                 },
//                 error => {
//                     console.log("loi",user)

//                 }
//             );
//     };

// }

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

