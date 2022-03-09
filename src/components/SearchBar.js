import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import { Context } from '../index';
import { searchPost, fetchPosts } from '../http/postApi';



const SearchBar = observer(()=>{
  const { post } = useContext(Context);
  const [ text, setText ] = useState(null);
  const [ loading, setLoading ] = useState(true);

  const handleChange = (ev)=>{
    setText(ev.target.value);
  }

  const hanleSearch = ()=>{
    setLoading(true);
    if(!text || text==='') {
      fetchPosts(null, post.page, 20).then(data=>{
        post.setPosts(data);
        post.setTotalCount(data.length);
        setLoading(false);
      });
      return;
    }else{
      searchPost(text).then(data=>{
        post.setPosts(data);
        post.setTotalCount(data.length);
        setLoading(false);
      });
    }
  }


  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Поиск постов по ключевым словам"
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
