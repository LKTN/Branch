import React from 'react';
import { connect } from 'react-redux';
import Post from './Post.jsx';

let postList = ({posts, showAll}) => {
    var listPosts = posts.map((post, ind) => (
      <Post title={post.topic} text={post.text.charAt(150) ? post.text.slice(0, 150) + '...' : post.text} slug={post.slug} key={ind} />
    )).reverse();

    if(!showAll) {
      listPosts.splice(2);
    }

    return listPosts; 
}

const PostList = connect(
  state => state
)(postList);

export default PostList;