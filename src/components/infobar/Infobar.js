import React from 'react';
import './Infobar.css';
import ProfilePicture from './Picture.svg';

export const Infobar = () => {
  return (
    <header className='info-bar'>
      <span>Published</span>
      <span>Scheduled</span>
      <span>Need Approval</span>
      <span>Error</span>
      <span>Notes</span>
      <img src={ProfilePicture} alt="Profile" className='profile-pic' />
    </header>
  )
}
