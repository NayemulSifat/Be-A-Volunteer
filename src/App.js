import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import NewVolunteer from './components/NewVolunteer/NewVolunteer';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import JoinedEvent from './components/JoinedEvent/JoinedEvent';
import Error from './components/Error/Error';
export const UserContext = createContext();


function App() {
  const [loggedInUser, setloggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setloggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/events">
            <JoinedEvent />
          </PrivateRoute>
          {/* <Route path="/events">
             <JoinedEvent />
          </Route> */}
          <PrivateRoute path="/newvolunteer/:id">
            <NewVolunteer />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
