import React from 'react';

class OurIngredientItem extends React.Component { 
    render() { 
      return ( 
        <div>
            <p>{this.props.cookieProp.amount}</p>
            <p>{this.props.cookieProp.name}</p>

        </div>
      )
    }
  }

  export default OurIngredientItem;