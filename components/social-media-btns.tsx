import React from 'react';
import SocialMediaBtn from './social-media-btn';

const SocialMediaBtns = () => {
  return (
    <div className='flex gap-4'>
      <span className='text-secondary-color'>---</span>
      <SocialMediaBtn
        icon='fab fa-linkedin-in'
        hoverBgColor='hover:text-linedin-color'
        link='https://www.linkedin.com/in/eslam-mohamed-bahgat-3367a825/'
      />
      <SocialMediaBtn
        icon='fab fa-whatsapp'
        hoverBgColor='hover:text-whatsapp-color'
        link='https://wa.me/00201124111131'
      />
      <SocialMediaBtn
        icon='fab fa-github'
        hoverBgColor='hover:text-github-color'
        link='https://github.com/eslammb'
      />
      <span className='text-secondary-color'>---</span>
    </div>
  );
};

export default SocialMediaBtns;
