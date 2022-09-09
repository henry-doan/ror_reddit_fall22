import { useState } from 'react';
import TopicForm from './TopicForm';

const TopicShow = ({ id, title, body, updateTopic, deleteTopic }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <h3>{title}</h3>
      <p>{body}</p>
      { editing ?
        <>
          <TopicForm 
            id={id}
            title={title}
            body={body}
            updateTopic={updateTopic}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>
            Cancel
          </button>
        </> 
        :
        <button onClick={() => setEdit(true)}>
          Edit
        </button>
      }
      <button onClick={() => deleteTopic(id)}>
        Delete
      </button>
      <button>Comments</button>
    </>
  )
}

export default TopicShow;