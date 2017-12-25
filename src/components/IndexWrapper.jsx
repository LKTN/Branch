import React from 'react';
import Form from './Form.jsx';
import PostList from './PostList.jsx';
import Filter from './Filter.jsx';


let IndexWrapper = () => (
  <div className='indexWrapper'>
    <Form className='indexWrapper__form' />
    <PostList />
    <Filter className='indexWrapper__filter' />
  </div>
);

export default IndexWrapper;