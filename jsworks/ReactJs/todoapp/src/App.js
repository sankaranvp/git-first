import React from "react";
/*import logo from './logo.svg';
import './App.css'; */
import {BrowserRouter as Router, Route} from "react-router-dom";
import TodoApp from "./component/TodoApp/TodoApp";
import About from "./component/About/About";
import Header from "./component/Header/Header";

const App = () =>{
    return (
            <Router>
              <Header />
              <Route path="/" exact component={TodoApp} />
              <Route path="/about" component={About} />
            </Router>
    );
  };

export default App;