import React from 'react';
import { connect } from 'react-redux'
import { addPost } from '../actions/index.js';

let Form = ({ dispatch }) => {
  return (
      <div className='form'>
        <form className='form__fields'>
          <p className='form__header'>Форма создания поста</p>
          <input type='text' name='postName' className='form__postName' placeholder='Название поста' />
          <textarea rows="10" cols="45" name="postText" className='form__postText' placeholder='Содержание поста'></textarea>
          <input type="submit" value="Создать пост" className='form__submit' onClick={(evt) => {
            evt.preventDefault();

            var postHeader = document.getElementsByClassName('form__postName')[0].value;
            var postText = document.getElementsByClassName('form__postText')[0].value;

            if(!postText.trim() || !postHeader.trim()) {
              alert('Некорректные данные!');
              return
            }

            var data = {
              topic: postHeader,
              text: postText
            }
            console.log(data);

            dispatch( addPost(postHeader, postText) )

            document.getElementsByClassName('form__postName')[0].value = '';
            document.getElementsByClassName('form__postText')[0].value = '';
          }} />
        </form>
      </div>
    )  
}

Form = connect()(Form);

export default Form;