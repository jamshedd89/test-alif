import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { POST_ROUTE } from '../utils/consts';


export default function BackComponent(){
  const history = useHistory();

  return(
    <div className='back-block'>
      <Button 
        variant="outline-secondary"
        onClick={()=>history.push(POST_ROUTE)} 
      >
        Назад
      </Button>
    </div>
  )
}