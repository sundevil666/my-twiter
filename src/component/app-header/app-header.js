import React from 'react';

const AppHeader = ({ liked, allPosts }) => {
  return (
    <div className="d-flex justify-content-around">
      <div>Author name</div>
      <div>Count twit { allPosts }, like { liked }</div>
    </div>
  )
}

export default AppHeader;
