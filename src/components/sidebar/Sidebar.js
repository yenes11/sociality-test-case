import React, {useState} from 'react';
import './Sidebar.css';
import SocialityLogo from './Sociality-logo.svg';
import NotificationsLogo from './notifications.svg';
import MenuIcon from './menu.svg';
import { ChannelMenu } from '../channelMenu/ChannelMenu';
import { Channel } from '../channel/Channel';

const channels = ['publish', 'summary', 'engage', 'listen', 'report']

export const Sidebar = () => {
  const [selectedChannel, setSelectedChannel] = useState('');
  const [selectedServer, setSelectedServer] = useState('');

  const changeChannel = (e) => {
    e.preventDefault();
    if (selectedChannel === e.currentTarget.id)
      setSelectedChannel('');
    else
      setSelectedChannel(e.currentTarget.id);
  }

  const changeServer = (e) => {
    e.preventDefault();
    setSelectedServer(e.currentTarget.id);
  }

  const toggleSidebar = () => {
    // debugger
    const sideBarWidth = document.querySelector('.sidebar-container');
    if (sideBarWidth.style.width === '80px')
      sideBarWidth.style.width = '320px';
    else
      sideBarWidth.style.width = '80px';
  }

  return (
    <div className='sidebar-container'>
      <div className="sidebar-header">
        <img onClick={toggleSidebar} src={MenuIcon} alt="Toggle menu" className='hamburger-menu' />
        <img src={SocialityLogo} alt="Sociality Logo" />
      </div>
      <div className="sidebar-panel">
        { [0, 1, 2, 3, 4, 5].map(i => (
          <Channel click={changeServer} key={i} i={i} isSelected={i.toString() === selectedServer} />
        )) }
      </div>
      <div className="sidebar-channels">
        <div className="notifications">
          <img src={NotificationsLogo} alt="Notifications" />
          <span>NOTIFICATIONS</span>
          <div className="notification-count">
            29
          </div>
        </div>
        <ul className='channel-list'>
          { channels?.map((channel, i) => (
            <ChannelMenu click={changeChannel} key={i} isSelected={selectedChannel === channel} name={channel} />
          ))}
        </ul>
      </div>
    </div>
  )
}
