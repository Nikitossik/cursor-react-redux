import React from 'react';
import { useSelector } from 'react-redux';
import Post from './components/Post';
import AddPostForm from './components/AddPostForm';

function App() {
  const posts = useSelector(state => state.posts);
  return (
    <div className='wrapper'>
      <div className='container'>
        <AddPostForm />
        <div className='posts'>
          <h2 className='title'>
            Posts
          </h2>
          {
            posts.map(post => <Post {...post} key={post.id} />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
