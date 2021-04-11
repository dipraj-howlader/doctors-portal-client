import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Appointment from './Components/Appointment/Appointment/Appointment';

function App() {
  return (
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
      </Switch>
    </Router>
  );
}

export default App;
