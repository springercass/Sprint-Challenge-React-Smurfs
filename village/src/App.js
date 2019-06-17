import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error));
  }

  addSmurf = smurf => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error));
  };

  deleteSmurf = (event, id) => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error));
  };

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <nav className="nav">
          <div className="navtext">
            <NavLink to="/" className="navLink">
              Home
            </NavLink>
          </div>
          <div className="navtext">
            <NavLink to="/SmurfForm" className="navLink">
              Add Smurf
            </NavLink>
          </div>
        </nav>
        <Route
          exact
          path="/"
          render={props => (
            <div className="home">
              <SmurfForm {...props} addSmurf={this.addSmurf} />
              <Smurfs
                {...props}
                smurfs={this.state.smurfs}
                deleteSmurf={this.deleteSmurf}
              />
            </div>
          )}
        />
        <Route
          path="/SmurfForm"
          render={props => <SmurfForm {...props} addSmurf={this.addSmurf} />}
        />
      </div>
    );
  }
}

export default App;
