import React from 'react';
import { connect } from 'react-redux';

let DetailView = (props) => {
  console.log(props);
  var currentPost = props.posts.find(post => post.id === props.match.params.id);

  return (
    <div>
      <h1>{currentPost.topic}</h1>
      <p>{currentPost.text}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state;
};

DetailView = connect(mapStateToProps)(DetailView);

export default DetailView;