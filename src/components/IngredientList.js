import React from 'react';
import OurIngredientItem from './IngredientItem'


class OurIngredientList extends React.Component { 
    render() { 
      return ( 
        <div>
          < OurIngredientItem name="butter" amount="2 teaspoons"/>
          < OurIngredientItem name="chocolate-hazelnut" amount="1/4 cup"/>
        </div>
      )
    }
  }

  export default OurIngredientList;