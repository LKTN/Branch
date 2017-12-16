import React from 'react';
import Post from './Post.jsx';

class PostList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var data = [
      {topic: 'Соданный пост 1', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nesciunt explicabo earum perferendis ea, minima numquam repudiandae, deleniti porro eligendi modi nulla, voluptas iure ipsa.'},
      {topic: 'Соданный пост 2', text: 'Another text.'}
    ]
    // console.log(store.getState())

    var posts = data.map((post, ind) => (
      <Post title={post.topic} text={post.text} key={ind} />
    ));
    return posts; 
  }
}

export default PostList;