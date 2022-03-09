import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import { Context } from '../index';
import { searchPost, fetchPosts } from '../http/postApi';



const SearchBar = observer(()=>{
  const { post } = useContext(Context);
  const [ text, setText ] = useState('');

  const handleChange = (ev)=>{
    setText(ev.target.value);
    hanleSearch();
  }

  const hanleSearch = ()=>{
    if(!text) return;

    searchPost(text).then(data=>{
      post.setPosts(data);
      post.setTotalCount(data.length);
    });
  }


  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Поиск по имена поста"
        onChange={handleChange}
      />
      <Button 
        variant="outline-secondary" 
        id="button-addon2"
        onClick={hanleSearch}
      >Поиск</Button>
    </InputGroup>

  )
})

export default SearchBar;
