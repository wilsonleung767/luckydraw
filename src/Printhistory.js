
import React from 'react';


function Print(props){ 
    const record = props.record
    return (
      record.map( (item,index) => 
         <article key ={index} >
            <h3 className='h3'>  {item} </h3>
        </article>
        )
      
    )

}

export default Print