import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/index.js';

class Form extends React.Component {
  render() {
    return (
      <form className={`form ${this.props.className}`}>
        <p className='form__header'>Форма создания поста</p>
        <input type='text' name='postName' className='form__postName' placeholder='Название поста' ref={ (topic) => {this.topic = topic} }/>
        <textarea rows="10" cols="45" name="postText" className='form__postText' placeholder='Содержание поста' ref={ (text) => {this.text = text} }></textarea>
        <input type="submit" value="Создать пост" className='form__submit' onClick={(evt) => {
          evt.preventDefault();

          let topic = this.topic.value;
          let text = this.text.value;

          if( !topic.trim() || !text.trim() ) {
            alert('Некорректные данные!');
            return
          }

          this.props.dispatch( addPost(topic, text) )

          this.topic.value = '';
          this.text.value = '';
        }} />
      </form>
    )  
  }
}

export default connect()(Form);