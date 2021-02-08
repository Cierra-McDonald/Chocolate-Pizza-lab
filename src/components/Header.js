import React from 'react';
import { Link } from 'react-router-dom'

class OurHeader extends React.Component { 
    render() { 
      return ( 
        <div>
          <h1>Hi, I am the Header!</h1>
       
         <nav>
         <Link to ='/Home'> Home </Link>
       </nav>
       </div>
      )
    }
  }

  export default OurHeader;