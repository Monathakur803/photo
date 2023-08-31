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
import UserLocations from "./locations/pages/UserLocations";
const App = () => {
    return (
        <Router>
            < MainNavigation />
            <main>
                <Switch>
                    <Route path="/" exact>
                        <Users />
                    </Route>
                    <Route path="/locations/new" exact> 
                        <UserLocations />
                        <NewLocation />
                    </Route>
                    <Route path="/locations/new" exact>
                        <NewLocation />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </main>
        </Router>
    );
};


export default App;