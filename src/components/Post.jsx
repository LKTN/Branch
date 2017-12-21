import React from 'react';

let Post = (props) => {
  return (
    <article className='post'>
      <h2 className='post__header'>{props.title}</h2>
      <p className='post__text'>{props.text}</p>
    </article>
  )
}

export default Post;