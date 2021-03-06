import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Pagination } from 'react-bootstrap';
import { Context } from '../index';



const PagePagination = observer(()=>{
  const { post } = useContext(Context);

  const pageCount = Math.ceil(post.totalCount / post.limit);
  const pages = [];

  if(pageCount - post.limit === 1){
    pages.push(1);
  }else{
    for (let i = 0; i < pageCount - post.limit + 1; i++) {
      pages.push(i + 1);
    }
  }


  return (
    <Pagination className='mt-5'>
      { pages.map(page => 
        <Pagination.Item
          key={page}
          active={post.page === page}
          onClick={()=>post.setPage(page)}
        >
          {page}
        </Pagination.Item>
      )}
    </Pagination>
  )
})


export default PagePagination;