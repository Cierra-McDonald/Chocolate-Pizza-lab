import React from 'react';
import chocolate1 from '../images/chocolate1.jpg'
import chocolate2 from '../images/chocolate2.jpg'
import chocolate3 from '../images/chocolate3.jpg'

class ImageSection extends React.Component { 
    render() { 
      return ( 
        <div>
        <h1>Chocolate Pizza's</h1>
        <div>
          <img src={chocolate1} alt='chocolatePizza' class="chocolate-images"/>
          <img src={chocolate2} alt='chocolatePizza' class="chocolate-images"/>
          <img src={chocolate3} alt='chocolatePizza' class="chocolate-images"/>
        </div>
        </div>
      )
    }
  }

  export default ImageSection;
