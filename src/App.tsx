import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom';


import { AuthProvider } from "./Context";
import routes from './Config/routes';
import AppRoute from './Components/AppRoutes';

const App = () => {
    return(
        <div className="App">
            <AuthProvider>
                <Router>
                    <Switch>
                        {routes.map((route) => (
                            <AppRoute
                                key={route.path}
                                exact={route.exact}
                                path={route.path}
                                isPrivate={route.isPrivate}
                                component={route.component}
                            />
                        ))}
                    </Switch>
                </Router>
            </AuthProvider>
        </div>
    )
}

export default App;
