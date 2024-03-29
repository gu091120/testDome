import "./assets/main.less";
import * as React from "react";

import { HashRouter as Router, Route, Link } from "react-router-dom";

import About from './components/About';

import {Provider} from "react-redux";
import {createStore} from "redux";
const store = createStore(rootReducer);
import rootReducer from "./reducer/index";
import Home from './containers/AddCount';
class App extends React.Component{

  componentDidMount(){
  }
  render(){
    return (
      <div className="container">
        <Router >
          <h1 >hello world</h1>
          <img src={require("./assets/react-icon.png")}  />
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          <div >
            <Link to="/home" >home</Link>
            <Link to="/about" >about</Link>
          </div>
        </Router>
      </div>
    )
  }
}


const Providers  = ()=>(<Provider store={store}><App/></Provider>)
export default Providers;
