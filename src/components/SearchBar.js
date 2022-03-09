import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { FormControl, InputGroup, ListGroup } from 'react-bootstrap';
import { Context } from '../index';


const SearchBar = observer(()=>{
  const { post } = useContext(Context);

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Поиск"
      />
      <InputGroup.Text id="basic-addon2">Поиск</InputGroup.Text>
    </InputGroup>
  )
})

export default SearchBar;
