import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <div className='header'>
      <h1>פנטזי ליגת העל</h1>
      <a href='https://dreamteam.sport5.co.il/?openExternal=true'>
        <img
          src='https://dreamteam.sport5.co.il/Images/logo.png'
          alt='sport5'
        />
      </a>

      <div className='pictures'>
        <img
          src='https://www.israelhayom.co.il/wp-content/uploads/2022/08/04/04/New_AMI_5566-e1659642570911-960x640.jpg'
          alt='zehavi'
          className='img one'
        />
        <img
          src='https://ynet-images1.yit.co.il/picserver5/crop_images/2022/07/28/rJDgeHkpc/rJDgeHkpc_0_0_3000_1689_0_large.jpg'
          alt='pierrot'
          className='img two'
        />
        <img
          src='https://sport1images.maariv.co.il/image/upload/1073314'
          alt='sfouri'
          className='img three'
        />
      </div>
    </div>
  );
};

export default Header;
