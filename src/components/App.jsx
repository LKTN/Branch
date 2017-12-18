import React from 'react';
import Header from './Header.jsx';
import Form from './Form.jsx';
import PostList from './PostList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
        <div>
          <Header />
          <Form />
          <PostList />
        </div>
      )
  }
}

export default App;