import React from 'react';
import Header from './Header.jsx';
import Form from './Form.jsx';
import PostList from './PostList.jsx';
import Filter from './Filter.jsx';

let App = () => {
  return (
      <div>
        <Header />
        <Form />
        <PostList />
        <Filter />
      </div>
    )
}

export default App;