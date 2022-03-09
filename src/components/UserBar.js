import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Badge, ListGroup, Button } from 'react-bootstrap';
import { Context } from '../index';
import { fetchPosts } from '../http/postApi';


const UserBar = observer(()=>{
  const { post } = useContext(Context);
  

  const handleClear = ()=>{
    fetchPosts(null, post.page, 20).then(data=>{
      post.setPosts(data);
      post.setSelectedUser({})
      post.setTotalCount(data.length);
    });
  }


  return ( 
    <div className='mb-4'>
      <h3>
        <Badge className='d-block' bg="success">Cписок пользователей</Badge>
      </h3>
      
      <ListGroup>
        {post.users.map(user=>
          <ListGroup.Item 
            style={{cursor:"pointer"}}
            active={user.id === post.selectedUser.id}
            onClick={()=>post.setSelectedUser(user)}
            key={user.id}
          >
            {user.name}
          </ListGroup.Item>
        )}
      </ListGroup>
      {
        post.selectedUser.id ?
          <Button 
            className='mt-3 btn-sm' 
            variant="outline-danger"
            onClick={handleClear}
          >Очистить фильтр</Button>
        : null
      }
    </div>
  )
})

export default UserBar;
