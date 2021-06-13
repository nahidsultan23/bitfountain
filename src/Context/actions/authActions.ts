import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from './types';

import { setCookie, deletCookie } from '../../Cookie/index';

// -----------------------  Login  -------------------------------
export async function loginUser(dispatch: any, loginPayload: any) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginPayload),
    };
  
    try {
        dispatch({ type: LOGIN_REQUEST });
            let response = await fetch(`/login`, requestOptions);
            let data = await response.json();

            if (data.user) {
            dispatch({ type: LOGIN_SUCCESS, payload: data });
            localStorage.setItem('currentUser', JSON.stringify(data.user));
            setCookie('app_token', data.access_token, 1);
            return data
        }

        dispatch({ type: LOGIN_FAILURE, error: data.message });
        return;
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, error: error });
    }
}

// -----------------------  Logout   -------------------------------
export async function logout(dispatch: any) {
    dispatch({ type: LOGOUT });
    localStorage.removeItem('currentUser');
    deletCookie('app_token');

}