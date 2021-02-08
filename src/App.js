import React from 'react'
import './App.css';
import {Switch,BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import OurHeader from './components/Header'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            < OurHeader/>
            <Route path="/Home" component={Home}/>
            <nav><Link to ='/Home'> Home </Link></nav>
          </Switch>
        </Router>
      <p>
          Edit <code>src/App.js</code> and save to reload.
      </p>
      <div>Hello!</div>
      </header>
    </div>
  );
}
// function OurHeader(props) { 
//   return <h1>Hello, {props.name}</h1>
// }




export default App;
