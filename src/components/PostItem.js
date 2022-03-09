import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { POST_VIEW } from '../utils/consts';


const PostItem = ({ post })=>{
  const history = useHistory();
  
  
  return (
    <Col md={4} className="col-card-item">
      <Card >
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>
            {post.body}
          </Card.Text>
          <Button 
            variant="outline-secondary"
            onClick={()=>history.push(POST_VIEW+'/'+post.id)}  
          >View</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default PostItem;
