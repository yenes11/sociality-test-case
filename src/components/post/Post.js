import React from 'react';
import './Post.css';
import deleteIcon from './delete.svg';
import optionsIcon from './options.svg';
import cancelIcon from './cancel.svg';
import likesIcon from './likes.svg';
import sharesIcon from './shares.svg';
import viewsIcon from './views.svg';
import commentsIcon from './comments.svg';
import FacebookLogo from './FacebookLogo.svg';
import InstagramLogo from './Instagram-logo.svg';
import TwitterLogo from './Twitter-logo.svg';
import BrokenImage from './no-image.png';
import { convertDate } from '../feed/Feed';

const statusColor = {
  0: '#f6be37',
  1: '#39c183',
  2: '#67b1f1',
  3: '#ababab',
  4: '#fa6450'
}

const channelLogo = {
  instagrambusiness: InstagramLogo,
  twitter: TwitterLogo,
  facebook: FacebookLogo
}

export const Post = ({ props : { published_at, isPublished, status, entry, link, account }}) => {
  const brokenImage = (e) => {
    e.target.src = BrokenImage;
  }

  function urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url) {
      return '<a href="' + url + '" target="_blank" rel="noreferrer">' + url + '</a>';
    })
  }

  return (
    <div className='card'>
      <a target='_blank' rel="noreferrer" href={account.link} className="post-status" style={{ backgroundColor: statusColor[status]}}>
        <img src={channelLogo[account.channel]} alt="social media logo" />
      </a>
      <div className="post-details">
        <span className='post-date'>{ convertDate(published_at.split(' ')[0]) + ' - ' + published_at.split(' ')[1] }</span>
        <div className="post-actions">
          <img src={cancelIcon} alt="cancel" />
          <img src={deleteIcon} alt="delete" />
          <img src={optionsIcon} alt="options" />
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: urlify(entry.message)}} className="post-text"></div>
      <img src={entry.image} onError={brokenImage} alt="Post" className='post-photo' />
      <div className="post-statistics">
        <img src={likesIcon} alt="likes" />
        <span>0</span>
        <img src={commentsIcon} alt="comments" />
        <span>0</span>
        <img src={sharesIcon} alt="shares" />
        <span>0</span>
        <img src={viewsIcon} alt="views" />
        <span>0</span>
      </div>
    </div>
  )
}