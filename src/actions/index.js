export const addPost = (topic, text, slug) => {
    return {
      type: 'ADD_POST',
      topic: topic,
      text: text,
      slug: slug
    }
  }

export const toggleFilter = () => {
    return {
      type: 'TOGGLE_FILTER'
    }
  }