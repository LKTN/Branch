import React from 'react';
import {render} from 'react-dom';
import Header from './components/Header.jsx';
import Form from './components/Form.jsx';
import Post from './components/Post.jsx';
import './style.scss'

var post = [{topic: 'Соданный пост 1', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nesciunt explicabo earum perferendis ea, minima numquam repudiandae, deleniti porro eligendi modi nulla, voluptas iure ipsa.'}]
localStorage.setItem('Posts', JSON.stringify(post));

class App extends React.Component {
  constructor(props) {
    super(props);
    let data = JSON.parse(localStorage.getItem('Posts'));
    this.state = {
        data: data
    };
  }

  render () {
    return (
        <div>
          <Header />
          <Form />
          <Post /><Post /><Post />
        </div>
      )
  }
}

render(<App/>, document.getElementById('react-app'));