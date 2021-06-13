import {
    Redirect,
    Route
} from "react-router-dom";

import { RouteType } from './CustomTypes';
import { useAuthState } from '../Context';

const AppRoutes = ({ component, path, isPrivate, ...rest }: RouteType) => {
    const userDetails = useAuthState()
    const ChildComponent = component;
    return (
        <Route
            path={path}
            render={props =>
                isPrivate && !Boolean(userDetails.token) ? (
                <Redirect
                    to={{ pathname: "/login" }}
                />
                ) : (
                <ChildComponent {...props} />
                )
            }
            {...rest}
        />
    )
}
  
export default AppRoutes;