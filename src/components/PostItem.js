import React from 'react';
import { Col, Card, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { POST_VIEW } from '../utils/consts';


const PostItem = ({ post })=>{
  const history = useHistory();
  
  
  return (
    <div>
      <div onClick={()=>history.push(POST_VIEW+'/'+post.id)}>
        {post.title}
      </div>
    </div>
  )
}

export default PostItem;
