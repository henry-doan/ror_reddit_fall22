import { useState, useEffect } from 'react';

const TopicForm = ({ addTopic, id, title, body, setEdit, updateTopic }) => {
  const [topic, setTopic] = useState({ title: '', body: '' })

  useEffect( () => {
    if (id) {
      setTopic({ title, body })
    }
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateTopic(id, topic)
      setEdit(false)
    } else {
      addTopic(topic)
    }
    setTopic({ title: '', body: '' })
  }

  return (
    <>
      <h2>{id ? 'Edit' : 'Create'} Topic</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        {/* string */}
        <input 
          name='title'
          value={topic.title}
          onChange={(e) => setTopic({ ...topic, title: e.target.value })}
          required
        />
        {/* number */}
        {/* <input 
          type='number'
          name='age'
          value={topic.age}
          onChange={(e) => setTopic({ ...topic, age: e.target.value })}
          required
        /> */}
        {/* boolean */}
        {/* <input 
          type='checkbox'
          name='friend'
          value={topic.friend}
          onChange={(e) => setTopic({ ...topic, friend: e.target.value })}
          required
        /> */}
        <label>Body</label>
        {/* text */}
        <textarea
          name='body'
          value={topic.body}
          onChange={(e) => setTopic({ ...topic, body: e.target.value })}
          required
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default TopicForm;