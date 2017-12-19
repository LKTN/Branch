const initialState = {
  posts: [
    {topic: 'Соданный пост 1', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nesciunt explicabo earum perferendis ea, minima numquam repudiandae, deleniti porro eligendi modi nulla, voluptas iure ipsa.'},
    {topic: 'Соданный пост 2', text: 'Another text.'}
  ],
  showAll: false
}

const blogApp = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return {
        posts: [
          ...state.posts,
          {
            topic: action.topic,
            text: action.text
          }
          
        ],
        showAll: state.showAll
      }

    case 'TOGGLE_FILTER':
      return {
        posts: state.posts,
        showAll: !state.showAll
      }
      
    default:
      return state
  }
}

export default blogApp