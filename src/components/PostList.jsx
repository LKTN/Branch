import React from 'react';
import { connect } from 'react-redux';
import Post from './Post.jsx';

const mapStateToProps = state => {
  switch(state.showAll) {
    case true:
      return state
    case false:
      return state
  }

}

let postList = ({posts, showAll}) => {
    var listPosts = posts.map((post, ind) => (
      <Post title={post.topic} text={post.text} key={ind} />
    )).reverse();

    if(!showAll) {
      listPosts.splice(2);
    }

    return listPosts; 
}


const PostList = connect(
  mapStateToProps
)(postList);

export default PostList;