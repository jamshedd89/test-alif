import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Row } from 'react-bootstrap';
import { Context } from '../index';
import PostItem from './PostItem';


const PostList = observer(()=>{
  const { post } = useContext(Context);

  return (
    <Row>
      {post.posts.map( item =>
        <PostItem key={item.id} post={item} />
      )}
    </Row>
  )
});


export default PostList;