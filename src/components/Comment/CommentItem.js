import React from 'react';
import { Image, Button } from 'react-bootstrap';


export default function CommentItem({ comment }){
  
  return(
    <div className="d-flex flex-start mb-3 comment-item">
      <Image
        className="rounded-circle shadow-1-strong me-3"
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
        alt="avatar"
        width="65"
        height="65"
      />
      <div className="flex-grow-1 flex-shrink-1">
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-1">
              {comment.name} <span className="small">- {comment.email}</span>
            </p>
            <a href="#!">
              <i className="fas fa-reply fa-xs"></i>
              <Button variant="outline-secondary">Ответ</Button>
            </a>
          </div>
          <p className="small mb-0">
            {comment.body}
          </p>
        </div>
      </div>
    </div>
  )
}