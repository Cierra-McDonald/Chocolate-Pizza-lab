import React from 'react';
import facebook from '../images/facebook2.png'
import twitter from '../images/twitter.png' 
import instagram from '../images/instagram.png'


import { Link } from 'react-router-dom'

class OurHeader extends React.Component { 
    render() { 
      return ( 
        <div class = "header-div">
          <nav class = "social-nav">
          <a href= "https://www.facebook.com/">   
            <img src= {facebook} alt='chocolatePizza' class = "social-media"/>
          </a>
          <a href= "https://twitter.com/">
            <img src= {twitter} alt='chocolatePizza' class = "social-media"/>
          </a>
          <a href = "https://www.instagram.com/">
            <img src= {instagram} alt='chocolatePizza' class = "social-media"/>
          </a>
          </nav>
         <nav>
         <Link to ='/Home'> Home </Link>
       </nav>
       </div>
      )
    }
  }

  export default OurHeader;
 