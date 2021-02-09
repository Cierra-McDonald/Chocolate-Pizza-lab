import React from 'react'
import './App.css';
import {Switch,BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import OurHeader from './components/Header'
import OurFooter from './components/Footer'
import ImageSection from './components/ImageSection'
import OurRecipe from './components/Recipe';
import OurIngredientList from './components/IngredientList'
import pizzaCookie from './data.js'



function App() {
  return (
    <div className="App">
   <Router>
      < OurHeader/>
      <header className="App-header">
      < ImageSection/>
      < OurRecipe/>
      < OurIngredientList class = "our-list" />
      </header>
      < OurFooter/>
    </Router>
    </div>
  );
}



export default App;
