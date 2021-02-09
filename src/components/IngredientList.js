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
        <>
        { cookieList }
        </>
      );
    }
  }

  export default OurIngredientList;