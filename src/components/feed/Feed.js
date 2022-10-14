import React from 'react';
import { Post } from '../post/Post';
import posts from './data.json';
import './Feed.css';

export const convertDate = (date) => {
  let _date = new Date(date);
  return _date.toLocaleString('en-gb', {day: 'numeric', month: 'long', year: 'numeric'})
}

export const Feed = () => {
  return (
    <div>
      { posts.posts_by_date && Object.keys(posts.posts_by_date).sort((a, b) => new Date(b) - new Date(a)).map(date => (
        <div key={date} className="daily-post">
          <div className='date'>{convertDate(date)}</div>
          { posts.posts_by_date[date].map((post, i) => (
            <Post props={post} key={i} />
          )) }
        </div>
      ))}
    </div>
  )
}
