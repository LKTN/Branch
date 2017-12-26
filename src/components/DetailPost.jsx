import React from 'react';
import { connect } from 'react-redux';
import BackButton from './BackButton.jsx'

let DetailView = (props) => {
  var currentPost = props.posts.find(post => post.slug === props.match.params.slug);
  return (
    <div className='detailPost'>
      <BackButton className='detailPost__backButton' goBack={props.history.goBack} />
      <h1 className='detailPost__topic'>{currentPost.topic}</h1>
      <p className='detailPost__text'>{currentPost.text}</p>
    </div>
  )
}

DetailView = connect(state => state)(DetailView);

export default DetailView;