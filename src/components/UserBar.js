import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { ListGroup } from 'react-bootstrap';
import { Context } from '../index';


const UserBar = observer(()=>{
  const { post } = useContext(Context);

  return (
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
  )
})

export default UserBar;
