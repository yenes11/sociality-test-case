import React, { useState, useEffect, useRef } from 'react';
import './ChannelMenu.css';
import EngageLogo from './engage.svg';
import SummaryLogo from './summary.svg';
import ReportLogo from './report.svg';
import PublishLogo from './publish.svg';
import PlusLogo from './plus.svg';
import ListenLogo from './listen.svg';

const logos = {
  'engage': EngageLogo,
  'summary': SummaryLogo,
  'report': ReportLogo,
  'publish': PublishLogo,
  'plus': PlusLogo,
  'listen': ListenLogo
}

export const ChannelMenu = ({ isSelected, name, click }) => {
  const [selectedSubChannel, setSelectedSubChannel] = useState('');
  const subChannel = useRef();

  const selectSubChannel = (e) => {
    e.preventDefault();
    setSelectedSubChannel(e.target.id);
  }

  useEffect(() => {
    if (subChannel.current.style.maxHeight !== '0px') {
      subChannel.current.style.maxHeight = '0px';
    }
    else {
      subChannel.current.style.maxHeight = subChannel.current.scrollHeight + "px";
    } 
  }, [isSelected])

  return (
    <>
      <li onClick={click} id={name} className='sidebar-channel' style={{ backgroundColor: isSelected ? '#f55661' : ''}}>
        <img src={logos[name]} alt="logo" className={isSelected ? 'filter' : ''} />
        <span>{name.toUpperCase()}</span>
        <img src={PlusLogo} alt="See more" />
      </li>
      <ul ref={subChannel} className='sub-channels'>
        { ['Compose', 'Feed'].map(subChannel => (
          <li onClick={selectSubChannel} id={subChannel} key={subChannel} className='sub-channel' style={{color: selectedSubChannel === subChannel ? '#f55661' : ''}}>{subChannel}</li>
        ))}
      </ul>
    </>
  )
}
