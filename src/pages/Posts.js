import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchPosts } from '../http/postApi';
import { fetchAllUser } from '../http/userApi';
import SearchBar from '../components/SearchBar';
import UserBar from '../components/UserBar';
import PostList from '../components/PostList';
import PagePagination from '../components/PagePagination';
import Loading from '../components/Loading';


const Posts = observer(()=>{
  const { post } = useContext(Context);
  const [ loading, setLoading ] = useState(true);


  useEffect(()=>{
    setLoading(true);
    fetchAllUser().then(data=>post.setUsers(data));
    fetchPosts(post.selectedUser.id, post.page, 20).then(data=>{
      post.setPosts(data);
      post.setTotalCount(data.length);
      setLoading(false);
    });
  }, [post.page, post.selectedUser]);


  if(loading){
    return <Loading />
  }


  return (
    <Container>
      <Row className='mt-2'>
        <Col md={3}>
          <SearchBar />
          <UserBar />
        </Col>
        <Col md={9}>
          <PostList />
          <PagePagination />
        </Col>
      </Row>
    </Container>
  )
});

export default Posts;