import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";

import Users from "./users/pages/Users";
import NewLocation from "./locations/pages/NewLocation";
import MainNavigation from "./common/components/Navigation/MainNavigation";
const App = () => {
    return (
        <Router>
            < MainNavigation />
            <Switch>
                <Route path="/" exact>
                    <Users />
                </Route>
                <Route path="/locations/new" exact>
                    <NewLocation />
                </Route>
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};


export default App;