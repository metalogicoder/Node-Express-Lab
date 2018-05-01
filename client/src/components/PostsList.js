import React from 'react';

import PostCard from './PostCard';
import '../styles/PostsList.css';


const PostsList = props => {
  return (
    <div className='PostsList'>
      {props.posts.map(post => (
        <PostCard post={post} />
      ))}
    </div>
  )
}

export default PostsList;