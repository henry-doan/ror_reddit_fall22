import TopicShow from './TopicShow';

const TopicList = ({ topics, updateTopic, deleteTopic }) => (
  <>
    {/* [
      {id: 1, body: "Kong City", title: 'food'}, 
      {id: 2, body: "Mario City", title: 'mushrooms'}, 
      {id: 3,body: "Peach City", title: 'coins'}, 
    ] */}
    {
      topics.map( t => 
        <TopicShow
          key={t.id}
          {...t}
          updateTopic={updateTopic}
          deleteTopic={deleteTopic}
        />
      )
    }
  </>
)

export default TopicList;