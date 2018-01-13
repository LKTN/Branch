import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/index.js';

let Form = (props) => {
  let topicPost = null;
  let textPost = null;
  return (
    <form className={`form ${props.className ? props.className : ''}`}>
      <p className="form__header">Form of creating a post</p>
      <input
        type="text"
        name="postName"
        className="form__postName"
        placeholder="Name of a post"
        ref={(topic) => {
          topicPost = topic;
        }}
      />
      <textarea
        rows="10"
        cols="45"
        name="postText"
        className="form__postText"
        placeholder="Content of a post"
        ref={(text) => {
          textPost = text;
        }}
      />
      <input
        type="submit"
        value="Create a post"
        className="form__submit"
        onClick={(evt) => {
          evt.preventDefault();

          let posts = props.posts;

          if (!topicPost.value.trim() || !textPost.value.trim()) {
            alert('Bad data!');
            return;
          }

          let slug = topicPost.value
            .toLowerCase()
            .trim()
            .split(' ')
            .join('-');

          for (var i = posts.length - 1; i >= 0; i--) {
            if (posts[i].slug === slug) {
              if (posts[i].countSameSlug) {
                posts[i].countSameSlug += 1;
              } else {
                posts[i].countSameSlug = 1;
              }

              slug = slug + '-' + posts[i].countSameSlug;
            }
          }

          props.dispatch(addPost(topicPost.value, textPost.value, slug));

          topicPost.value = '';
          textPost.value = '';
        }}
      />
    </form>
  );
};

export default connect((state) => ({ posts: state.posts }))(Form);
