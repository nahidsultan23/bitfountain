import React, { useReducer } from "react";

import {
    AuthReducer,
    initialState
} from './reducers/authReducer';

const AuthStateContext = React.createContext<any>({ initialState });
const AuthDispatchContext = React.createContext<any>({ initialState });

export function useAuthState() {
    const context = React.useContext(AuthStateContext);
    if (context === undefined) {
        throw new Error("useAuthState must be used within an AuthProvider");
    }
  
    return context;
}

export function useAuthDispatch() {
    const context = React.useContext(AuthDispatchContext);
    if (context === undefined) {
        throw new Error("useAuthDispatch must be used within an AuthProvider");
    }
  
    return context;
}

interface ChildType {
    children: React.ReactNode;
}

export const AuthProvider = ({ children }: ChildType) => {
    const [user, dispatch] = useReducer(AuthReducer, initialState);
  
    return (
        <AuthStateContext.Provider value={user}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    );
};