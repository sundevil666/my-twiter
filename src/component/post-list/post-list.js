import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css'

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
  const items = posts.map(item => (
    <PostListItem
      label={ item.label }
      like={item.like}
      important={ item.important }
      key={ item.id }
      onDelete={() => onDelete(item.id)}
      onToggleImportant={() => onToggleImportant(item.id)}
      onToggleLiked={() => onToggleLiked(item.id)}
    />
  ))
  return (
    <ul className="app-list list-group">
      { items }
    </ul>
  )
}

export default PostList;
