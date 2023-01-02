import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Main from './main';
import Contact from './contact';
import './App.css';
import About from './about';
import Estimation_tools from './estimation_tools';
  
class App extends Component {
  render() {
    return (
<div>
  <Route exact path='/' component={Main}/>
  <Route exact path='/tools' component={Estimation_tools}/>
</div>
   );
  }
}
  
export default App;