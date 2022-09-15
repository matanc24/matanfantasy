import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <div className='header'>
      <h1 className='heading-main'>פנטזי</h1>
      <a
        href='https://dreamteam.sport5.co.il/?openExternal=true'
        target='_blank'
      >
        <img
          src='https://dreamteam.sport5.co.il/Images/logo.png'
          alt='sport5'
        />
      </a>

      <div className='picture'>
        <img
          src='https://i.ibb.co/PMmpPCM/Untitled-1.png'
          alt='pierrot'
          className='img two'
        />
      </div>
    </div>
  );
};

export default Header;
