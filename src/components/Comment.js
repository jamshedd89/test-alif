import React from 'react';
import { Col, Card, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


function Comment({ post }){


  console.log(post);

  return (
    <div>
      <div>{post.title}</div>
      <div>{post.body}</div>
    </div>
  )
}

export default Comment;