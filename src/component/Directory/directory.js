import React from 'react';

import ShopMen from './../../img/shopMens.jpg';
import ShopWomen from './../../img/shopWomens.jpg';

import './directory.css';


const Directory = props => {
    return (
          <div className = 'directory'>
              <div className = 'wrap' >

              <div className = 'item'
              style ={{backgroundImage: `url( ${ShopWomen})`}}>
 
              <a>
                   ShopWomen
              </a>

              </div>

              
              <div className = 'item'
              style = {{backgroundImage:`url(${ShopMen})`}}>

            <a>
              ShopMen
            </a>
        
              </div>
              </div>

          </div>
    )
}

export default Directory;