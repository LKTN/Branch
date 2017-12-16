import React from 'react';


class Post extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.text = props.text;
  }
  render() {
    return (
      <article className='post'>
        <h2 className='post__header'>{this.title}</h2>
        <p className='post__text'>{this.text}</p>
      </article>
    )
  }
}

export default Post;