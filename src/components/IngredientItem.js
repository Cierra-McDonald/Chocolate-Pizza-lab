import React from 'react';

class OurIngredientItem extends React.Component { 
    render() { 
  
      return ( 
        
          <div class = "ingredient-container">
            <div class ="ingredient">{this.props.cookieProp.amount}</div>
            <div class ="ingredient">{this.props.cookieProp.name}</div>
          </div>
        
      )
    }
  }

  export default OurIngredientItem;