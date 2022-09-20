import React from 'react';
import './Channel.css';
import Logo1 from './Logo1.svg';
import Logo2 from './Logo2.svg';
import Logo3 from './Logo3.svg';
import Logo4 from './Logo4.svg';
import Logo5 from './Logo5.svg';
import Logo6 from './Logo6.svg';

const logos = {
  0: Logo1,
  1: Logo2,
  2: Logo3,
  3: Logo4,
  4: Logo5,
  5: Logo6
}

export const Channel = ({i, click, isSelected }) => {
  return (
    <div className='channel' id={i} onClick={click}>
      <img src={logos[i]} alt="Channel logo" className='channel-logo' style={{ opacity: isSelected ? '1' : '.4'}} />
      { i ? (
        <div className="channel-notifications">
          {i}
        </div>
      ) : <></>}
      { isSelected ? (
        <div className="selected-channel"></div>
      ) : <></> }
    </div>
  )
}
