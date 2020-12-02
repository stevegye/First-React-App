import React from 'react';
import ReactDOM from 'react-dom';

import "semantic-ui-css/semantic.min.css";
import {persons} from './persons';
import { Product } from './Product';








const ProductList = () => {
 
 return (
  
    <div className='ui unstackable items'>
    
     {persons.map((person) => {
      
       return (
         <Product key={person.id} {...person}>
         </Product>
       )
     })}
   
    </div>
  );
}







ReactDOM.render(

    <ProductList />,
  document.getElementById('root')
);


