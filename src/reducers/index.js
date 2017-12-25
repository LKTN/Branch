const initialState = {
  posts: [
    {topic: 'Соданный пост 1', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nesciunt explicabo earum perferendis ea, minima numquam repudiandae, deleniti porro eligendi modi nulla, voluptas iure ipsa.', id: '110ec58a-a0f2-4ac4-8393-c866d813b8d1'},
    {topic: 'Соданный пост 2', text: '[mapDispatchToProps(dispatch, [ownProps]): dispatchProps] (Object or Function): If an object is passed, each function inside it is assumed to be a Redux action creator. An object with the same function names, but with every action creator wrapped into a dispatch call so they may be invoked directly, will be merged into the component\’s props.', id: '6c84fb90-12c4-11e1-840d-7b25c5ee775a'}
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
            text: action.text,
            id: action.id
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