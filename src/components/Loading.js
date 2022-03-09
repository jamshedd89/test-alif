import React from 'react';
import { Spinner } from 'react-bootstrap';
import './style.css';


export default function Loading(){

  return(
    <div className='spinner-block'>
      <Spinner animation="border" className='spinner' role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )
}