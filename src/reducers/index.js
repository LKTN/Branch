const initialState = {
  posts: [
    {topic: 'Соданный пост 1', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nesciunt explicabo earum perferendis ea, minima numquam repudiandae, deleniti porro eligendi modi nulla, voluptas iure ipsa.'},
    {topic: 'Соданный пост 2', text: 'Another text.'}
  ],
  visibilityFilter: 'SHOW_THREE'
}

const blogApp = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return {
        posts: [
          {
            topic: action.topic,
            text: action.text
          },
          ...state.posts
        ],
        visibilityFilter: state.visibilityFilter
      }

    case 'SHOW_THREE':
      return state
    case 'SHOW_ALL':
      return state
    default:
      return state
  }
}

export default blogApp