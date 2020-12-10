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

  /* Build after make below changes for deploy in other url/path :
  	<Router basename="WORKING/todoapp"> :For customized path & it produced url -> http://localhost/WORKING/todoapp/ 
	 Also add a line in package.json file => "homepage": "http://localhost/WORKING/todoapp/",
  */

export default App;