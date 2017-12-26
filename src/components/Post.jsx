import React from 'react';
import { Link } from 'react-router-dom';

let Post = (props) => {
  return (
    <article className='post'>
      <div className='post__wrapper'>
        <Link 
          to={props.slug ? props.slug : '/'}
          className='post__header'
          onMouseOver={(evt) => {evt.target.parentElement.parentElement.classList.add('post--active')}}
          onMouseOut={(evt) => {evt.target.parentElement.parentElement.classList.remove('post--active')}}
        >{props.title}</Link>
        <p className='post__text'>{props.text}</p>
      </div>
    </article>
  )
}

export default Post;