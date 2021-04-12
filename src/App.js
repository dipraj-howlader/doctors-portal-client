import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Login from './Components/Login/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import DashBoard from './Components/DashBoard/DashBoard/DashBoard';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path ="/home">
          <Home></Home>
        </Route>
        <Route exact path ="/">
        <Home></Home>
        </Route>
        <Route path ="/appointment">
          <Appointment></Appointment>
        </Route>
        <Router path ="/dashboard/appointment">
      <DashBoard></DashBoard>
        </Router>
        <Route path ="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
