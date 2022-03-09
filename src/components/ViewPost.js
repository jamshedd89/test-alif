import React from 'react';
import Comment from './Comment';
import BackComponent from './BackComponent';


function ViewPost({ post }){



  return (
    <div className='view-post'>
      <BackComponent />
      <h3 className='view-post-title'>{post.title}</h3>
      <div className='view-post-body'>{post.body}</div>
      <Comment comments={post.comments} />
    </div>
  )
}

export default ViewPost;