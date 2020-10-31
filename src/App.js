// import {Browserrouter as Router,Switch,Route} from "react-router-dom";
import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router";
import "./App.css";
import Chat from "./Chat.js";
import Sidebar from "./Sidebar.js";
import Login from "./Login";
import { useStatevalue } from "./StateProvider";

function App() {
  const [{user},dispatch] = useStatevalue();
  

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
