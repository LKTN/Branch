import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/index.js';

class Form extends React.Component {
  render() {
    return (
      <form className={`form ${this.props.className ? this.props.className : ''}`}>
        <p className='form__header'>Форма создания поста</p>
        <input type='text' name='postName' className='form__postName' placeholder='Название поста' ref={ (topic) => {this.topic = topic} }/>
        <textarea rows="10" cols="45" name="postText" className='form__postText' placeholder='Содержание поста' ref={ (text) => {this.text = text} }></textarea>
        <input type="submit" value="Создать пост" className='form__submit' onClick={(evt) => {
          evt.preventDefault();
          let posts = this.props.posts;

          let topic = this.topic.value;
          let text = this.text.value;

          if( !topic.trim() || !text.trim() ) {
            alert('Некорректные данные!');
            return
          }

          let slug = topic.toLowerCase().trim().split(' ').join('-');

          for (var i = posts.length - 1; i >= 0; i--) {
            if(posts[i].slug === slug) {
              
              if(posts[i].countSameSlug) {
                posts[i].countSameSlug += 1; 
              } else {
                posts[i].countSameSlug = 1; 
              }

              slug = slug + '-' + posts[i].countSameSlug;

            }
          }

          this.props.dispatch( addPost(topic, text, slug) )

          this.topic.value = '';
          this.text.value = '';
        }} />
      </form>
    )  
  }
}

export default connect( state => ({posts: state.posts}) )(Form);