import axios from 'axios';

import { authHeader } from '../_helpers';

export const userService = {
    login,
    logout,
};

function login(username, password) {
    const requestOptions = {
        'Content-Type': 'application/json'
        // body: ({"username": username,"password": password })
    };

    return axios.post(`https://5f3a0bbe2300b100169a8571.mockapi.io/Users`, { "username": username, "password": password })
        .then(user => {
            console.log(user)
            if (user.status === 201) {
                console.log(user)
                localStorage.setItem('user', JSON.stringify(user.data));
                return user.data;
            }
            return null
        }).catch(e => {
            console.log("loi")
        })
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

