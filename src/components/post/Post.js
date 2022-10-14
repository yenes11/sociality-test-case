import React from 'react';
import './Post.css';
import { convertDate } from '../feed/Feed';
import { DeleteIcon, OptionsIcon, CancelIcon, LikesIcon, SharesIcon, ViewsIcon, CommentsIcon, FacebookLogo, InstagramLogo, TwitterLogo, BrokenImage } from './images';

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
          <img src={CancelIcon} alt="cancel" />
          <img src={DeleteIcon} alt="delete" />
          <img src={OptionsIcon} alt="options" />
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: urlify(entry.message)}} className="post-text"></div>
      <img src={entry.image} onError={brokenImage} alt="Post" className='post-photo' />
      <div className="post-statistics">
        <img src={LikesIcon} alt="likes" />
        <span>0</span>
        <img src={CommentsIcon} alt="comments" />
        <span>0</span>
        <img src={SharesIcon} alt="shares" />
        <span>0</span>
        <img src={ViewsIcon} alt="views" />
        <span>0</span>
      </div>
    </div>
  )
}