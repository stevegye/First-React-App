
import {persons} from './persons';
import { useState } from 'react';


export const Product = (props) => {
  const { imgUrl, vote, url, title, description, avatarUrl } = props;
  
  const [value, setValue] = useState(vote);


  const HandleUpVote = () => {
  return setValue( value + 1)
   
  }
 
  
  
 
 
return <div className='item'>
            <div className='image'>
              <img    
               src={imgUrl}
                alt=""  
              />
            </div>
            <div className='middle aligned    content'>
               <div>
                    <a onClick={HandleUpVote}>
                <i className= 'large caret up icon'></i>
      </a>
      
               {value} 
            </div>
            <div className='description'>
               <a href={url}>
                 {title}
               </a>
               <p>{description}
               </p>
            </div>
            <div className='extra'>
               <span>Submitted by:</span>
          <img className='ui avatar image'   
               src={avatarUrl}
                alt=""  
              />
                
        </div>
      </div>
    </div>
    
}
  