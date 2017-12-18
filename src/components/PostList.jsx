import React from 'react';
import { connect } from 'react-redux';
import Post from './Post.jsx';

const mapStateToProps = state => {
  switch(state.visibilityPosts) {
    case 'SHOW_ALL':
      return state
    case 'SHOW_THREE':
      return state
  }

}

const postList = ({posts}) => {
    // var data = [
    //   {topic: 'Соданный пост 1', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nesciunt explicabo earum perferendis ea, minima numquam repudiandae, deleniti porro eligendi modi nulla, voluptas iure ipsa.'},
    //   {topic: 'Соданный пост 2', text: 'Another text.'}
    // ]

    var listPosts = posts.map((post, ind) => (
      <Post title={post.topic} text={post.text} key={ind} />
    )).reverse();
    return listPosts; 
}

const PostList = connect(
  mapStateToProps
)(postList);

export default PostList;