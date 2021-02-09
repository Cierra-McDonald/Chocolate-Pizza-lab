import React from 'react';
import OurIngredientItem from './IngredientItem'
import pizzaCookie from '../data'


class OurIngredientList extends React.Component { 
    render() { 
      
  const cookieList = 
  pizzaCookie.map(
    singleCookieObject => 
      < OurIngredientItem cookieProp={
        singleCookieObject
      } />)
      return ( 
        <div>
          <h1>Ingredients:</h1>
        { cookieList }
        </div>
      );
    }
  }

  export default OurIngredientList;