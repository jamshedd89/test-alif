import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchPosts } from '../http/postApi';


const Posts = observer(()=>{
  const { post } = useContext(Context);
  const [ loading, setLoading ] = useState(true);


  useEffect(()=>{
    fetchPosts().then(data=>{
      post.setPosts(data);
      setLoading(false);
    })
  }, []);


  if(loading){
    return <h1>Loading...</h1>
  }


  return (
    <div>Posts</div>
  )
});

export default Posts;