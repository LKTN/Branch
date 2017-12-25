import React from 'react';
import { Link } from 'react-router-dom';

let Post = (props) => {
  return (
    <article className='post'>
      <Link to={props.id ? props.id : '/'} className='post__header'>{props.title}</Link>
      <p className='post__text'>{props.text}</p>
    </article>
  )
}

export default Post;