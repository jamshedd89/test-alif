import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Image, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { fetchOnePost } from '../http/postApi';



function ViewPost(){
  const [ post, setPost ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const { id } = useParams();


  useEffect(()=>{
    fetchOnePost(id).then(data=>{
      setPost(data);
    });
    setLoading(false);
  }, []);


  if(loading) return <h1>Loading...</h1>

  return (
    <Container>
      <div>{post.title}</div>
      <div>{post.body}</div>
    </Container>
  )
}


export default ViewPost;