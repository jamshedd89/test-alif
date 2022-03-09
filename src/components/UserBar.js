import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Badge, ListGroup } from 'react-bootstrap';
import { Context } from '../index';


const UserBar = observer(()=>{
  const { post } = useContext(Context);

  return ( 
    <div>
      <h3>
        <Badge bg="success">Список пользователя</Badge>
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
    </div>
  )
})

export default UserBar;
