import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import CommentItem from './CommentItem';
import './style.css';


function Comment({ comments }){


  return (
      <section className='mt-3 mb-5'>
        <Row>
          <Col>
            <Card>
              <Card.Body className="p-4">
                <h5 className="text-center mb-4 pb-2">Comments</h5>
                <Row>
                  <Col>
                    {
                      comments ? comments.map(comment=>{
                        return <CommentItem comment={comment} key={comment.id} />
                      }) : null
                    }
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
  )
}

export default Comment;