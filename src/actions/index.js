export const addPost = (topic, text) => {
    return {
      type: 'ADD_POST',
      topic: topic,
      text: text
    }
  }