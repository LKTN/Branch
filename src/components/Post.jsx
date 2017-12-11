import React from 'react';


class Post extends React.Component {
  render() {
    return (
      <article className='post'>
        <h2 className='post__header'>Соданный пост 1</h2>
        <p className='post__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nesciunt explicabo earum perferendis ea, minima numquam repudiandae, deleniti porro eligendi modi nulla, voluptas iure ipsa.</p>
      </article>
    )
  }
}

export default Post;