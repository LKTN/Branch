import uuidv4 from 'uuid/v4';

export const addPost = (topic, text) => {
    return {
      type: 'ADD_POST',
      topic: topic,
      text: text,
      id: uuidv4()
    }
  }

export const toggleFilter = () => {
    return {
      type: 'TOGGLE_FILTER'
    }
  }