import React from 'react';

class OurIngredientItem extends React.Component { 
    render() { 
      return ( 
        <div>
            <p>{this.props.amount}</p>
            <p>{this.props.name}</p>

        </div>
      )
    }
  }

  export default OurIngredientItem;