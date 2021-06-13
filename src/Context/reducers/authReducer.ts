import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from "../actions/types";

import { getCookie } from '../../Cookie/index';

let user = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")!)
    : "";

let token = getCookie('app_token') ? getCookie('app_token') : "";

export const initialState = {
    userDetails: "" || user,
    token: "" || token,
    loading: false,
    errorMessage: null
};

export const AuthReducer = (initialState: any, action: any) => {
    console.log(action)
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...initialState,
                loading: true
            };
        case LOGIN_SUCCESS:
            return {
                ...initialState,
                user: action.payload.user,
                token: action.payload.access_token,
                loading: false
            };
        case LOGIN_FAILURE:
            return {
                ...initialState,
                loading: false,
                errorMessage: action.error
            };
        case LOGOUT:
            return {
                ...initialState,
                user: "",
                token: ""
            };

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};