import React from 'react';
import SocialMediaBtn from './social-media-btn';

const SocialMediaBtns = () => {
  return (
    <div className='flex gap-4'>
      <span className='text-secondary-color'>---</span>
      <SocialMediaBtn
        icon='fa-linkedin-in'
        hoverBgColor='hover:text-linedin-color'
      />
      <SocialMediaBtn
        icon='fa-whatsapp'
        hoverBgColor='hover:text-whatsapp-color'
      />
      <SocialMediaBtn icon='fa-github' hoverBgColor='hover:text-github-color' />
      <span className='text-secondary-color'>---</span>
    </div>
  );
};

export default SocialMediaBtns;
